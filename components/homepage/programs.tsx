import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, Lightbulb, FileText, GraduationCap, Network, Heart, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const offerings = [
  {
    icon: Users,
    title: "Youth Leadership & Personal Development",
    description:
      "Empowering self-awareness, values-based leadership, and critical thinking to cultivate intentional changemakers.",
    color: "text-primary",
  },
  {
    icon: Briefcase,
    title: "Career Development & Employability",
    description: "Providing practical tools, mentorship, and confidence to navigate the world of work with purpose.",
    color: "text-secondary",
  },
  {
    icon: Lightbulb,
    title: "Social and Impact Entrepreneurship",
    description: "Fostering innovation, creativity, and the skills to build sustainable, impact-driven initiatives.",
    color: "text-primary",
  },
  {
    icon: FileText,
    title: "Evidence-Based Advocacy & Policy Influence",
    description: "Equipping youth to drive systemic change through research, community engagement, and policy reform.",
    color: "text-secondary",
  },
]

const initiatives = [
  {
    title: "TEPA",
    subtitle: "The Emergence Porch Academy",
    description:
      "Self-discovery meets purpose. A comprehensive program designed to help young people unlock their potential and find their calling.",
    icon: GraduationCap,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/classroom-personal-development-nWZyrjPCGpGmTtPANNlDpMTT7XIQyF.png",
  },
  {
    title: "TEPYCC",
    subtitle: "The Emergence Porch Youth Career Compass",
    description:
      "Mentorship and training for meaningful work. Connecting young professionals with career guidance and opportunities.",
    icon: Target,
    image: "/placeholder-w3mk6.png",
  },
  {
    title: "TEPPF",
    subtitle: "The Emergence Porch Policy Fellowship",
    description:
      "Youth-led research and advocacy in action. Empowering young leaders to influence policy and drive systemic change.",
    icon: FileText,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/classroom-personal-development-nWZyrjPCGpGmTtPANNlDpMTT7XIQyF.png",
  },
  {
    title: "TEPNH",
    subtitle: "The Emergence Porch Networking Hub",
    description:
      "A safe, vibrant community for connection, rest, and inspiration. Building lasting relationships and support networks.",
    icon: Network,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/diverse-youth-networking-Y5Z6hRtK1J0Rz5Laws4GWtlgtlPX1l.png",
  },
]

const whoWeServe = [
  "Young people aged 15–30",
  "Undergraduate students",
  "Job seekers and recent graduates",
  "NYSC members and early career professionals",
  "First-generation students and graduates",
  "Young change makers and innovators",
  "Youth experiencing burnout, confusion, or a desire for clarity and purpose",
]

export function Programs() {
  return (
    <section id="programs" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Programs
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
            Transformative Spaces for Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We create transformative spaces and programmes designed to help young people discover purpose, grow with
            clarity, and lead with impact.
          </p>
        </div>

        {/* Core Offerings */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">What We Offer</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((offering, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 space-y-4">
                  <offering.icon className={`h-12 w-12 ${offering.color}`} />
                  <h4 className="text-xl font-semibold">{offering.title}</h4>
                  <p className="text-muted-foreground">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Flagship Initiatives */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Our Flagship Initiatives</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive programs designed to address the unique needs of young Nigerians at different stages of
              their journey.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={initiative.image || "/placeholder.svg"}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <initiative.icon className="h-6 w-6 text-primary" />
                    <Badge variant="outline">{initiative.title}</Badge>
                  </div>
                  <CardTitle className="text-lg">{initiative.subtitle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Who We Serve */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="w-fit">
              Who We Serve
            </Badge>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Supporting a Diverse Spectrum of Youth</h3>
            <p className="text-muted-foreground">
              We are committed to supporting young people from all backgrounds and at various stages of their personal
              and professional journey.
            </p>
            <ul className="space-y-3">
              {whoWeServe.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-4">
                We also offer transformative retreats and team-building experiences for organisations looking to nurture
                the wellbeing and leadership potential of their staff.
              </p>
              <Button asChild>
                <Link href="#get-involved">Join Our Community</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/nigerian-collaboration.png"
              alt="Diverse youth community"
              width={600}
              height={500}
              className="rounded-2xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
