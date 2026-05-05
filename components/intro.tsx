'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import authorImage from '@/public/images/intro-img.png'
import Link from 'next/link'

const FADE_UP = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Intro() {
  return (
    <section className="relative pb-32 pt-24 overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(200,240,96,0.055) 0%, transparent 70%)',
        }}
      />

      {/* Availability badge */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={FADE_UP}
        className="mb-10 flex items-center gap-2"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Available for projects
        </span>
      </motion.div>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_auto]">
        <div>
          {/* Name */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="font-serif text-[clamp(52px,9vw,88px)] font-normal leading-[0.94] tracking-[-0.03em] text-[#f0ede8]"
          >
            Hey, I&#39;m
            <br />
            <em className="font-serif italic text-[#7a756e]">Gerardo.</em>
          </motion.h1>

          {/* Role */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="mt-5 font-sans text-[clamp(18px,3vw,26px)] font-semibold tracking-[-0.02em] text-[#5a5754]"
          >
            Full-Stack Developer
          </motion.p>

          {/* Statement */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="mt-6 max-w-[480px] text-[16px] font-normal leading-[1.75] text-[#7a756e]"
          >
            I build digital products that are{' '}
            <span className="text-[#f0ede8]">fast, clear and built to scale</span>
            —from full-stack web apps to mobile experiences that feel native and
            precise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#c8f060] px-6 py-3 font-sans text-[13px] font-bold tracking-[0.02em] text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b8e050] hover:shadow-[0_8px_24px_rgba(200,240,96,0.22)]"
            >
              View Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full border border-[#2a2a2a] px-6 py-3 font-sans text-[13px] font-medium text-[#7a756e] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#444] hover:text-[#f0ede8]"
            >
              Contact
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={FADE_UP}
            className="mt-10 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#2a2a2a]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#3a3734]">
              Selected projects &amp; collaborations
            </span>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="hidden md:block"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 translate-x-2 translate-y-2 rounded-2xl"
              style={{ background: 'rgba(200,240,96,0.06)', border: '0.5px solid rgba(200,240,96,0.12)' }}
            />
            <Image
              src={authorImage}
              alt="Gerardo Nastri"
              width={220}
              height={280}
              priority
              className="relative rounded-2xl object-cover grayscale transition-all duration-700 hover:grayscale-0"
              style={{ maxHeight: 280, width: 220 }}
            />
          </div>
        </motion.div>
      </div>

      {/* Stat row */}
      <motion.div
        custom={6}
        initial="hidden"
        animate="visible"
        variants={FADE_UP}
        className="mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-[#1a1a1a] pt-10"
      >
        {[
          { label: 'Based in', value: 'Salerno, IT' },
          { label: 'Experience', value: '3+ years' },
          { label: 'Year of birth', value: '2006' },
          { label: 'Degree', value: 'CS @ UNISA' },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#3a3734]">
              {label}
            </span>
            <span className="text-[14px] font-semibold text-[#f0ede8]">{value}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}