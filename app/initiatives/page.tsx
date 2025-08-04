import Link from "next/link"
import { ArrowRight, Target, Users, Lightbulb, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InitiativesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">Our Initiatives</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transformative programs designed to help young people discover purpose, grow with clarity, and lead with
              impact across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Overview */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">What We Offer</h2>
            <p className="text-xl text-muted-foreground">
              At The Emergence Porch, we create transformative spaces and programmes designed to help young people
              discover purpose, grow with clarity, and lead with impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Youth Leadership & Personal Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Empowering self-awareness, values-based leadership, and critical thinking to cultivate intentional
                  changemakers.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Career Development & Employability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Providing practical tools, mentorship, and confidence to navigate the world of work with purpose.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Social and Impact Entrepreneurship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Fostering innovation, creativity, and the skills to build sustainable, impact-driven initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Evidence-Based Advocacy & Policy Influence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Equipping youth to drive systemic change through research, community engagement, and policy reform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Flagship Initiatives */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Flagship Initiatives</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four comprehensive programs that address different aspects of youth development and empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* TEPA */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">TEPA</CardTitle>
                    <CardDescription className="text-lg">The Emergence Porch Academy</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Self-discovery meets purpose. Our flagship academy program empowers young people with self-awareness,
                  values-based leadership, and critical thinking skills to become intentional changemakers.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Personal Development Focus</span>
                  <Button variant="outline" asChild>
                    <Link href="/initiatives/tepa">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* TEPYCC */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">TEPYCC</CardTitle>
                    <CardDescription className="text-lg">The Emergence Porch Youth Career Compass</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Mentorship and training for meaningful work. This program provides practical tools, mentorship, and
                  confidence to help young people navigate the world of work with purpose.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">Career Development Focus</span>
                  <Button variant="outline" asChild>
                    <Link href="/initiatives/tepycc">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* TEPPF */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">TEPPF</CardTitle>
                    <CardDescription className="text-lg">The Emergence Porch Policy Fellowship</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Youth-led research and advocacy in action. This fellowship equips young people to drive systemic
                  change through research, community engagement, and policy reform.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Policy & Advocacy Focus</span>
                  <Button variant="outline" asChild>
                    <Link href="/initiatives/teppf">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* TEPNH */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-8 w-8 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">TEPNH</CardTitle>
                    <CardDescription className="text-lg">The Emergence Porch Networking Hub</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  A safe, vibrant community for connection, rest, and inspiration. This hub creates spaces for young
                  people to connect, collaborate, and find support in their journey.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-secondary">Community & Networking Focus</span>
                  <Button variant="outline" asChild>
                    <Link href="/initiatives/tepnh">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Join Our Programs?</h2>
            <p className="text-xl text-muted-foreground">
              Whether you&apos;re looking to discover your purpose, advance your career, drive policy change, or connect with
              like-minded peers, we have a program for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/get-involved">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
