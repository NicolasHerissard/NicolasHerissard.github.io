import { Resend } from "resend";

const resend = new Resend('re_3rfW8ZFm_N8KAChSHp6xMguey77JsMEU5')

export async function sendEmail(email: string, subject: string, message: string) {
    try {
        await resend.emails.send({
            from: email,
            to: 'nicolas.herissard@gmail.com',
            subject: subject,
            text: message,
        })
    }
    catch (error) {
        console.error("Error sending email:", error);
    }
}