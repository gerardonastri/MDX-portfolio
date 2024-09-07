import Image from 'next/image'
import authorImage from '@/public/images/authors/me.jpg'
import * as motion from "framer-motion/client"
import Reveal from '@/utils/Reveal'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <Reveal>
          <h1 className='title no-underline'>Hey, I&#39;m Gerardo.</h1>
        </Reveal>
        <Reveal>
          <p className='mt-3 font-light text-muted-foreground'>
            I&#39;m a full stack web developer based in Salerno, Italy. I&#39;m
            passionate about learning new technologies and sharing knowledge with
            others.
          </p>
        </Reveal>
      </div>
      <div className='relative w-full sm:w-[unset]'>
        <Image
          className='flex-1 rounded-lg grayscale w-full sm:w-[unset] max-h-[350px] sm:max-h-[250px] object-cover'
          src={authorImage}
          alt='Hamed Bahram'
          width={175}
          height={155}
          priority
        />
      </div>
    </section>
  )
}