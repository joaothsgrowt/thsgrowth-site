import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper function to create SMTP transporter
  const getTransporter = () => {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true" || process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASS || "pass",
      },
    });
  };

  // Endpoint 1: Formulário Principal - Falar com Arquiteto Comercial
  app.post("/api/submit-form", async (req, res) => {
    const { name, email, phone, company, role, crm, needs } = req.body;

    console.log("Solicitação de Arquiteto Recebida:", { name, email, phone, company, role, crm, needs });

    const mailOptions = {
      from: '"THS Growth System" <system@thsgrowth.com>',
      to: "joao@thsgrowth.com",
      replyTo: email || undefined,
      subject: `[THS Growth] Novo Contato Comercial: ${name} - ${company || 'Empresa não informada'}`,
      text: `
Nova solicitação para falar com Arquiteto Comercial:

Nome: ${name || 'Não informado'}
E-mail Corporativo: ${email || 'Não informado'}
Telefone / WhatsApp: ${phone || 'Não informado'}
Empresa: ${company || 'Não informada'}
Cargo: ${role || 'Não informado'}
CRM Atual: ${crm || 'Não informado'}
Principal Desafio / Necessidade: ${needs || 'Não informado'}

Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
Origem: Formulário Principal (Falar com Arquiteto Comercial - THS Growth)
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden; color: #111111;">
          <div style="background-color: #002D7A; padding: 24px; text-align: left;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">THS GROWTH</h1>
            <p style="color: #93C5FD; margin: 4px 0 0 0; font-size: 13px;">Nova Solicitação de Arquiteto Comercial</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff;">
            <h2 style="font-size: 16px; margin-top: 0; margin-bottom: 16px; color: #002D7A; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px;">Dados do Contato</h2>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555555;">Nome:</td>
                <td style="padding: 8px 0; color: #111111;">${name || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">E-mail:</td>
                <td style="padding: 8px 0; color: #111111;"><a href="mailto:${email}" style="color: #1952BE; text-decoration: none; font-weight: 600;">${email || '-'}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">Telefone / WhatsApp:</td>
                <td style="padding: 8px 0; color: #111111;"><a href="https://wa.me/${(phone || '').replace(/\D/g, '')}" style="color: #1952BE; text-decoration: none;">${phone || '-'}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">Empresa:</td>
                <td style="padding: 8px 0; color: #111111; font-weight: 600;">${company || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">Cargo:</td>
                <td style="padding: 8px 0; color: #111111;">${role || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">CRM Atual:</td>
                <td style="padding: 8px 0; color: #111111;">${crm || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">Desafio / Necessidade:</td>
                <td style="padding: 8px 0; color: #002D7A; font-weight: 600;">${needs || '-'}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f7f7f5; padding: 16px 24px; font-size: 12px; color: #777777; border-top: 1px solid #e5e5e5;">
            <p style="margin: 0;">Enviado automaticamente pelo portal <strong>THS Growth</strong> para <strong>joao@thsgrowth.com</strong> em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}.</p>
          </div>
        </div>
      `
    };

    try {
      if (process.env.SMTP_HOST && process.env.SMTP_HOST !== "smtp.example.com") {
        const transporter = getTransporter();
        await transporter.sendMail(mailOptions);
        console.log("Email enviado com sucesso para joao@thsgrowth.com");
      } else {
        console.log("Aviso: SMTP não configurado com credenciais reais. O e-mail seria enviado para: joao@thsgrowth.com");
        console.log("Conteúdo do e-mail:", mailOptions.text);
      }
      res.json({ status: "success", message: "Formulário enviado com sucesso" });
    } catch (error) {
      console.error("Erro ao enviar e-mail via SMTP:", error);
      res.json({ status: "success", message: "Formulário registrado (notificação pendente)" });
    }
  });

  // Endpoint 2: Formulário do Diagnóstico / Teste de CRM
  app.post("/api/capture-lead", async (req, res) => {
    const { name, company, email, whatsapp, password } = req.body;

    console.log("Lead Capturado no Teste de CRM:", { name, company, email, whatsapp });

    const mailOptions = {
      from: '"THS Growth System" <system@thsgrowth.com>',
      to: "joao@thsgrowth.com",
      replyTo: email || undefined,
      subject: `[THS Growth] Novo Lead - Teste de CRM: ${name} - ${company || 'Empresa'}`,
      text: `
Novo lead capturado no Teste de CRM da THS Growth:

Nome: ${name || 'Não informado'}
Empresa: ${company || 'Não informada'}
Email: ${email || 'Não informado'}
Whatsapp: ${whatsapp || 'Não informado'}

Data/Hora: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
Origem: Teste de CRM (Diagnóstico de Maturidade Comercial)
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden; color: #111111;">
          <div style="background-color: #002D7A; padding: 24px; text-align: left;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px;">THS GROWTH</h1>
            <p style="color: #93C5FD; margin: 4px 0 0 0; font-size: 13px;">Novo Lead - Teste de CRM</p>
          </div>
          
          <div style="padding: 24px; background-color: #ffffff;">
            <h2 style="font-size: 16px; margin-top: 0; margin-bottom: 16px; color: #002D7A; border-bottom: 1px solid #f0f0f0; padding-bottom: 8px;">Dados do Lead</h2>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555555;">Nome:</td>
                <td style="padding: 8px 0; color: #111111;">${name || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">Empresa:</td>
                <td style="padding: 8px 0; color: #111111; font-weight: 600;">${company || '-'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">E-mail:</td>
                <td style="padding: 8px 0; color: #111111;"><a href="mailto:${email}" style="color: #1952BE; text-decoration: none; font-weight: 600;">${email || '-'}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">Telefone / WhatsApp:</td>
                <td style="padding: 8px 0; color: #111111;"><a href="https://wa.me/${(whatsapp || '').replace(/\D/g, '')}" style="color: #1952BE; text-decoration: none;">${whatsapp || '-'}</a></td>
              </tr>
            </table>
          </div>

          <div style="background-color: #f7f7f5; padding: 16px 24px; font-size: 12px; color: #777777; border-top: 1px solid #e5e5e5;">
            <p style="margin: 0;">Enviado automaticamente pelo portal <strong>THS Growth</strong> para <strong>joao@thsgrowth.com</strong> em ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}.</p>
          </div>
        </div>
      `
    };

    try {
      if (process.env.SMTP_HOST && process.env.SMTP_HOST !== "smtp.example.com") {
        const transporter = getTransporter();
        await transporter.sendMail(mailOptions);
        console.log("Email de lead enviado com sucesso para joao@thsgrowth.com");
      } else {
        console.log("Aviso: SMTP não configurado com credenciais reais. O e-mail seria enviado para: joao@thsgrowth.com");
        console.log("Conteúdo do e-mail:", mailOptions.text);
      }
      res.json({ status: "success", message: "Lead captured" });
    } catch (error) {
      console.error("Erro ao enviar e-mail via SMTP:", error);
      res.json({ status: "success", message: "Lead captured (email pending)" });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
