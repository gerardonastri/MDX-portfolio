
import Link from 'next/link'
import { getProjects } from '@/lib/projects'
import Projects from '@/components/projects'
import Reveal from '@/utils/Reveal'


export default async function RecentProjects() {
  const projects = await getProjects(2)

  return (
    <section
      className='pb-24'
    >
        <div>
        <Reveal>
        <h2 className='title mb-12'>Recent projects</h2>
        </Reveal>
        {/* <Reveal> */}
          <Projects projects={projects} />
        {/* </Reveal> */}

        <Reveal>
          <Link
            href='/projects'
            className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
          >
            <span>All projects</span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
