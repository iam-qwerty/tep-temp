"use server"

import { Resend } from 'resend'

export async function sendMail(formData: FormData){
    const name = formData.get('name')?.toString()
    const email = formData.get('email')?.toString()
    const message = formData.get('message')?.toString()

    const resend = new Resend(process.env.RESEND_API_KEY!)

    await resend.emails.send({
        from: `theemergenceporch@gmail.com`,
        to: `eabiodun45@gmail.com`,
        subject: `New message from ${name}`,
        html: `<p>You have a new message from ${name} (${email}):</p><p>${message}</p>`,
    })
}