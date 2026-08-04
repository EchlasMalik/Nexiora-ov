'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useContactModal } from '@/components/contact-modal'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const CALENDLY_URL = 'https://calendly.com/echlas-nexioratalent/website-consultation'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { open: openContactModal } = useContactModal()
  const pathname = usePathname()
  const isHome = pathname === '/'

  function isActive(href: string) {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Nexiora home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors',
                isActive(link.href)
                  ? 'text-primary underline underline-offset-4'
                  : 'text-muted-foreground hover:text-primary',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {isHome ? (
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
            >
              Get Free Quote
            </a>
          ) : (
            <button
              type="button"
              onClick={openContactModal}
              className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
            >
              Get Free Quote
            </button>
          )}

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'rounded-lg px-3 py-3 text-base font-medium transition-colors',
                  isActive(link.href)
                    ? 'text-primary underline underline-offset-4'
                    : 'text-foreground hover:bg-muted',
                )}
              >
                {link.label}
              </a>
            ))}
            {isHome ? (
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-base font-semibold text-gold-foreground"
              >
                Get Free Quote
              </a>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  openContactModal()
                }}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-base font-semibold text-gold-foreground"
              >
                Get Free Quote
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
