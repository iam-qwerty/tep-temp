"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendMail } from "../actions"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">Contact Us</h1>
            <p className="text-xl leading-relaxed">
              Ready to join our mission or have questions? We&apos;d love to hear from you. Let&apos;s start a conversation about
              creating positive change together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Email Us</CardTitle>
                <CardDescription>Send us a message anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="mailto:theemergenceporch@gmail.com" className="text-primary hover:underline font-medium">
                  theemergenceporch@gmail.com
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Call or WhatsApp</CardTitle>
                <CardDescription>Speak with our team directly</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="tel:+2349125314634" className="text-primary hover:underline font-medium">
                  +234 912 531 4634
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Location</CardTitle>
                <CardDescription>Based in Nigeria</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Serving young leaders across Nigeria</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Send Us a Message</CardTitle>
                <CardDescription className="text-center">We&apos;ll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={sendMail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+234 xxx xxx xxxx"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select onValueChange={(value) => handleChange("inquiryType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="volunteer">Volunteer</SelectItem>
                          <SelectItem value="mentorship">Mentorship</SelectItem>
                          <SelectItem value="donation">Donation</SelectItem>
                          <SelectItem value="media">Media</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      placeholder="Brief subject of your message"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Stay Updated</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to receive updates on our programmes, success stories, and opportunities to get
              involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Connect With Us</h2>
            <p className="text-muted-foreground">
              Follow us on social media for daily inspiration, updates, and stories from our community.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Button variant="outline" asChild>
                <Link href="https://www.linkedin.com/company/the-emergence-porch/" target="_blank">
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.facebook.com/share/1YnzmqeRhq/" target="_blank">
                  Facebook
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.instagram.com/theemergenceporch" target="_blank">
                  Instagram
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://x.com/emergenceporch" target="_blank">
                  X (Twitter)
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
