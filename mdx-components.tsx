import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mb-6 text-4xl font-bold leading-tight text-black sm:text-5xl md:text-6xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-4 mt-8 text-3xl font-bold text-black sm:text-4xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-3 mt-6 text-2xl font-semibold text-black sm:text-3xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-base leading-relaxed text-body-color sm:text-lg">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-black">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-body-color">{children}</em>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mb-6 p-6 border-l-4 border-gray-400 bg-gray-50 pl-6 pr-4 py-5 my-6 text-base leading-relaxed text-gray-900 font-medium sm:text-lg">
      {children}
    </blockquote>
  ),
  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-body-color">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-body-color">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-base leading-relaxed">{children}</li>
  ),
  a: ({ href, children }) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className="text-primary hover:underline">
          {children}
        </Link>
      )
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {children}
      </a>
    )
  },
  cite: ({ children }) => (
    <cite className="block mt-4 text-sm font-medium text-body-color not-italic border-t border-body-color border-opacity-20 pt-3">
      {children}
    </cite>
  ),
}
 
export function useMDXComponents(): MDXComponents {
  return components
}