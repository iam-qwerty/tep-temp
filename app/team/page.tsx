import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  ChevronRight
} from "lucide-react"

// Advisory Board Data
const advisoryBoard = [
  {
    id: 1,
    name: "Dr. Adebayo Adedeji",
    role: "Chair, Advisory Board",
    organization: "Former Nigerian Foreign Minister",
    bio: "Dr. Adedeji brings over 40 years of experience in international diplomacy and youth development. He has served as Nigeria's Foreign Minister and holds a PhD in International Relations.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/adebayo-adedeji",
    instagram: "adebayo.adedeji@example.com",
    expertise: ["Diplomacy", "Youth Policy", "International Relations"]
  },
  {
    id: 2,
    name: "Prof. Ngozi Okonjo-Iweala",
    role: "Strategic Advisor",
    organization: "Former Nigerian Finance Minister & WTO Director-General",
    bio: "A globally recognized economist and development expert, Prof. Okonjo-Iweala has led major international organizations and brings invaluable insights in economic development and youth empowerment.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/ngozi-okonjo-iweala",
    instagram: "ngozi.okonjo@example.com",
    expertise: ["Economic Development", "Global Finance", "Policy Advocacy"]
  },
  {
    id: 3,
    name: "Mr. Tony Elumelu",
    role: "Entrepreneurship Advisor",
    organization: "Founder, Tony Elumelu Foundation & UBA Group",
    bio: "Visionary entrepreneur and philanthropist committed to empowering African entrepreneurs. Through his foundation, he has supported over 10,000 businesses across Africa.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/tony-elumelu",
    instagram: "tony.elumelu@example.com",
    expertise: ["Entrepreneurship", "Philanthropy", "Business Development"]
  },
  {
    id: 4,
    name: "Dr. Oby Ezekwesili",
    role: "Governance Advisor",
    organization: "Former Nigerian Education Minister",
    bio: "Renowned for her anti-corruption stance and education reform initiatives. Dr. Ezekwesili is a passionate advocate for transparency and good governance in Nigeria.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/oby-ezekwesili",
    instagram: "oby.ezekwesili@example.com",
    expertise: ["Governance", "Education Reform", "Anti-Corruption"]
  }
]

// Leadership Team Data
const leadershipTeam = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Executive Director",
    bio: "Sarah leads TEP with a vision to empower young Nigerians through innovative programs and partnerships. With 15+ years in youth development, she has transformed countless lives across Nigeria.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/sarah-johnson",
    instagram: "sarah.johnson@tepnigeria.org",
    achievements: ["15+ years in youth development", "Led 50+ programs", "Award-winning leader"]
  },
  {
    id: 2,
    name: "Michael Adebayo",
    role: "Chief Programs Officer",
    bio: "Michael oversees all program implementation and ensures quality delivery. His innovative approach to youth empowerment has been recognized nationally and internationally.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/michael-adebayo",
    instagram: "michael.adebayo@tepnigeria.org",
    achievements: ["Program design expert", "Youth empowerment specialist", "National award recipient"]
  },
  {
    id: 3,
    name: "Grace Okafor",
    role: "Director of Partnerships",
    bio: "Grace builds strategic partnerships that amplify TEP's impact. Her network of corporate and government connections has secured unprecedented support for our mission.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/grace-okafor",
    instagram: "grace.okafor@tepnigeria.org",
    achievements: ["Strategic partnerships expert", "Network of 100+ connections", "Fundraising champion"]
  },
  {
    id: 4,
    name: "David Nwosu",
    role: "Chief Operations Officer",
    bio: "David ensures smooth operations across all TEP initiatives. His expertise in organizational development and project management keeps our programs running efficiently.",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://linkedin.com/in/david-nwosu",
    instagram: "david.nwosu@tepnigeria.org",
    achievements: ["Operations management expert", "Project delivery specialist", "Efficiency optimization leader"]
  }
]

// Volunteer Spotlight Data
const volunteerSpotlight = [
  {
    id: 1,
    name: "Amara Chukwu",
    spotlight: "Mentorship Champion",
    bio: "Amara has mentored over 200 young Nigerians, helping them discover their purpose and build successful careers. Her dedication to youth empowerment is truly inspiring.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com/in/amara-chukwu",
    stats: { mentees: 200, hours: 500, impact: "25 successful startups" },
    story: "Amara's journey began when she was a TEP fellow herself. Now she gives back by guiding the next generation of leaders."
  },
  {
    id: 2,
    name: "Kemi Adeolu",
    spotlight: "Community Builder",
    bio: "Kemi has organized 50+ community events, bringing together young people from diverse backgrounds to learn, grow, and create positive change in their communities.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com/in/kemi-adeolu",
    stats: { events: 50, participants: 2000, communities: 15 },
    story: "From organizing workshops to facilitating dialogues, Kemi believes in the power of community to transform lives."
  },
  {
    id: 3,
    name: "Tunde Bakare",
    spotlight: "Innovation Catalyst",
    bio: "Tunde has developed innovative solutions that have reached over 10,000 young people through TEP's digital platforms and educational content.",
    image: "/placeholder.svg?height=400&width=400",
    linkedin: "https://linkedin.com/in/tunde-bakare",
    stats: { reach: 10000, projects: 20, innovations: 5 },
    story: "Tunde's tech background combined with his passion for education has created groundbreaking learning experiences."
  }
]

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Meet Our Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">The Hearts Behind the Porch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our diverse team of leaders, advisors, and volunteers work together to create transformative
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
      <section className="py-20 bg-muted/30">
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
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {leader.achievements.map((achievement, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-3 pt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={leader.linkedin} target="_blank">
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`mailto:${leader.instagram}`}>
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
                  Become a member <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
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