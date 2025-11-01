import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Gift, Users, Megaphone, Clock, Share2 } from "lucide-react"
import Link from "next/link"

const ways = [
  {
    icon: DollarSign,
    title: "Give Financially",
    description: "Sponsor programmes that equip youth with the skills, clarity, and confidence to thrive.",
    action: "Donate Now",
    href: "/donate",
    color: "text-primary",
  },
  {
    icon: Gift,
    title: "Donate In-Kind",
    description: "Contribute tools, tech, or materials that power our work and expand access.",
    action: "Learn More",
    href: "/contact",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Be a Mentor",
    description: "Share your knowledge, experiences, and guidance with young changemakers.",
    action: "Become a Mentor",
    href: "/contact",
    color: "text-primary",
  },
  {
    icon: Megaphone,
    title: "Raise Your Voice",
    description: "Advocate for our mission and help us reach the young people who need us most.",
    action: "Advocate",
    href: "/contact",
    color: "text-secondary",
  },
  {
    icon: Clock,
    title: "Volunteer Your Time",
    description: "Lend your passion and skills to support our activities, trainings, or community projects.",
    action: "Become a Member",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfDsRpoCHZhQ2-LnK8-N4ALmejp97aYt3p74CIZ3Ar6em7Dlg/viewform",
    color: "text-primary",
  },
  {
    icon: Share2,
    title: "Recommend Us",
    description:
      "Connect us to funding, partnerships, or platforms that can elevate our impact and sustain our growth.",
    action: "Connect Us",
    href: "/contact",
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
                <Link href={way.href}>
                  <Button variant="outline" className="w-full bg-transparent">{way.action}</Button>
                </Link>
            </CardContent>
            </Card>
          ))}
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
    </section >
  )
}
