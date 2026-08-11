import Link from 'next/link'
import { ContactTrigger } from '@/components/contact-trigger'
import { Logo } from '@/components/logo'
import { servicePages } from '@/lib/services-data'
import { NAP } from '@/lib/site-config'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Process', href: '/process' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const services = servicePages.map((page) => ({
  label: page.navLabel,
  href: `/${page.slug}`,
}))

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              A UK web design and development agency building bespoke,
              high-converting websites, custom software and smart AI systems for
              growing businesses.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-primary"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
              <li>
                <a
                  href={`mailto:${NAP.email}`}
                  className="transition-colors hover:text-primary"
                >
                  {NAP.email}
                </a>
              </li>
              <li>
                <a
                  href={NAP.phoneHref}
                  className="transition-colors hover:text-primary"
                >
                  {NAP.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/web-design-london"
                  className="transition-colors hover:text-primary"
                >
                  London Based
                </Link>{' '}
                · Serving clients worldwide
              </li>
            </ul>
            <ContactTrigger className="mt-5 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5">
              Get Free Quote
            </ContactTrigger>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-navy-foreground/55">
            © {new Date().getFullYear()} Nexiora. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-navy-foreground/55">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
