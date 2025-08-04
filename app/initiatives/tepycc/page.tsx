import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Briefcase, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TEPYCCPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Career Development
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">TEPYCC</h1>
              <h2 className="text-2xl lg:text-3xl text-secondary font-semibold">
                The Emergence Porch Youth Career Compass
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mentorship and training for meaningful work. This program provides practical tools, mentorship, and
                confidence to help young people navigate the world of work with purpose and clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/get-involved">
                    Join Program <ArrowRight className="ml-2 h-4 w-4" />
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
                alt="TEPYCC career mentorship"
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
                A comprehensive career development program that bridges the gap between education and meaningful
                employment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Career Clarity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover your career path through assessments, exploration, and alignment with personal values and
                    goals.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    One-on-one guidance from industry professionals and experienced career coaches.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Job Placement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Direct connections to employment opportunities and internships with partner organizations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Program Components</h2>
              <p className="text-xl text-muted-foreground">
                A holistic approach to career development covering all aspects of professional growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="secondary">1</Badge>
                    <span>Career Assessment & Planning</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Personality and skills assessments</li>
                    <li>• Career interest exploration</li>
                    <li>• Industry research and analysis</li>
                    <li>• Personal career roadmap creation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="secondary">2</Badge>
                    <span>Professional Skills Development</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Resume and cover letter writing</li>
                    <li>• Interview preparation and practice</li>
                    <li>• LinkedIn profile optimization</li>
                    <li>• Professional communication skills</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="secondary">3</Badge>
                    <span>Industry Exposure</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Industry expert guest speakers</li>
                    <li>• Company visits and tours</li>
                    <li>• Networking events and mixers</li>
                    <li>• Job shadowing opportunities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="secondary">4</Badge>
                    <span>Mentorship & Support</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Personal career mentor assignment</li>
                    <li>• Monthly one-on-one sessions</li>
                    <li>• Peer support groups</li>
                    <li>• Alumni network access</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real outcomes from TEPYCC graduates who found their career path.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Success story"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle>Adaora O.</CardTitle>
                  <CardDescription>Software Developer at TechCorp</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  &quot;TEPYCC helped me transition from confusion to clarity. The mentorship and practical skills training
                  gave me the confidence to pursue tech and land my dream job.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Success story"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle>Emeka J.</CardTitle>
                  <CardDescription>Marketing Manager at StartupHub</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  &quot;The program didn&apos;t just help me find a job—it helped me find my purpose. I&apos;m now working in marketing
                  for social impact startups, exactly where I want to be.&quot;
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="text-center">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Success story"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle>Fatima A.</CardTitle>
                  <CardDescription>Founder, EduTech Solutions</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  &quot;TEPYCC gave me the entrepreneurial mindset and network I needed to start my own company. The
                  mentorship continues even after graduation.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Program Details</h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-secondary" />
                  <span>
                    <strong>Duration:</strong> 16 weeks (4 months)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-secondary" />
                  <span>
                    <strong>Cohort Size:</strong> 20-25 participants
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span>
                    <strong>Format:</strong> Hybrid with industry visits
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Program Benefits:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Personal career mentor for 6 months</li>
                  <li>• Job placement assistance</li>
                  <li>• Professional portfolio development</li>
                  <li>• Industry networking opportunities</li>
                  <li>• Certificate of completion</li>
                  <li>• Lifetime alumni support</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Ideal Candidates:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Recent graduates seeking career direction</li>
                <li>• Job seekers looking to upskill</li>
                <li>• Career changers exploring new paths</li>
                <li>• NYSC members preparing for employment</li>
                <li>• Young professionals seeking advancement</li>
              </ul>

              <div className="bg-secondary/5 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Application Process:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Online application and career assessment</li>
                  <li>• Virtual interview with program coordinator</li>
                  <li>• Career goals statement</li>
                  <li>• Commitment to active participation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Navigate Your Career?</h2>
            <p className="text-xl opacity-90">
              Join TEPYCC and get the mentorship, skills, and connections you need to build a meaningful career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                asChild
              >
                <Link href="/get-involved">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
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
