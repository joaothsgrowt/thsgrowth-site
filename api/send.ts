import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { nome, email, telefone, resultado } = req.body;

    // EMAIL PARA VOCÊ
    await resend.emails.send({
      from: "THS Growth <erik@thsgrowth.com>",
      to: "joao@thsgrowth.com",
      subject: "Novo Teste de Adoção Preenchido",
      html: `
        <h2>Novo lead preencheu o teste</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Resultado:</strong> ${resultado}</p>
      `,
    });

    // EMAIL PARA O LEAD
    await resend.emails.send({
      from: "THS Growth <joao@thsgrowth.com>",
      to: email,
      subject: "Recebemos seu teste de adoção 🚀",
      html: `
        <h2>Olá ${nome},</h2>
        <p>Recebemos seu teste de adoção com sucesso.</p>
        <p>Esses foram os dados enviados:</p>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Resultado:</strong> ${resultado}</p>
        <br/>
        <p>Em breve nosso time entrará em contato.</p>
        <p>Equipe THS Growth</p>
      `,
    });

    return res.status(200).json({ message: "Emails enviados com sucesso" });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao enviar email" });
  }
}
