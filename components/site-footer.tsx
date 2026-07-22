import Link from 'next/link'
import { Logo } from '@/components/logo'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Process', href: '/process' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
]

const services = [
  'Single Landing Page',
  'Website Design',
  'Marketing Services',
  'SEO & Local Search',
  'Automation & CRM',
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              A website agency building high-converting websites and smart
              AI systems for service businesses everywhere.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-navy-foreground/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s} className="text-sm text-navy-foreground/70">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/70">
              <li>echlas@nexiorastudio.com</li>
              <li>+44 7835 385 699</li>
              <li>London Based · Serving clients worldwide</li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Get Free Quote
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-navy-foreground/55">
            © {new Date().getFullYear()} Nexiora. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-navy-foreground/55">
            <Link href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
