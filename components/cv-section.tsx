"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Mail, MapPin } from "lucide-react"
import Reveal from "@/utils/Reveal"

export default function CVSection() {
  const handleDownloadCV = () => {
    // Qui inserisci il link al tuo CV
    const cvUrl = "/cv/curriculum.pdf" 
    const link = document.createElement("a")
    link.href = cvUrl
    link.download = "Gerardo_Nastri_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="pb-24">
      <Reveal>
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold">Curriculum Vitae</h2>
                </div>

                <p className="text-muted-foreground mb-4">
                  Download my full CV to learn more about my experience, education and professional skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Salerno, Italia</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Mail className="w-4 h-4" />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  onClick={handleDownloadCV}
                  size="lg"
                  className="gap-2 hover:scale-105 transition-transform duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  PDF • Aggiornato {new Date().toLocaleDateString("it-IT")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Reveal>
    </section>
  )
}
