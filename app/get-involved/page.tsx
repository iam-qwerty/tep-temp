import Link from "next/link"
import Image from "next/image"
import { Heart, DollarSign, Users, Megaphone, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">Get Involved</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join us in empowering the next generation of Nigerian leaders. Every contribution makes a difference in a
              young person&apos;s journey to purpose and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">How You Can Help</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              There are many ways to support our mission and make a lasting impact on young lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Give Financially</CardTitle>
                <CardDescription>Support our programs directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Sponsor programs that equip youth with the skills, clarity, and confidence to thrive. Your financial
                  support directly funds workshops, mentorship programs, and community initiatives.
                </p>
                <Button className="w-full">Donate Now</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Donate In-Kind</CardTitle>
                <CardDescription>Contribute resources and materials</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Contribute tools, technology, or materials that power our work and expand access. From laptops to
                  training materials, every donation helps.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Be a Mentor</CardTitle>
                <CardDescription>Share your expertise and experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Share your knowledge, experiences, and guidance with young changemakers. Become a mentor and help
                  shape the next generation of leaders.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Apply to Mentor
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Raise Your Voice</CardTitle>
                <CardDescription>Advocate for our mission</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Advocate for our mission and help us reach the young people who need us most. Use your platform to
                  amplify our impact.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Become an Advocate
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Volunteer Your Time</CardTitle>
                <CardDescription>Lend your skills and passion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Lend your passion and skills to support our activities, trainings, or community projects. Every hour
                  makes a difference.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Volunteer
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>Recommend Us</CardTitle>
                <CardDescription>Connect us with opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Connect us to funding, partnerships, or platforms that can elevate our impact and sustain our growth.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Make a Connection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Your Impact in Action</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  When you support The Emergence Porch, you&apos;re not just making a donation—you&apos;re investing in
                  transformation. Every contribution directly impacts a young person&apos;s journey from confusion to
                  clarity, from uncertainty to purpose.
                </p>
                <p>
                  Your support helps us provide mentorship, create safe spaces for growth, and equip young leaders with
                  the tools they need to transform their communities.
                </p>
                <p className="font-semibold text-foreground">
                  Together, we&apos;re building a generation of purpose-driven leaders who will shape Nigeria&apos;s future.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Mentorship in action"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Social */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Stay Connected</h2>
            <p className="text-xl text-muted-foreground">
              Follow us to stay connected, hear real stories, and get updates on how we&apos;re creating purpose-driven
              change—one young life at a time.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Button variant="outline" asChild>
                <Link href="https://www.linkedin.com/company/the-emergence-porch/" target="_blank">
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.facebook.com/share/1YnzmqeRhq/" target="_blank">
                  Facebook
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://www.instagram.com/theemergenceporch" target="_blank">
                  Instagram
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="https://x.com/emergenceporch" target="_blank">
                  X (Twitter)
                </Link>
              </Button>
            </div>

            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong>Email:</strong>{" "}
                <Link href="mailto:theemergenceporch@gmail.com" className="text-primary hover:underline">
                  theemergenceporch@gmail.com
                </Link>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <Link href="tel:+2349125314634" className="text-primary hover:underline">
                  +234 912 531 4634
                </Link>
              </p>
            </div>

            <div className="pt-6">
              <p className="text-muted-foreground mb-4">If our mission speaks to you, we&apos;d love to hear from you!</p>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
