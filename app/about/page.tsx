import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">About The Emergence Porch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Born out of a deep need to change the reality for young Nigerians navigating purpose in an uncertain
              world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For many young Nigerians, especially those in underserved communities, finding purpose can feel like
                  navigating a maze without a map.
                </p>
                <p>
                  With over 65% of Nigeria&apos;s unemployed population aged 15–34 (NBS, Q1 2024), and disadvantaged youth
                  nearly twice as likely to face prolonged joblessness (Brookings, 2023), the system is failing our
                  greatest asset.
                </p>
                <p>
                  Add to that the rising tide of burnout, affecting over 40% of young professionals (Mental Health
                  Foundation of Nigeria, 2024), and the need for safe, nurturing spaces becomes urgent.
                </p>
                <p className="font-semibold text-foreground">
                  Founded on June 1, 2025, The Emergence Porch is a transformative community where young people gain
                  clarity, support, and the resilience to thrive.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Young Nigerians in community"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower young Nigerians with leadership skills, career clarity, entrepreneurial capacity, and a
                  strong sense of social responsibility through mentorship, personal development, and evidence-based
                  advocacy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-secondary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become Nigeria&apos;s foremost go-to community for raising purpose-driven young leaders equipped to lead
                  meaningful lives, transform their communities, and shape an equitable and thriving future for all.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We help young people rediscover purpose, nurture potential, and step boldly into lives of meaning and
                  impact. We are Nigeria&apos;s go-to community for purpose and impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  1
                </Badge>
                <CardTitle>Bold Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We inspire and equip young people to lead with courage, empathy, and integrity, especially in the face
                  of uncertainty or injustice. We act with honesty, accountability, and transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  2
                </Badge>
                <CardTitle>Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We create safe, diverse, and welcoming spaces where every voice is valued, every story matters, and
                  every individual feels empowered to contribute.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  3
                </Badge>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We embrace creativity and adaptability, encouraging continuous learning and improvement. We empower
                  young people to innovate, take risks, and evolve.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  4
                </Badge>
                <CardTitle>Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in the power of connection. By working together, we co-create solutions, build resilient
                  communities, and amplify collective impact.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  5
                </Badge>
                <CardTitle>Sustainable Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are committed to long-term change, supporting young people to make meaningful contributions to
                  their communities and create solutions that endure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Who We Serve</h2>
              <p className="text-xl text-muted-foreground">
                We are committed to supporting a diverse spectrum of youth across Nigeria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Our Primary Audience</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Young people aged 15–30</li>
                  <li>• Undergraduate students</li>
                  <li>• Job seekers and recent graduates</li>
                  <li>• NYSC members and early career professionals</li>
                  <li>• First-generation students and graduates</li>
                  <li>• Young change makers and innovators</li>
                  <li>• Youth experiencing burnout or seeking clarity</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Extended Services</h3>
                <p className="text-muted-foreground">
                  We also offer transformative retreats and team-building experiences for organisations looking to
                  nurture the wellbeing and leadership potential of their staff.
                </p>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Workshop participants"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Work Matters */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Why Our Work Matters</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                At The Emergence Porch, we believe no one should have to navigate purpose alone. Our work creates space
                for young people to pause, reflect, and reconnect with who they are and what they&apos;re capable of
                becoming.
              </p>
              <p>
                We do more than build skills—we restore belief. Through community, mentorship, and intentional
                programmes, we walk with young people as they discover clarity, confidence, and direction.
              </p>
              <p className="text-xl font-semibold text-foreground">
                Because when one young person rises whole, the ripple reaches families, communities, and systems. That
                is the quiet power of what we do. And that&apos;s why it matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
