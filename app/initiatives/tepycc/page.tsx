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
      {/* <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1660795307991-f9d5254a139c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcmVlciUyMHRyYWluaW5nfGVufDB8fDB8fHww')] bg-cover px-2 md:px-6 */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 px-2 md:px-6">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">TEPYCC</h1>
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold">
                The Emergence Porch Youth Career Compass
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mentorship and training for meaningful work. This programme provides practical tools, mentorship, and
                confidence to help young people navigate the world of work with purpose and clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Join Programme <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {/* <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button> */}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1660795307991-f9d5254a139c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcmVlciUyMHRyYWluaW5nfGVufDB8fDB8fHww"
                alt="TEPYCC career mentorship"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Programme Overview</h2>
              <p className="text-xl text-muted-foreground">
                A comprehensive career development programme that bridges the gap between education and meaningful
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

      {/* Programme Components */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Programme Components</h2>
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
      <section className="py-20 md:px-6">
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
                  &quot;The programme didn&apos;t just help me find a job—it helped me find my purpose. I&apos;m now working in marketing
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

      {/* Programme Details */}
      <section className="py-20 bg-white px-6 md:px-48 lg:px-72">
          <Card variant="secondary" className="bg-primary p-6 rounded-lg grid justify-center items-center lg:mx-32">
                <h4 className="font-semibold text-2xl mb-3">Application Process:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Online application and career assessment</li>
                  <li>• Virtual interview with programme coordinator</li>
                  <li>• Career goals statement</li>
                  <li>• Commitment to active participation</li>
                </ul>
              </Card>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Navigate Your Career?</h2>
            <p className="text-lg opacity-90 text-muted-foreground">
              Join TEPYCC and get the mentorship, skills, and connections you need to build a meaningful career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="default"
                asChild
              >
                <Link href="/contact">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {/* <Button
                size="lg"
                className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
