'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { useContactModal } from '@/components/contact-modal'
import { servicePages } from '@/lib/services-data'
import { cn } from '@/lib/utils'

type NavChild = { label: string; href: string }
type NavLink = { label: string; href: string; children?: NavChild[] }

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'All Services', href: '/services' },
      ...servicePages.map((page) => ({
        label: page.navLabel,
        href: `/${page.slug}`,
      })),
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const servicesTriggerRef = useRef<HTMLButtonElement>(null)
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  const { open: openContactModal } = useContactModal()
  const pathname = usePathname()

  function closeMobileMenu() {
    setOpen(false)
    setMobileServicesOpen(false)
  }

  /**
   * Clicking the nav link for the page you are already on doesn't change the
   * route, so the router has nothing to re-render and nothing scrolls - you sit
   * wherever you were. Take the user to the top instead, which is what they
   * were reaching for.
   *
   * Instant, not smooth: 'auto' would inherit the global
   * `scroll-behavior: smooth` and crawl all the way up from deep in a page.
   */
  function scrollToTopIfCurrent(href: string) {
    return (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (pathname !== href) return
      event.preventDefault()
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  function isActive(link: NavLink) {
    if (link.href === '/') return pathname === '/'
    if (pathname === link.href || pathname.startsWith(`${link.href}/`)) return true
    // Highlight "Services" while on any dedicated service page.
    return (
      link.children?.some(
        (child) => child.href !== link.href && pathname === child.href,
      ) ?? false
    )
  }

  useEffect(() => {
    if (!servicesOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setServicesOpen(false)
        // Return focus to the trigger rather than orphaning it on the page.
        servicesTriggerRef.current?.focus()
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [servicesOpen])

  // The mobile panel had no Escape handling at all - the listener above is
  // gated on servicesOpen, not the menu itself.
  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMobileMenu()
        mobileToggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Nexiora home" onClick={scrollToTopIfCurrent('/')}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onBlurCapture={(event) => {
                  if (
                    !event.currentTarget.contains(event.relatedTarget as Node)
                  ) {
                    setServicesOpen(false)
                  }
                }}
              >
                <button
                  ref={servicesTriggerRef}
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-expanded={servicesOpen}
                  aria-controls="services-menu"
                  className={cn(
                    'flex items-center gap-1 text-sm font-medium transition-colors',
                    isActive(link)
                      ? 'text-primary underline underline-offset-4'
                      : 'text-muted-foreground hover:text-primary',
                  )}
                >
                  {link.label}
                  <ChevronDown
                    className={cn(
                      'size-4 transition-transform duration-200',
                      servicesOpen && 'rotate-180',
                    )}
                  />
                </button>

                {servicesOpen && (
                  <div
                    id="services-menu"
                    className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3"
                  >
                    <div className="animate-fade-in-up overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-lg">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setServicesOpen(false)}
                          className={cn(
                            'block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors',
                            pathname === child.href
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted hover:text-primary',
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollToTopIfCurrent(link.href)}
                className={cn(
                  'text-sm font-medium transition-colors',
                  isActive(link)
                    ? 'text-primary underline underline-offset-4'
                    : 'text-muted-foreground hover:text-primary',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openContactModal}
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
          >
            Get My Free Mockup
          </button>

          <button
            type="button"
            ref={mobileToggleRef}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
            aria-label="Mobile"
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className={cn(
                      'flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors',
                      isActive(link)
                        ? 'text-primary'
                        : 'text-foreground hover:bg-muted',
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        'size-4 transition-transform duration-200',
                        mobileServicesOpen && 'rotate-180',
                      )}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="ml-3 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className={cn(
                            'block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                            pathname === child.href
                              ? 'text-primary'
                              : 'text-muted-foreground hover:bg-muted hover:text-primary',
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    scrollToTopIfCurrent(link.href)(event)
                    closeMobileMenu()
                  }}
                  className={cn(
                    'rounded-lg px-3 py-3 text-base font-medium transition-colors',
                    isActive(link)
                      ? 'text-primary underline underline-offset-4'
                      : 'text-foreground hover:bg-muted',
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}

            <button
              type="button"
              onClick={() => {
                closeMobileMenu()
                openContactModal()
              }}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-base font-semibold text-gold-foreground"
            >
              Get My Free Mockup
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
