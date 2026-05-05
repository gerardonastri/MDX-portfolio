'use client'

import { motion } from 'framer-motion'
import Reveal from '@/utils/Reveal'

const values = [
  { label: 'Precision', desc: 'Obsessive attention to every detail, from architecture to pixel.' },
  { label: 'Clarity', desc: 'Clean code, clear interfaces—complexity hidden from the user.' },
  { label: 'Craft', desc: 'Products built with care, not just shipped to meet a deadline.' },
  { label: 'Growth', desc: 'Constantly learning, constantly pushing what I can build.' },
]

export default function AboutSection() {
  return (
    <section id="about" className="pb-28 pt-28">
      <div className="mb-12 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#c8f060]">
          01 / About
        </span>
        <span className="flex-1 h-px bg-[#1a1a1a]" />
      </div>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
        {/* Left: text */}
        <div>
          <Reveal>
            <h2 className="font-serif text-[clamp(32px,5vw,48px)] font-normal leading-[1.1] tracking-[-0.025em] text-[#f0ede8]">
              Young, but already
              <br />
              <em className="italic text-[#7a756e]">sharp and reliable.</em>
            </h2>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-[15px] leading-[1.8] text-[#5a5754]">
              I&#39;m a full-stack developer from Salerno, currently studying Computer Science
              at the University of Salerno. I specialize in building web and mobile products
              that are both technically solid and genuinely enjoyable to use.
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-4 text-[15px] leading-[1.8] text-[#5a5754]">
              What sets me apart: I think in systems, not just features. I care about
              architecture, performance, and the small details that make a product feel
              complete — not just functional.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-wrap gap-2">
              {['Basketball', 'Jazz', 'Piano', 'DJ', 'Philosophy', 'Cinema', 'Gym', 'Travel'].map(i => (
                <span
                  key={i}
                  className="rounded-full border border-[#222] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#3a3734] transition-colors hover:border-[#333] hover:text-[#5a5754]"
                >
                  {i}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right: values */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.label}>
              <div className="group rounded-xl border border-[#1a1a1a] bg-[#0f0f0f] p-5 transition-all duration-300 hover:border-[#2a2a2a] hover:bg-[#111]">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#c8f060]">
                  0{i + 1}
                </div>
                <h3 className="mb-1.5 text-[14px] font-semibold text-[#f0ede8]">{v.label}</h3>
                <p className="text-[13px] leading-[1.65] text-[#3a3734]">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}