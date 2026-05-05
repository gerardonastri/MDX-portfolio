import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'
import Reveal from '@/utils/Reveal'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className="pb-32 pt-36">
      <div className="container max-w-3xl">

        {/* Header */}
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#c8f060]">
              Work
            </span>
            <span className="h-px flex-1 bg-[#1a1a1a]" />
          </div>
        </Reveal>

        <Reveal>
          <h1 className="font-serif text-[clamp(40px,7vw,72px)] font-normal leading-[0.95] tracking-[-0.03em] text-[#f0ede8]">
            Selected
            <br />
            <em className="italic text-[#5a5754]">projects.</em>
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-[#3a3734]">
            A curated collection of web and mobile products — each one built with
            intention, precision and a focus on real-world impact.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-[#2a2a2a]">
            <span>{projects.length} projects</span>
            <span>·</span>
            <span>Web &amp; Mobile</span>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-20">
          <Projects projects={projects} />
        </div>

      </div>
    </section>
  )
}