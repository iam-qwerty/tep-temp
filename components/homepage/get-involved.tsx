import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Gift, Users, Megaphone, Clock, Share2 } from "lucide-react"
// import Image from "next/image"

const ways = [
  {
    icon: DollarSign,
    title: "Give Financially",
    description: "Sponsor programs that equip youth with the skills, clarity, and confidence to thrive.",
    action: "Donate Now",
    color: "text-primary",
  },
  {
    icon: Gift,
    title: "Donate In-Kind",
    description: "Contribute tools, tech, or materials that power our work and expand access.",
    action: "Learn More",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Be a Mentor",
    description: "Share your knowledge, experiences, and guidance with young changemakers.",
    action: "Become a Mentor",
    color: "text-primary",
  },
  {
    icon: Megaphone,
    title: "Raise Your Voice",
    description: "Advocate for our mission and help us reach the young people who need us most.",
    action: "Advocate",
    color: "text-secondary",
  },
  {
    icon: Clock,
    title: "Volunteer Your Time",
    description: "Lend your passion and skills to support our activities, trainings, or community projects.",
    action: "Volunteer",
    color: "text-primary",
  },
  {
    icon: Share2,
    title: "Recommend Us",
    description:
      "Connect us to funding, partnerships, or platforms that can elevate our impact and sustain our growth.",
    action: "Connect Us",
    color: "text-secondary",
  },
]

export function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 md:py-32 px-4 md:px-6">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get Involved
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">How You Can Help</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to support our mission of empowering young Nigerians. Every contribution, big or small,
            creates ripples of positive change.
          </p>
        </div>

        {/* Ways to Help */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {ways.map((way, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <way.icon className={`h-12 w-12 ${way.color}`} />
                <h3 className="text-xl font-semibold">{way.title}</h3>
                <p className="text-muted-foreground">{way.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay Connected</h3>
            <p className="text-muted-foreground">
              Follow us to stay connected, hear real stories, and get updates on how we&apos;re creating purpose-driven
              change - one young life at a time.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-medium">Email:</span>
                <a href="mailto:theemergenceporch@gmail.com" className="text-primary hover:underline">
                  theemergenceporch@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-medium">Phone/WhatsApp:</span>
                <a href="tel:+2349125314634" className="text-primary hover:underline">
                  +234 912 531 4634
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold">Follow Us:</h4>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/company/the-emergence-porch/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.facebook.com/share/1YnzmqeRhq/" target="_blank" rel="noopener noreferrer">
                    Facebook
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.instagram.com/theemergenceporch?igsh=MWs5djhpYXMwdHdhdg=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://x.com/emergenceporch?s=08" target="_blank" rel="noopener noreferrer">
                    X (Twitter)
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Community involvement"
              width={600}
              height={500}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div> */}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If our mission speaks to you, we&apos;d love to hear from you! Drop us a message and let&apos;s explore how we can
            work together to empower young Nigerians.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:theemergenceporch@gmail.com">Get in Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
