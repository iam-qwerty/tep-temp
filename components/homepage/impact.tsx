import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// const stats = [
//   {
//     icon: Users,
//     number: "1000+",
//     label: "Young Lives Impacted",
//     description: "Across our programs and initiatives",
//   },
//   {
//     icon: TrendingUp,
//     number: "85%",
//     label: "Career Clarity Rate",
//     description: "Participants gain clear career direction",
//   },
//   {
//     icon: Award,
//     number: "50+",
//     label: "Community Leaders",
//     description: "Emerged from our programs",
//   },
//   {
//     icon: Heart,
//     number: "95%",
//     label: "Satisfaction Rate",
//     description: "Program participants recommend us",
//   },
// ]

const testimonials = [
  {
    quote:
      "The Emergence Porch helped me discover my true calling. I went from feeling lost after graduation to launching my own social enterprise that&apos;s now impacting hundreds of lives in my community.",
    author: "Adaora Okafor",
    role: "TEPA Graduate & Social Entrepreneur",
    image: "/confident-nigerian-entrepreneur.png",
  },
  {
    quote:
      "Through TEPYCC, I found not just a job, but a career path that aligns with my values. The mentorship and guidance I received was transformational.",
    author: "Emeka Nwankwo",
    role: "TEPYCC Participant & Policy Analyst",
    image: "/placeholder-2ufh2.png",
  },
  {
    quote:
      "The networking hub became my second home. The connections I made here have become lifelong friendships and professional partnerships that continue to support my growth.",
    author: "Fatima Abdullahi",
    role: "TEPNH Member & Tech Innovator",
    image: "/inspired-nigerian-tech-woman.png",
  },
]

export function Impact() {
  return (
    <section id="impact" className="py-20 md:py-32 md:px-6">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <Badge variant="secondary" className="mb-4">
            Our Impact
          </Badge> */}
          {/* <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            The Quiet Power of What We Do
          </h2> */}
          {/* <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe no one should have to navigate purpose alone. Our work creates space for young people to pause,
            reflect, and reconnect with who they are and what they&apos;re capable of becoming.
          </p> */}
        </div>

        {/* Impact Stats */}
        {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <stat.icon className="h-12 w-12 text-primary mx-auto" />
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="font-semibold">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Why Our Work Matters */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Why Our Work Matters</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                We do more than build skills—we restore belief. Through community, mentorship, and intentional
                programmes, we walk with young people as they discover clarity, confidence, and direction.
              </p>
              <p>
                Because when one young person rises whole, the ripple reaches families, communities, and systems. That
                is the quiet power of what we do. And that&apos;s why it matters.
              </p>
            </div>
          </div>
          {/* <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Impact ripple effect"
              width={600}
              height={500}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div> */}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">Stories of Transformation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from the young leaders whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <Quote className="h-8 w-8 text-primary" />
                  <p className="text-muted-foreground italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="flex items-center space-x-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Be Part of the Ripple</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every young person we support creates a ripple effect that transforms communities. Join us in creating
            lasting change across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
