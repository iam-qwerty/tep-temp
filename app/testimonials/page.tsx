"use client"

import Link from "next/link"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Adaora Okafor",
      role: "Software Developer",
      company: "TechCorp Nigeria",
      programme: "TEPYCC",
      image: "/placeholder.svg?height=150&width=150",
      quote:
        "TEPYCC completely transformed my career trajectory. I went from being confused about my path to landing my dream job in tech. The mentorship and practical skills training gave me the confidence to pursue opportunities I never thought possible.",
      rating: 5,
      year: "2024",
    },
    {
      id: 2,
      name: "Emeka Johnson",
      role: "Policy Analyst",
      company: "Lagos State Government",
      programme: "TEPPF",
      image: "/placeholder.svg?height=150&width=150",
      quote:
        "The Policy Fellowship opened my eyes to the power of evidence-based advocacy. I&apos;m now working directly with government officials to implement youth-focused policies. TEP gave me the tools and network to make real change happen.",
      rating: 5,
      year: "2024",
    },
    {
      id: 3,
      name: "Fatima Abdullahi",
      role: "Founder & CEO",
      company: "EduTech Solutions",
      programme: "TEPA",
      image: "/placeholder.svg?height=150&width=150",
      quote:
        "TEPA helped me discover my purpose and gave me the leadership skills to start my own company. The self-awareness journey was transformative, and I now lead with clarity and confidence. My startup has impacted over 10,000 students across Nigeria.",
      rating: 5,
      year: "2023",
    },
    {
      id: 4,
      name: "David Okonkwo",
      role: "Community Organizer",
      company: "Youth Action Network",
      programme: "TEPNH",
      image: "/placeholder.svg?height=150&width=150",
      quote:
        "TEPNH gave me a community I never knew I needed. The connections I made here have become lifelong friendships and professional collaborations. It&apos;s more than networking—it&apos;s a family that supports your growth and celebrates your wins.",
      rating: 5,
      year: "2024",
    },
    {
      id: 5,
      name: "Blessing Okoro",
      role: "Marketing Manager",
      company: "Impact Ventures",
      programme: "TEPYCC",
      image: "/placeholder.svg?height=150&width=150",
      quote:
        "The career guidance and mentorship I received through TEPYCC was invaluable. My mentor helped me navigate career transitions and negotiate my current role. I&apos;m now working in marketing for social impact startups, exactly where I want to be.",
      rating: 5,
      year: "2023",
    },
    {
      id: 6,
      name: "Ibrahim Musa",
      role: "Research Fellow",
      company: "Center for Development Studies",
      programme: "TEPPF",
      image: "/placeholder.svg?height=150&width=150",
      quote:
        "TEPPF equipped me with rigorous research skills and policy analysis capabilities. My fellowship research on youth employment was cited in national policy documents. I&apos;m now a respected voice in development research, thanks to the foundation TEP provided.",
      rating: 5,
      year: "2023",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonialData = testimonials[currentTestimonial]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">Testimonials</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Hear from the young leaders whose lives have been transformed through The Emergence Porch programmes. These
              are their stories of growth, discovery, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Featured Stories</h2>
              <p className="text-xl text-muted-foreground">Real transformations from our community members</p>
            </div>

            <Card className="relative overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-4">
                      <Image
                        src={currentTestimonialData.image || "/placeholder.svg"}
                        alt={currentTestimonialData.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{currentTestimonialData.name}</h3>
                    <p className="text-muted-foreground">{currentTestimonialData.role}</p>
                    <p className="text-sm text-muted-foreground">{currentTestimonialData.company}</p>
                    <div className="flex items-center justify-center lg:justify-start space-x-2 mt-2">
                      <Badge variant="secondary">{currentTestimonialData.programme}</Badge>
                      <span className="text-xs text-muted-foreground">Class of {currentTestimonialData.year}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-4">
                    <Quote className="h-8 w-8 text-primary/20" />
                    <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed italic">
                      &quot;{currentTestimonialData.quote}&quot;
                    </blockquote>
                    <div className="flex items-center space-x-1">
                      {[...Array(currentTestimonialData.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <Button variant="outline" size="sm" onClick={prevTestimonial}>
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial ? "bg-primary" : "bg-muted"
                        }`}
                        onClick={() => setCurrentTestimonial(index)}
                      />
                    ))}
                  </div>
                  <Button variant="outline" size="sm" onClick={nextTestimonial}>
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">More Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                Every story represents a life transformed and a future brightened
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    <div className="flex items-center justify-center space-x-2 mt-2">
                      <Badge variant="outline" className="text-xs">
                        {testimonial.programme}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Quote className="h-6 w-6 text-primary/20" />
                    <blockquote className="text-sm text-muted-foreground leading-relaxed italic">
                      &quot;
                      {testimonial.quote.length > 150 ? testimonial.quote.substring(0, 150) + "..." : testimonial.quote}
                      &quot;
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-secondary text-secondary" />
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">Class of {testimonial.year}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Impact in Numbers</h2>
              <p className="text-xl text-muted-foreground">The collective success of our community speaks volumes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">95%</div>
                <p className="text-muted-foreground">Programme completion rate</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary">80%</div>
                <p className="text-muted-foreground">Career advancement within 6 months</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <p className="text-muted-foreground">Lives transformed</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary">4.9/5</div>
                <p className="text-muted-foreground">Average programme rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Write Your Success Story?</h2>
            <p className="text-xl opacity-90">
              Join hundreds of young leaders who have transformed their lives through The Emergence Porch programmes. Your
              journey to purpose and impact starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                asChild
              >
                <Link href="/get-involved">Start Your Journey</Link>
              </Button>
              <Button
                size="lg"
                className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                asChild
              >
                <Link href="/initiatives">Explore Programmes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
