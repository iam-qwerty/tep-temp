import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Users, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TEPAPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Flagship Program
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">TEPA</h1>
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold">The Emergence Porch Academy</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Self-discovery meets purpose. Our flagship academy program empowers young people with self-awareness,
                values-based leadership, and critical thinking skills to become intentional changemakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/get-involved">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="TEPA leadership workshop"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Program Overview</h2>
              <p className="text-xl text-muted-foreground">
                A comprehensive personal development program designed to unlock potential and cultivate purpose-driven
                leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Self-Discovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Deep exploration of personal values, strengths, and purpose through guided reflection and assessment
                    tools.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Leadership Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Values-based leadership training focused on empathy, integrity, and ethical decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Critical Thinking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enhanced analytical skills and problem-solving capabilities for complex social challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Program Curriculum</h2>
              <p className="text-xl text-muted-foreground">
                A structured 12-week journey through personal development and leadership excellence.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">Weeks 1-3</Badge>
                    <CardTitle>Foundation: Know Yourself</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Personal values assessment and clarification</li>
                    <li>• Strengths and talents identification</li>
                    <li>• Life purpose exploration workshops</li>
                    <li>• Goal setting and vision creation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">Weeks 4-6</Badge>
                    <CardTitle>Development: Lead Yourself</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Emotional intelligence and self-regulation</li>
                    <li>• Communication and interpersonal skills</li>
                    <li>• Time management and productivity</li>
                    <li>• Resilience and stress management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">Weeks 7-9</Badge>
                    <CardTitle>Application: Lead Others</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Leadership styles and situational leadership</li>
                    <li>• Team building and collaboration</li>
                    <li>• Conflict resolution and negotiation</li>
                    <li>• Mentoring and coaching skills</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">Weeks 10-12</Badge>
                    <CardTitle>Impact: Lead Change</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Social impact and community engagement</li>
                    <li>• Project planning and implementation</li>
                    <li>• Presentation and public speaking</li>
                    <li>• Capstone project and graduation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Program Details</h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>
                    <strong>Duration:</strong> 12 weeks (3 months)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span>
                    <strong>Cohort Size:</strong> 25-30 participants
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span>
                    <strong>Format:</strong> Hybrid (Online + In-person)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What&apos;s Included:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Weekly interactive workshops and seminars</li>
                  <li>• Personal mentorship and coaching sessions</li>
                  <li>• Peer learning groups and networking</li>
                  <li>• Resource materials and assessment tools</li>
                  <li>• Certificate of completion</li>
                  <li>• Alumni network access</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Who Should Apply?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Young people aged 18-30 seeking clarity and purpose</li>
                <li>• Students and recent graduates</li>
                <li>• Early career professionals</li>
                <li>• Aspiring leaders and changemakers</li>
                <li>• Anyone experiencing career or life transitions</li>
              </ul>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Application Requirements:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Completed application form</li>
                  <li>• Personal statement (500 words)</li>
                  <li>• Two references</li>
                  <li>• Commitment to full program participation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Discover Your Purpose?</h2>
            <p className="text-xl opacity-90">
              Join the next TEPA cohort and embark on a transformative journey of self-discovery and leadership
              development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/get-involved">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
