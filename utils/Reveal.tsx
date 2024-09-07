'use client'

import React, {useEffect, useRef} from 'react'
import {useInView, useAnimation} from 'framer-motion'
import * as motion from "framer-motion/client"

interface Props{
    children: JSX.Element,
    width?: 'fit-content' | "100%",
    className?: string
}

const Reveal = ({children, width = "fit-content", className}: Props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true}) //once fa l'animazione una sola volta

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }   
    })

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{width}}>
        <motion.div 
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration: 0.5, delay: 0.25}}
        >
            {children}
        </motion.div>
        <motion.div 
            variants={{
                hidden: {left: 0},
                visible: {left: "100%"}
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration: 0.5, ease: "easeIn"}}
            // className='absolute top-[4px] left-0 right-0 bottom-[4px] bg-green-500 z-20'
            style={{
                position: "absolute",
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: "#0AFA90",
                zIndex: 20
            }}
        >
            
        </motion.div>
    </div>
  )
}

export default Reveal