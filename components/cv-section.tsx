'use client'

import { Download } from 'lucide-react'
import Reveal from '@/utils/Reveal'

export default function CVSection() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/cv/cv_en.pdf'
    link.download = 'Gerardo_Nastri_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="pb-28 pt-28">
      <div className="mb-12 flex items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#c8f060]">
          04 / Contact
        </span>
        <span className="flex-1 h-px bg-[#1a1a1a]" />
      </div>

      <Reveal>
        <div className="rounded-2xl border border-[#1e1e1e] bg-[#0d0d0d] p-8 md:p-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-[clamp(28px,4.5vw,44px)] font-normal leading-[1.1] tracking-[-0.025em] text-[#f0ede8]">
                Let&#39;s build
                <br />
                <em className="italic text-[#5a5754]">something together.</em>
              </h2>

              <p className="mt-4 max-w-md text-[15px] leading-[1.75] text-[#3a3734]">
                Available for freelance projects, collaborations, and full-time
                opportunities. I&#39;m always open to interesting challenges.
              </p>

              <div className="mt-6 flex flex-col gap-3 text-[14px] text-[#5a5754] sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="mailto:hello@gerardonastri.it"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#c8f060]"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 4.5l6 4 6-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  gerardonastri.dev@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/gerardo-nastri-55325b21b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#c8f060]"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4 6v4M4 4.5v.01M7 10V7.5c0-.83.67-1.5 1.5-1.5S10 6.67 10 7.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/gerardonastri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-[#c8f060]"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1C3.69 1 1 3.69 1 7c0 2.65 1.72 4.9 4.1 5.69.3.06.41-.13.41-.29v-1.03c-1.67.36-2.02-.8-2.02-.8-.27-.7-.67-.88-.67-.88-.55-.37.04-.36.04-.36.61.04.93.63.93.63.54.92 1.41.65 1.75.5.05-.39.21-.65.38-.8-1.33-.15-2.73-.67-2.73-2.96 0-.65.23-1.19.62-1.6-.06-.15-.27-.76.06-1.58 0 0 .51-.16 1.66.62A5.8 5.8 0 017 4.4c.51 0 1.03.07 1.51.2 1.15-.78 1.66-.62 1.66-.62.33.82.12 1.43.06 1.58.38.41.61.95.61 1.6 0 2.3-1.4 2.81-2.74 2.96.22.19.41.55.41 1.1v1.64c0 .16.11.35.41.29C11.28 11.9 13 9.65 13 7c0-3.31-2.69-6-6-6z" fill="currentColor"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#c8f060] px-7 py-3.5 font-sans text-[13px] font-bold tracking-[0.02em] text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b8e050] hover:shadow-[0_8px_24px_rgba(200,240,96,0.22)]"
              >
                <Download size={14} />
                Download CV
              </button>
              <p className="text-center font-mono text-[10px] uppercase tracking-wider text-[#2a2a2a]">
                PDF · Updated {new Date().toLocaleDateString('it-IT')}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}