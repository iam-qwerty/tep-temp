import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Users, Calendar, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TEPNHPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Community & Networking
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">TEPNH</h1>
              <h2 className="text-2xl lg:text-3xl text-secondary font-semibold">The Emergence Porch Networking Hub</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A safe, vibrant community for connection, rest, and inspiration. This hub creates meaningful spaces for
                young people to connect, collaborate, and find support in their personal and professional journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/get-involved">
                    Join Community <ArrowRight className="ml-2 h-4 w-4" />
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
                alt="TEPNH networking hub"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hub Overview */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Community Hub Overview</h2>
              <p className="text-xl text-muted-foreground">
                More than networking—a supportive ecosystem where young leaders find belonging, inspiration, and
                collaborative opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Safe Space</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A judgment-free environment where young people can be authentic, share struggles, and find emotional
                    support.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Meaningful Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Build lasting relationships with like-minded peers, mentors, and collaborators across various
                    fields.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Coffee className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Rest & Renewal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Take a break from the hustle with wellness activities, mindfulness sessions, and restorative
                    experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Hub Activities */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Hub Activities & Programs</h2>
              <p className="text-xl text-muted-foreground">
                Regular activities designed to foster connection, growth, and wellbeing in our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="secondary">Weekly</Badge>
                    <span>Connection Circles</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Small group discussions on life and career</li>
                    <li>• Peer support and accountability sessions</li>
                    <li>• Skill-sharing workshops</li>
                    <li>• Collaborative project planning</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="secondary">Monthly</Badge>
                    <span>Networking Mixers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Industry-specific networking events</li>
                    <li>• Alumni and mentor meet-and-greets</li>
                    <li>• Startup pitch sessions</li>
                    <li>• Creative showcases and exhibitions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="secondary">Bi-weekly</Badge>
                    <span>Wellness Sessions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mindfulness and meditation workshops</li>
                    <li>• Stress management techniques</li>
                    <li>• Physical fitness and movement</li>
                    <li>• Mental health awareness talks</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Badge variant="secondary">Quarterly</Badge>
                    <span>Community Projects</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Social impact initiatives</li>
                    <li>• Community service activities</li>
                    <li>• Fundraising for local causes</li>
                    <li>• Advocacy campaigns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Community Benefits</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What Members Gain:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Supportive peer network and friendships</li>
                  <li>• Access to mentors and industry professionals</li>
                  <li>• Collaboration opportunities on projects</li>
                  <li>• Personal and professional development</li>
                  <li>• Mental health and wellness support</li>
                  <li>• Leadership and volunteer opportunities</li>
                </ul>
              </div>

              <div className="bg-secondary/5 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Member Testimonial:</h4>
                <p className="text-muted-foreground italic">
                  &quot;TEPNH gave me a sense of belonging I never had before. The connections I&apos;ve made here have become
                  lifelong friendships, and the support has been invaluable during challenging times.&quot;
                </p>
                <p className="text-sm text-muted-foreground mt-2">- Sarah O., Community Member</p>
              </div>
            </div>

            <div className="space-y-6">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Community gathering"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Membership Types:</h3>
                <div className="space-y-3">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-foreground">General Membership</h4>
                    <p className="text-sm text-muted-foreground">
                      Access to all community activities and networking events
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-foreground">Alumni Membership</h4>
                    <p className="text-sm text-muted-foreground">
                      For graduates of TEP programs with mentorship opportunities
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium text-foreground">Professional Membership</h4>
                    <p className="text-sm text-muted-foreground">
                      For working professionals who want to give back and mentor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground">
              Join us for these exciting community activities and networking opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">This Week</Badge>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle>Tech Networking Mixer</CardTitle>
                <CardDescription>Connect with tech professionals and startups</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join us for an evening of networking with tech industry leaders, startup founders, and fellow tech
                  enthusiasts.
                </p>
                <Button size="sm" className="w-full">
                  Register
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">Next Week</Badge>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle>Wellness Wednesday</CardTitle>
                <CardDescription>Mindfulness and stress management workshop</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn practical techniques for managing stress and maintaining mental wellness in your personal and
                  professional life.
                </p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="outline">This Month</Badge>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </div>
                <CardTitle>Community Impact Project</CardTitle>
                <CardDescription>Collaborative social impact initiative</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Work together on a community project that addresses local challenges and creates positive change.
                </p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  Join Project
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Find Your Community?</h2>
            <p className="text-xl opacity-90">
              Join TEPNH and become part of a supportive network of young leaders who care about growth, connection, and
              impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                asChild
              >
                <Link href="/get-involved">
                  Join Community <ArrowRight className="ml-2 h-4 w-4" />
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
