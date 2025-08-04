import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Users, Handshake, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PartnersPage() {
  const partners = [
    {
      id: 1,
      name: "TechHub Nigeria",
      category: "Technology",
      description:
        "Leading technology incubator providing training and mentorship for young tech entrepreneurs across Nigeria.",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://techhub.ng",
      partnership: "Skills Development & Internships",
    },
    {
      id: 2,
      name: "Lagos State Ministry of Youth",
      category: "Government",
      description:
        "Government partner supporting youth development initiatives and policy implementation across Lagos State.",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://lagosstate.gov.ng",
      partnership: "Policy Advocacy & Program Support",
    },
    {
      id: 3,
      name: "First Bank Nigeria",
      category: "Financial Services",
      description:
        "Premier financial institution providing financial literacy training and entrepreneurship funding for young people.",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://firstbanknigeria.com",
      partnership: "Financial Literacy & Funding",
    },
    {
      id: 4,
      name: "University of Lagos",
      category: "Education",
      description: "Leading university partner providing research collaboration and student development programs.",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://unilag.edu.ng",
      partnership: "Research & Student Programs",
    },
    {
      id: 5,
      name: "Andela Nigeria",
      category: "Technology",
      description: "Global technology company developing software engineering talent across Africa.",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://andela.com",
      partnership: "Tech Skills & Career Placement",
    },
    {
      id: 6,
      name: "Tony Elumelu Foundation",
      category: "Non-Profit",
      description:
        "Leading entrepreneurship foundation empowering African entrepreneurs through funding and mentorship.",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://tonyelumelufoundation.org",
      partnership: "Entrepreneurship & Mentorship",
    },
    {
      id: 7,
      name: "Microsoft Nigeria",
      category: "Technology",
      description:
        "Global technology leader providing digital skills training and technology access for youth development.",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://microsoft.com/nigeria",
      partnership: "Digital Skills & Technology Access",
    },
    {
      id: 8,
      name: "British Council Nigeria",
      category: "International Development",
      description: "UK&apos;s international organization for cultural relations and educational opportunities.",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://britishcouncil.org.ng",
      partnership: "Leadership Development & Exchange",
    },
    {
      id: 9,
      name: "Ventures Platform",
      category: "Venture Capital",
      description:
        "Leading venture capital firm investing in early-stage startups and supporting entrepreneurship ecosystem.",
      logo: "/placeholder.svg?height=100&width=200",
      website: "https://venturesplatform.com",
      partnership: "Startup Funding & Mentorship",
    },
  ]

  // const categories = [
  //   "All",
  //   "Technology",
  //   "Government",
  //   "Financial Services",
  //   "Education",
  //   "Non-Profit",
  //   "International Development",
  //   "Venture Capital",
  // ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">Our Partners</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We collaborate with leading organizations across sectors to amplify our impact and create more
              opportunities for young Nigerian leaders. Together, we&apos;re building a stronger future.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Impact */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Partnership Impact</h2>
              <p className="text-xl text-muted-foreground">
                Our strategic partnerships enable us to provide comprehensive support to young people across Nigeria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>500+</CardTitle>
                  <CardDescription>Young people reached through partnerships</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Our partners help us extend our reach and impact across Nigeria&apos;s six geopolitical zones.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Handshake className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>25+</CardTitle>
                  <CardDescription>Active strategic partnerships</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Diverse partnerships spanning technology, education, government, and civil society sectors.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>15+</CardTitle>
                  <CardDescription>States with partner presence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    National and international partners helping us scale our programs across Nigeria.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Meet Our Partners</h2>
              <p className="text-xl text-muted-foreground">
                Organizations that share our vision of empowering young Nigerian leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <Card key={partner.id} className="hover:shadow-lg transition-shadow group">
                  <CardHeader className="text-center">
                    <div className="relative h-20 mb-4">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        alt={`${partner.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <Badge variant="outline" className="w-fit mx-auto mb-2">
                      {partner.category}
                    </Badge>
                    <CardTitle className="text-lg">{partner.name}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {partner.partnership}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{partner.description}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                      asChild
                    >
                      <Link href={partner.website} target="_blank">
                        Visit Website <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Partnership Opportunities</h2>
              <p className="text-xl text-muted-foreground">
                We welcome partnerships that align with our mission and values. Here&apos;s how we collaborate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Program Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Co-design and deliver youth development programs</li>
                    <li>• Provide mentorship and training opportunities</li>
                    <li>• Offer internships and job placement support</li>
                    <li>• Share expertise and best practices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Resource Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Provide funding and financial support</li>
                    <li>• Donate equipment, technology, and materials</li>
                    <li>• Offer venue and facility access</li>
                    <li>• Support research and publication efforts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Advocacy Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Collaborate on policy research and advocacy</li>
                    <li>• Joint campaigns for youth development</li>
                    <li>• Share platforms and amplify messages</li>
                    <li>• Engage with government and stakeholders</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Knowledge Partnerships</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Research collaboration and data sharing</li>
                    <li>• Joint publications and thought leadership</li>
                    <li>• Conference and event partnerships</li>
                    <li>• Professional development exchanges</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Partner With Us</h2>
            <p className="text-xl opacity-90">
              Join our network of partners committed to empowering young Nigerian leaders. Together, we can create
              lasting change and build a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Explore Partnership <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
