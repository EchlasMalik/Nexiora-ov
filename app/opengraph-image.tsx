import { ImageResponse } from 'next/og'

export const alt =
  'Nexiora Studio - bespoke web design, development and custom software'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Site-wide Open Graph image. Generated rather than shipped as a static asset
 * so it always matches the brand colours in globals.css.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #10192e 0%, #1b2a4a 100%)',
          color: '#f2f5fa',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#e0b567',
            fontWeight: 700,
          }}
        >
          Nexiora Studio
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 34,
            fontSize: 74,
            lineHeight: 1.1,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          Bespoke Web Design &amp; Custom Software
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 30,
            fontSize: 32,
            color: 'rgba(242, 245, 250, 0.72)',
          }}
        >
          A UK web design and development agency building high-converting
          websites.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 'auto',
            fontSize: 26,
            color: 'rgba(242, 245, 250, 0.55)',
          }}
        >
          nexiorastudio.com
        </div>
      </div>
    ),
    size,
  )
}
