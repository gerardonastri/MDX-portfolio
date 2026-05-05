import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'
import Reveal from '@/utils/Reveal'

export default async function RecentProjects() {
  const projects = await getProjects(4)

  return (
    <section id="projects" className="pb-28 pt-28">
      <div className="mb-12 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#c8f060]">
          03 / Projects
        </span>
        <span className="flex-1 h-px bg-[#1a1a1a]" />
      </div>

      <div className="mb-12 flex items-end justify-between gap-4">
        <Reveal>
          <h2 className="font-serif text-[clamp(28px,4.5vw,44px)] font-normal tracking-[-0.025em] text-[#f0ede8]">
            Selected work.
          </h2>
        </Reveal>
        <Reveal>
          <Link
            href="/projects"
            className="group flex shrink-0 items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#3a3734] transition-colors duration-300 hover:text-[#c8f060]"
          >
            All projects
            <svg className="transition-transform duration-300 group-hover:translate-x-1" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </Reveal>
      </div>

      <Projects projects={projects} />
    </section>
  )
}