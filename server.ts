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

  // API Routes
  app.post("/api/capture-lead", async (req, res) => {
    const { name, company, email, whatsapp } = req.body;

    console.log("Lead Captured:", { name, company, email, whatsapp });

    // Configure transporter (Mock or Real)
    // In a real scenario, these would come from process.env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "user",
        pass: process.env.SMTP_PASS || "pass",
      },
    });

    const mailOptions = {
      from: '"THS Growth System" <system@thsgrowth.com>',
      to: "joao@thsgrowth.com",
      subject: `Novo Lead - Teste de CRM: ${name} - ${company}`,
      text: `
        Novo lead capturado no Teste de CRM:
        
        Nome: ${name}
        Empresa: ${company}
        Email: ${email}
        Whatsapp: ${whatsapp}
        
        Data: ${new Date().toLocaleString()}
      `,
      html: `
        <h2>Novo lead capturado no Teste de CRM</h2>
        <ul>
          <li><strong>Nome:</strong> ${name}</li>
          <li><strong>Empresa:</strong> ${company}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Whatsapp:</strong> ${whatsapp}</li>
        </ul>
        <p><em>Enviado automaticamente pelo sistema THS Growth.</em></p>
      `
    };

    try {
      // Only attempt to send if env vars are present, otherwise just log
      if (process.env.SMTP_HOST) {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
      } else {
        console.log("SMTP not configured. Email would be sent to: joao@thsgrowth.com");
        console.log("Content:", mailOptions.text);
      }
      
      res.json({ status: "success", message: "Lead captured" });
    } catch (error) {
      console.error("Error sending email:", error);
      // Don't fail the request for the user if email fails, just log it
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
    // Production static file serving would go here if needed
    // But for this environment, we rely on the build process
    app.use(express.static('dist'));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
