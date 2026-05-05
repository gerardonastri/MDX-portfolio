import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/MDXContent'
import { getProjectBySlug, getProjects } from '@/lib/projects'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map(p => ({ slug: p.slug }))
}

export default async function Project({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) notFound()

  const { metadata, content } = project
  const { title, image, author, publishedAt, summary, link } = metadata
  const techStack = (metadata as { techStack?: string[] }).techStack || []

  return (
    <article className="pb-32 pt-28">
      <div className="container max-w-3xl">

        {/* Back link */}
        <Link
          href="/projects"
          className="group mb-14 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-[#504f4f] transition-colors duration-300 hover:text-[#c8f060]"
        >
          <svg
            className="transition-transform duration-300 group-hover:-translate-x-1"
            width="14" height="14" viewBox="0 0 14 14" fill="none"
          >
            <path d="M11 7H3M6 3L2 7l4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to projects
        </Link>

        {/* Hero image */}
        {image && (
          <div className="relative mb-12 h-[400px] w-full overflow-hidden rounded-2xl border border-[#1a1a1a]">
            {link ? (
              <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                <Image
                  src={image}
                  alt={title || ''}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  priority
                />
              </a>
            ) : (
              <Image
                src={image}
                alt={title || ''}
                fill
                className="object-cover object-center"
                priority
              />
            )}
            {/* Bottom gradient for title overlap effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
          </div>
        )}

        {/* Header */}
        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#c8f060]">
              Project
            </span>
            <span className="h-px flex-1 bg-[#1a1a1a]" />
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[#504f4f] transition-colors hover:text-[#c8f060]"
              >
                Live site
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 8.5L8.5 1.5M8.5 1.5H4M8.5 1.5v4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </a>
            )}
          </div>

          <h1 className="font-serif text-[clamp(36px,6vw,64px)] font-normal leading-[0.95] tracking-[-0.03em] text-[#f0ede8]">
            {title}
          </h1>

          {summary && (
            <p className="mt-5 max-w-xl text-[16px] leading-[1.75] text-[#797775]">
              {summary}
            </p>
          )}

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap gap-8 border-t border-[#141414] pt-8">
            {author && (
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#2a2a2a]">Author</span>
                <span className="text-[13px] font-medium text-[#7a756e]">{author}</span>
              </div>
            )}
            {publishedAt && (
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#2a2a2a]">Published</span>
                <span className="text-[13px] font-medium text-[#7a756e]">{formatDate(publishedAt)}</span>
              </div>
            )}
            {techStack && (techStack as string[]).length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#2a2a2a]">Stack</span>
                <div className="flex flex-wrap gap-1.5">
                  {(techStack as string[]).map((tech: string) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#1e1e1e] bg-[#111] px-2.5 py-1 font-mono text-[11px] text-[#4a4744]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* MDX body */}
        <main className="prose prose-invert prose-lg max-w-none
          prose-headings:font-serif prose-headings:font-normal prose-headings:tracking-[-0.025em] prose-headings:text-[#f0ede8]
          prose-p:text-[#797775] prose-p:leading-[1.85] prose-p:text-[15px]
          prose-a:text-[#c8f060] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[#f0ede8] prose-strong:font-semibold
          prose-code:text-[#c8f060] prose-code:bg-[#111] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[13px] prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#0d0d0d] prose-pre:border prose-pre:border-[#1a1a1a] prose-pre:rounded-xl
          prose-blockquote:border-l-[#c8f060]/40 prose-blockquote:text-[#797775] prose-blockquote:italic
          prose-hr:border-[#1a1a1a]
          prose-img:rounded-xl prose-img:border prose-img:border-[#1a1a1a]
          prose-li:text-[#797775]
        ">
          <MDXContent source={content} />
        </main>

        {/* Footer nav */}
        <div className="mt-20 flex items-center justify-between border-t border-[#141414] pt-10">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#504f4f] transition-colors hover:text-[#c8f060]"
          >
            <svg
              className="transition-transform duration-300 group-hover:-translate-x-1"
              width="12" height="12" viewBox="0 0 12 12" fill="none"
            >
              <path d="M9 6H3M5.5 2.5L2 6l3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All projects
          </Link>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#c8f060] px-5 py-2.5 font-sans text-[12px] font-bold tracking-[0.02em] text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b8e050] hover:shadow-[0_8px_24px_rgba(200,240,96,0.2)]"
            >
              Visit live site
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 10L10 1M10 1H4M10 1v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </a>
          )}
        </div>

      </div>
    </article>
  )
}