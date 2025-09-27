import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Gerardo Nastri",
  description: "Get in touch with me for your next project. Let's build something amazing together.",
}

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="container max-w-4xl">
        <div className="text-center mb-16 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Let&#39;s talk about your project
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&#39;d love to hear about your project and discuss how we can work together
            to create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}
