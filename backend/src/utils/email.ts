import { createTransport } from "nodemailer";
import env from "../env";

const transporter = createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    auth: {
        user: "vmoovendhan3@gmail.com",
        pass: env.SMTP_PASSWORD,
    },
});

export async function sendWelcomeEmail(toEmail: string) {
    await transporter.sendMail({
        from: "noreply@moovendhan.gmail.com",
        to: toEmail,
        subject: "Your verification code",
        html: `<p>Welcomming you</strong>`
    });
}
