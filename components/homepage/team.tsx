import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, BookOpen, Search, Scale, UserCheck, MessageSquare, DollarSign, Heart } from "lucide-react"

const teams = [
  {
    icon: Shield,
    title: "Advisory Board",
    description: "Strategic guidance and governance oversight for organizational direction and impact.",
  },
  {
    icon: Users,
    title: "Management Team",
    description: "Executive leadership driving organizational strategy, operations, and growth.",
  },
  {
    icon: BookOpen,
    title: "The Emergence Porch Fellows Network",
    description: "Alumni and experienced professionals providing mentorship and expertise.",
  },
  {
    icon: Users,
    title: "Programmes Team",
    description: "Designing and delivering transformative learning experiences for our community.",
  },
  {
    icon: Search,
    title: "Research & Policy Advocacy Team",
    description: "Conducting evidence-based research and driving policy change for youth empowerment.",
  },
  {
    icon: Scale,
    title: "Legal Team",
    description: "Ensuring compliance, governance, and legal protection for our operations.",
  },
  {
    icon: UserCheck,
    title: "HR & Administration Team",
    description: "Managing human resources, operations, and organizational development.",
  },
  {
    icon: MessageSquare,
    title: "Communications Team",
    description: "Telling our story, engaging stakeholders, and building our brand presence.",
  },
  {
    icon: DollarSign,
    title: "Finance Team",
    description: "Managing financial resources, budgeting, and ensuring fiscal responsibility.",
  },
  {
    icon: Heart,
    title: "Wellness and Support Team",
    description: "Providing mental health support and wellness resources for our community.",
  },
]

export function Team() {
  return (
    <section id="team" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            The Hearts Behind the Porch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of passionate professionals, volunteers, and advisors work together to create
            transformative experiences for young Nigerians.
          </p>
        </div>

        {/* Team Structure */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {teams.map((team, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <team.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-semibold">{team.title}</h3>
                </div>
                <p className="text-muted-foreground">{team.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals who share our vision of empowering young Nigerians. Whether
            you&apos;re interested in volunteering, mentoring, or joining our team, there&apos;s a place for you at The Emergence
            Porch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-involved"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Get Involved
            </a>
            <a
              href="mailto:theemergenceporch@gmail.com"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
