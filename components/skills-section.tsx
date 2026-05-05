'use client'

import Reveal from '@/utils/Reveal'

const categories = [
  {
    id: '01',
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML5', 'CSS3'],
  },
  {
    id: '02',
    title: 'Backend',
    skills: ['Node.js', 'Python', 'PHP', 'Java', 'MongoDB', 'MySQL', 'REST APIs', 'Supabase'],
  },
  {
    id: '03',
    title: 'Mobile',
    skills: ['React Native', 'Expo', 'Cross-platform', 'Mobile UI/UX'],
  },
  {
    id: '04',
    title: 'Tools',
    skills: ['Git', 'Firebase', 'Vercel', 'SEO', 'SQL', 'C/C++', 'Linux'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="pb-28 pt-28">
      <div className="mb-12 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#c8f060]">
          02 / Skills
        </span>
        <span className="flex-1 h-px bg-[#1a1a1a]" />
      </div>

      <Reveal>
        <h2 className="mb-16 font-serif text-[clamp(28px,4.5vw,44px)] font-normal tracking-[-0.025em] text-[#f0ede8]">
          What I build with.
        </h2>
      </Reveal>

      <div className="space-y-0 divide-y divide-[#141414]">
        {categories.map((cat) => (
          <Reveal key={cat.id}>
            <div className="group flex flex-col gap-4 py-6 transition-colors duration-300 hover:bg-[#0d0d0d] sm:flex-row sm:items-start sm:gap-12 sm:px-4 rounded-lg">
              <div className="flex w-36 shrink-0 items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.1em] text-[#2a2a2a]">
                  {cat.id}
                </span>
                <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#3a3734] transition-colors duration-300 group-hover:text-[#7a756e]">
                  {cat.title}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-[#1e1e1e] bg-[#111] px-3 py-1.5 font-mono text-[12px] text-[#5a5754] transition-all duration-200 hover:border-[#2e2e2e] hover:text-[#f0ede8]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}