"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { advisoryBoard, leadershipTeam } from "@/lib/data"
import BioModal from "./bio-modal"
import type { Advisor, Leader } from "@/types"
import {
  Linkedin,
  Instagram,
  Crown,
  Shield,
  ExternalLink,
} from "lucide-react"

export default function TeamMembers() {
  const [selectedAdvisor, setSelectedAdvisor] = useState<Advisor | null>(null) // Track Selected Member
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null) // Track Selected Leader
  const [bioOpen, setBioOpen] = useState(false) // Control modal visibility

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">The Hearts Behind the Porch</h1>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Our diverse team of advisors, leaders, and volunteers work together to create transformative
              experiences that empower young Nigerians to become the leaders of tomorrow.
            </p>
          </div>
        </div>
      </section>

      <BioModal
        isOpen={bioOpen}
        onClose={() => {
          setBioOpen(false);
          setSelectedAdvisor(null);
          setSelectedLeader(null);
        }}
        person={selectedAdvisor || selectedLeader}
        type={selectedAdvisor ? 'advisor' : 'leader'}
      />

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
                <Card key={advisor.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                  <CardContent className="p-0 relative z-10">
                    <div className="relative h-80 overflow-hidden rounded-t-lg">
                      <Image
                        src={advisor.image}
                        alt={`${advisor.name}`}
                        fill
                        className="object-cover object-[50%_20%] group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{advisor.name}</h3>
                        <Badge variant="secondary">{advisor.role}</Badge>
                        <p className="text-sm opacity-90 pl-0.5">{advisor.organization}</p>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{advisor.bio.split('.')[0] + '.'}</p>
                      <div className="flex flex-wrap gap-2">
                        {advisor.expertise.map((skill, index) => (
                          <Badge key={index} variant="default" className="text-xs">
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
                        <Button
                          onClick={() => {
                            setSelectedAdvisor(advisor);
                            setSelectedLeader(null);
                            setBioOpen(true);
                          }}
                          size="sm"
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
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
                <Card key={leader.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <CardContent className="p-0 relative z-10">
                    <div className="relative h-80 overflow-hidden rounded-t-lg">
                      <Image
                        src={leader.image}
                        alt={`${leader.name}`}
                        fill
                        className={`object-cover ${leader.class} group-hover:scale-110 transition-transform duration-500`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                        <Badge variant="secondary">{leader.role}</Badge>
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <p className="text-muted-foreground leading-relaxed">{leader.bio.split('.')[0] + '.'}</p>
                      <div className="flex gap-3 pt-4">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={leader.linkedin} target="_blank">
                            <Linkedin className="h-4 w-4" />
                          </Link>
                        </Button>
                        {leader.instagram && (
                          <Button variant="outline" size="sm" asChild>
                            <Link href={leader.instagram} target="_blank">
                              <Instagram className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        <Button
                          onClick={() => {
                            setSelectedLeader(leader);
                            setSelectedAdvisor(null);
                            setBioOpen(true);
                          }}
                          size="sm"
                        >
                          Learn More
                        </Button>
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
                <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfDsRpoCHZhQ2-LnK8-N4ALmejp97aYt3p74CIZ3Ar6em7Dlg/viewform">
                  Become a member <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary"
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