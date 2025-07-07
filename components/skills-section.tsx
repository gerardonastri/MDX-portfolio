"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Reveal from "@/utils/Reveal"
import { Code2, Smartphone, Server, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    color: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "Python", "PHP", "Java", "MongoDB", "MySQL", "REST APIs"],
    color: "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-5 h-5" />,
    skills: ["React Native", "Expo", "Mobile UI/UX", "Cross-platform"],
    color:
      "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
  },
  {
    title: "Tools & Others",
    icon: <Zap className="w-5 h-5" />,
    skills: ["Git", "Firebase", "Supabase", "SEO", "Vercel", "Docker"],
    color:
      "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  },
]

export default function SkillsSection() {
  return (
    <section className="pb-24">
      <div>
        <Reveal>
          <h2 className="title mb-12">Technical Skills</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-muted">{category.icon}</div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className={`${category.color} hover:scale-105 transition-transform duration-200`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
