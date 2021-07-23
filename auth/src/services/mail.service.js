import mailer from 'nodemailer';

class MailService {
  constructor() {
    this.transporter = mailer.createTransport({
      service: 'Yandex',
      auth: {
        type: 'login',
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Активация аккаунта на ${process.env.API_URL}`,
      text: '',
      html: `
        <div>
          <h1>Для активации пройти по ссылке.</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
    });
  }
}

export default new MailService();
