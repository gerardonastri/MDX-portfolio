"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeToPrivacy: false,
  })
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeToPrivacy) {
      toast({
        title: "Privacy Policy Required",
        description: "Please agree to the privacy policy to continue.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        agreeToPrivacy: false,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-background to-muted/20">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="h-12 border-muted-foreground/20 focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="h-12 border-muted-foreground/20 focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              placeholder="Tell me more about your project, timeline, and requirements..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              rows={6}
              className="border-muted-foreground/20 focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="privacy"
              checked={formData.agreeToPrivacy}
              onCheckedChange={(checked: any) => handleInputChange("agreeToPrivacy", checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
              By submitting this form, I agree to the{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                privacy policy
              </a>{" "}
              and consent to being contacted about my inquiry.
            </Label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 text-base font-medium bg-foreground hover:bg-foreground/90 text-background transition-all duration-200 hover:scale-[1.02]"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent mr-2" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
