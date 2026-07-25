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
      website,
      services,
      budget,
      contactMethod,
      hearAbout,
      message,
    } = await req.json()

    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Email or phone number is required' },
        { status: 400 },
      )
    }

    const servicesList: string[] = Array.isArray(services) ? services : []

    const notification = await resend.emails.send({
      from: 'Nexiora Studio <info@nexiorastudio.com>',
      to: 'echlas@nexiorastudio.com',
      replyTo: email || undefined,
      subject: `New Website Enquiry • ${name}`,

      html: `
        <h2>New Website Enquiry</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business || '-'}</p>
        <p><strong>Email:</strong> ${email || '-'}</p>
        <p><strong>Phone:</strong> ${phone || '-'}</p>
        <p><strong>Current Website:</strong> ${website || '-'}</p>
        <p><strong>Services Interested In:</strong> ${servicesList.length ? servicesList.join(', ') : '-'}</p>
        <p><strong>Budget Range:</strong> ${budget || '-'}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod || '-'}</p>
        <p><strong>How They Heard About Us:</strong> ${hearAbout || '-'}</p>

        <hr>

        <p>${(message || 'No additional details provided.').replace(/\n/g, '<br/>')}</p>
      `,
    })

    if (notification.error) {
      console.error('Resend error (enquiry notification):', notification.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 502 },
      )
    }

    if (email) {
      const confirmation = await resend.emails.send({
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

      if (confirmation.error) {
        // The enquiry itself already reached the business successfully above -
        // don't fail the whole request just because the client's confirmation
        // email didn't send. Log it so it's still visible.
        console.error('Resend error (client confirmation):', confirmation.error)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)

    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
