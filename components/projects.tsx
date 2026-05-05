import Image from 'next/image'
import Link from 'next/link'
import { ProjectMetadata } from '@/lib/projects'
import Reveal from '@/utils/Reveal'

export default function Projects({ projects }: { projects: ProjectMetadata[] }) {
  return (
    <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {projects.map((project, i) => {
        const techStack = (project as any).techStack as string[] | undefined
        return (
        <li key={project.slug}>
          <Reveal width="100%">
            <Link
              href={`/projects/${project.slug}`}
              className="group relative flex h-72 flex-col overflow-hidden rounded-2xl border border-[#1a1a1a] bg-[#0f0f0f] transition-all duration-500 hover:border-[#2a2a2a] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] sm:h-64"
            >
              {/* Background image */}
              {project.image && (
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title || ''}
                    fill
                    className="object-cover object-center opacity-40 transition-all duration-700 group-hover:scale-105 group-hover:opacity-55"
                  />
                  {/* Gradient: from bottom solid to top transparent — keeps text always readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/10" />
                </div>
              )}

              {/* Top row */}
              <div className="relative z-10 flex items-start justify-between p-5">
                <span className="font-mono text-[10px] tracking-[0.1em] text-[#504f4f]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="translate-x-1 -translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="#c8f060" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>

              {/* Bottom content — z-10 ensures it sits above the absolute image/gradient */}
              <div className="relative z-10 mt-auto p-5">
                {techStack && (
                  <div className="mb-3 flex flex-wrap gap-1.5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {techStack.slice(0, 4).map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#c8f060]/20 bg-[#c8f060]/8 px-2 py-0.5 font-mono text-[10px] text-[#c8f060]/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <h2 className="mb-1 font-serif text-[20px] font-normal leading-tight tracking-[-0.02em] text-[#f0ede8]">
                  {project.title}
                </h2>
                <p className="line-clamp-2 text-[13px] leading-relaxed text-[#504f4f] transition-colors duration-300 group-hover:text-[#797775]">
                  {project.summary}
                </p>

                <div className="mt-4 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[#2a2a2a] transition-all duration-300 group-hover:gap-2.5 group-hover:text-[#c8f060]">
                  <span>View project</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5h7M5.5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          </Reveal>
        </li>
        )
      })}
    </ul>
  )
}