import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Gerardo Nastri",
  description: "Available for freelance and collaborations. Let's build your next digital product.",
}

export default function ContactPage() {
  return (
    <main className="py-24 md:py-32 lg:py-40">
      {/* Utilizziamo rigorosamente la classe container per l'allineamento perfetto con l'header */}
      <div className="container">
        
        {/* Editorial Section Tag */}
        <div className="mb-16 md:mb-24 flex items-center gap-6">
          <div className="h-[1px] w-12 bg-foreground/20"></div>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
            04. Contact
          </span>
        </div>

        {/* Asymmetrical Layout: 5 colonne (Sticky) vs 7 colonne */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <ContactInfo />
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>

      </div>
    </main>
  )
}