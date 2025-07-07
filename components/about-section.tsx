"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Reveal from "@/utils/Reveal"
import { Target, Heart, Lightbulb, Rocket, Zap, Music, Camera, BookOpen, Plane, Headphones } from "lucide-react"

const interests = [
  { name: "Basketball", icon: <Target className="w-4 h-4" /> },
  { name: "Gym", icon: <Zap className="w-4 h-4" /> },
  { name: "Art Cinema", icon: <Camera className="w-4 h-4" /> },
  { name: "Jazz Music", icon: <Music className="w-4 h-4" /> },
  { name: "Piano", icon: <Music className="w-4 h-4" /> },
  { name: "DJ", icon: <Headphones className="w-4 h-4" /> },
  { name: "Philosophy", icon: <BookOpen className="w-4 h-4" /> },
  { name: "Traveling", icon: <Plane className="w-4 h-4" /> },
]

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Precision",
    description: "Attention to detail in every project",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion",
    description: "Genuine love for technology",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "Always seeking creative solutions",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Growth",
    description: "Continuous learning and improvement",
  },
]

export default function AboutSection() {
  return (
    <section className="pb-24">
      <div>
        <Reveal>
          <h2 className="title mb-12">About Me</h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">My Values</h3>
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value) => (
                    <div key={value.title} className="text-center p-3 rounded-lg bg-muted/50">
                      <div className="flex justify-center mb-2 text-primary">{value.icon}</div>
                      <h4 className="font-medium text-sm">{value.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{value.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>

          <Reveal>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Interests</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  When I{"'"}m not coding, I love playing basketball, working out at the gym, watching art films, and
                  playing piano. Jazz music inspires me greatly, as does DJing on weekends. I love traveling to discover
                  new cultures and reflecting on philosophical themes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <Badge key={interest.name} variant="outline" className="gap-1">
                      {interest.icon}
                      {interest.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
