import Image from "next/image"
// import authorImage from "@/public/images/authors/me.jpg"
import authorImage from "@/public/images/intro-img.png"
import Reveal from "@/utils/Reveal"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Code } from "lucide-react"

export default function Intro() {
  return (
    <section className="flex flex-col-reverse items-start gap-x-10 gap-y-8 pb-24 md:flex-row md:items-center">
      <div className="mt-2 flex-1 md:mt-0">
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for projects
            </Badge>
          </div>
        </Reveal>

        <Reveal>
          <h1 className="title no-underline text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Hey, I&#39;m Gerardo.
          </h1>
        </Reveal>

        <Reveal>
          <p className="mt-4 text-xl text-muted-foreground font-medium">Full-Stack Developer</p>
        </Reveal>

        <Reveal>
          <p className="mt-4 font-light text-muted-foreground leading-relaxed">
           I am a full-stack developer specializing in web and mobile solutions. Driven by a passion for technology and a commitment to innovation, I focus on building seamless and functional digital experiences. Despite my young age, I have already developed skills that allow me to tackle complex and dynamic projects, while currently pursuing a degree in Computer Science at the University of Salerno.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Salerno, Italia</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>3+ years of experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Born in 2006</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative w-full sm:w-[unset]">
        <Reveal className="w-full">
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg transform rotate-3"></div>
            <Image
              className="relative flex-1 rounded-lg grayscale hover:grayscale-0 transition-all duration-500 w-full sm:w-[unset] max-h-[350px] max-w-[100%] sm:max-h-[280px] object-cover shadow-xl"
              src={authorImage || "/placeholder.svg"}
              alt="Gerardo Nastri"
              width={200}
              height={280}
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
