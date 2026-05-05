'use client'

import React, { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'
import * as motion from 'framer-motion/client'

interface Props {
  children: React.ReactNode
  width?: 'fit-content' | '100%'
  className?: string
  delay?: number
}

const Reveal = ({ children, width = 'fit-content', className, delay = 0 }: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div
      ref={ref}
      className={`relative ${className ?? ''}`}
      style={{ width }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal