import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { advisoryBoard, leadershipTeam, volunteerSpotlight } from "@/lib/data"
import {
  Linkedin,
  Instagram,
  Star,
  Award,
  Heart,
  Users,
  Sparkles,
  Crown,
  Shield,
  Lightbulb,
  ExternalLink,
} from "lucide-react"

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Meet Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold">The Hearts Behind the Porch</h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Our diverse team of advisors, leaders, and volunteers work together to create transformative
              experiences that empower young Nigerians to become the leaders of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Crown className="h-6 w-6 text-primary" />
                <Badge variant="outline">Advisory Board</Badge>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Guiding Our Vision</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our distinguished advisory board provides strategic guidance and ensures we stay true to our mission
                of empowering young Nigerian leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advisoryBoard.map((advisor) => (
                <Card key={advisor.id} className="group hover:shadow-xl transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardContent className="p-8 relative z-10">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="relative w-32 h-32 mx-auto md:mx-0">
                            <Image
                              src={advisor.image}
                              alt={`${advisor.name}`}
                              fill
                              className="object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                        <div className="flex-1 space-y-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {advisor.name}
                            </h3>
                            <p className="text-primary font-medium">{advisor.role}</p>
                            <p className="text-sm text-muted-foreground">{advisor.organization}</p>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{advisor.bio}</p>
                          <div className="flex flex-wrap gap-2">
                            {advisor.expertise.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-3 pt-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={advisor.linkedin} target="_blank">
                                <Linkedin className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`mailto:${advisor.instagram}`}>
                                <Instagram className="h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-secondary" />
                <Badge variant="outline">Leadership Team</Badge>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Driving Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our dedicated leadership team brings expertise, passion, and innovation to every aspect of TEP&apos;s work,
                ensuring we deliver exceptional value to young Nigerians.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {leadershipTeam.map((leader) => (
                <Card key={leader.id} className="group hover:shadow-xl transition-all duration-500 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={leader.image}
                          alt={`${leader.name}`}
                          fill
                          className="object-cover rounded-full border-2 border-primary/20 group-hover:border-primary transition-colors duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                          {leader.name}
                        </CardTitle>
                        <p className="text-secondary font-medium">{leader.role}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{leader.bio}</p>
                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={leader.linkedin} target="_blank">
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={leader.instagram} target="_blank">
                          <Instagram className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Spotlight Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-yellow-500" />
                <Badge variant="outline">Volunteer Spotlight</Badge>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Superstars</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These incredible volunteers are the heart and soul of TEP. Their dedication and impact inspire us all
                to do more and reach further.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {volunteerSpotlight.map((volunteer, index) => (
                <Card key={volunteer.id} className={`group hover:shadow-2xl transition-all duration-500 overflow-hidden relative ${
                  index === 1 ? 'lg:scale-105 lg:-mt-8 lg:mb-8' : ''
                }`}>
                  {/* Spotlight Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-yellow-500 text-yellow-900 hover:bg-yellow-600">
                      <Star className="h-3 w-3 mr-1" />
                      Spotlight
                    </Badge>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardContent className="p-0 relative z-10">
                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={volunteer.image}
                        alt={`${volunteer.name}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-xl font-bold mb-1">{volunteer.name}</h3>
                        <p className="text-white/90 text-sm font-medium">{volunteer.spotlight}</p>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{volunteer.bio}</p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 py-4 border-t border-b">
                        {Object.entries(volunteer.stats).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-primary">{value.toLocaleString()}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>

                      {/* Story */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-foreground flex items-center gap-2">
                          <Heart className="h-4 w-4 text-red-500" />
                          Their Story
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{volunteer.story}</p>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-between items-center pt-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={volunteer.linkedin} target="_blank">
                            <Linkedin className="h-4 w-4 mr-2" />
                            Connect
                          </Link>
                        </Button>
                        <div className="flex gap-2">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <Users className="h-4 w-4 text-blue-500" />
                          <Lightbulb className="h-4 w-4 text-green-500" />
                        </div>
                      </div>
                      </div>
                    </CardContent>
                  </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Join Our Growing Team</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Whether you&apos;re interested in volunteering, mentoring, or joining our leadership team,
              there&apos;s a place for you at The Emergence Porch. Together, we can create lasting change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/https://docs.google.com/forms/d/e/1FAIpQLSfDsRpoCHZhQ2-LnK8-N4ALmejp97aYt3p74CIZ3Ar6em7Dlg/viewform">
                  Become a member <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="mailto:theemergenceporch@gmail.com">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}