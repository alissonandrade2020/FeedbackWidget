import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "ee07c5a78c072a",
    pass: "ac1c106cf5ec2a",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget - Alisson <alisson@feedget.com>",
      to: "Alisson de Andrade Araújo <flyper_black@hotmail.com>",
      subject,
      html: body,
    });
  }
}
