import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      business,
      service,
      message,
    } = await req.json()

    await resend.emails.send({
      from: 'Nexiora Studio <info@nexiorastudio.com>',
      to: 'echlas@nexioratalent.com',
      replyTo: email,
      subject: `New Website Enquiry • ${name}`,

      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Service:</strong> ${service}</p>

        <hr>

        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    await resend.emails.send({
      from: 'Nexiora Studio<info@nexiorastudio.com>',
      to: email,
      subject: 'Thanks for contacting Nexiora Studio',

      html: `
        <h2>Thanks for reaching out!</h2>

        <p>Hi ${name},</p>

        <p>
          We've received your enquiry and will respond within 24 hours.
        </p>

        <p>
          If you'd like a quicker response, you can also message us on WhatsApp:
        </p>

        <p>
          <a href="https://wa.me/447835385699">
            Chat on WhatsApp
          </a>
        </p>

        <br/>

        <p>Thanks again!</p>

        <p>
          <strong>Nexiora Studio</strong>
        </p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}