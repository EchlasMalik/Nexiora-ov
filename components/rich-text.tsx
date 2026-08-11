import { Fragment } from 'react'
import Link from 'next/link'

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g

/**
 * Renders inline `[label](/path)` links inside body copy, so prose can link
 * with descriptive anchor text. Text without the pattern is returned unchanged,
 * which keeps every existing string rendering exactly as before.
 */
export function renderRichText(text: string) {
  const nodes: React.ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  LINK_PATTERN.lastIndex = 0

  while ((match = LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index))
    }

    const [, label, href] = match
    const isInternal = href.startsWith('/')
    const className =
      'font-medium text-primary underline underline-offset-4 transition-colors hover:text-primary/80'

    nodes.push(
      isInternal ? (
        <Link key={`${href}-${match.index}`} href={href} className={className}>
          {label}
        </Link>
      ) : (
        <a
          key={`${href}-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </a>
      ),
    )

    lastIndex = match.index + match[0].length
  }

  if (lastIndex === 0) return text
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))

  return nodes.map((node, i) => <Fragment key={i}>{node}</Fragment>)
}
