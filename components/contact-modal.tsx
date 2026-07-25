'use client'

import { createContext, useContext, useState } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { X } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'

type ContactModalContextValue = {
  open: () => void
  close: () => void
}

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null,
)

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) {
    throw new Error(
      'useContactModal must be used within a ContactModalProvider',
    )
  }
  return ctx
}

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ContactModalContext.Provider
      value={{
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Backdrop className="modal-fade fixed inset-0 z-100 bg-navy/70 backdrop-blur-sm" />

          <div className="fixed inset-0 z-100 flex items-center justify-center p-3 sm:p-4">
            <Dialog.Popup className="modal-pop max-h-[92dvh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-border bg-card p-5 shadow-2xl sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Get In Touch
                  </p>
                  <Dialog.Title className="font-heading text-xl font-bold text-foreground">
                    Tell Us About Your Project
                  </Dialog.Title>
                </div>

                <Dialog.Close
                  aria-label="Close"
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="size-5" />
                </Dialog.Close>
              </div>

              <ContactForm />
            </Dialog.Popup>
          </div>
        </Dialog.Portal>
      </Dialog.Root>
    </ContactModalContext.Provider>
  )
}
