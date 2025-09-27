import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Clock, Coffee, MessageCircle, Linkedin, Github } from "lucide-react"

const contactMethods = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    description: "gerardonastri.dev@gmail.com",
    action: "mailto:gerardonastri.dev@gmail.com",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "WhatsApp",
    description: "+39 345 994 5818",
    action: "https://wa.me/393459945818",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    title: "LinkedIn",
    description: "Connect with me",
    action: "https://www.linkedin.com/in/gerardo-nastri-55325b21b/",
  },
  {
    icon: <Github className="w-5 h-5" />,
    title: "GitHub",
    description: "Check my code",
    action: "https://github.com/gerardonastri",
  },
]


export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <Badge variant="secondary" className="text-xs">
              Available for new projects
            </Badge>
          </div>

          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>

          <div className="space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors group"
              >
                <div className="text-primary group-hover:scale-110 transition-transform">{method.icon}</div>
                <div>
                  <p className="font-medium text-sm">{method.title}</p>
                  <p className="text-xs text-muted-foreground">{method.description}</p>
                </div>
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Location</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Based in Salerno, Italy
            <br />
            Available for remote work worldwide
          </p>
        </CardContent>
      </Card>

    </div>
  )
}
