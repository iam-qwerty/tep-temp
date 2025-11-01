import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Lightbulb, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TEPPFPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 md:px-6">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="w-fit">
                Policy & Advocacy
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">TEPPF</h1>
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold">The Emergence Porch Policy Fellowship</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Youth-led research and advocacy in action. This fellowship equips young people to drive systemic change
                through research, community engagement, and evidence-based policy reform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfDsRpoCHZhQ2-LnK8-N4ALmejp97aYt3p74CIZ3Ar6em7Dlg/viewform">
                    Apply for Fellowship <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {/* <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Learn More</Link>
                </Button> */}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1739300293390-da9b6b474ed9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJsYWNrJTIwWW91dGglMjBsZWQlMjByZXNlYXJjaCUyMHRlYW18ZW58MHx8MHx8fDA%3D"
                alt="TEPPF policy fellowship"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fellowship Overview */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Fellowship Overview</h2>
              <p className="text-xl text-muted-foreground">
                An intensive programme that transforms young people into effective policy advocates and social change
                agents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Research Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Conduct rigorous research on critical social issues affecting Nigerian youth and communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Policy Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Transform research findings into actionable policy recommendations and advocacy strategies.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Community Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Engage with communities, stakeholders, and policymakers to drive meaningful change.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Research Focus Areas</h2>
              <p className="text-xl text-muted-foreground">
                Fellows work on critical issues that impact young Nigerians and their communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Youth Employment & Economic Empowerment</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Job creation and skills development policies</li>
                    <li>• Entrepreneurship support systems</li>
                    <li>• Financial inclusion for young people</li>
                    <li>• NYSC programme optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-secondary">Education & Skills Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Quality education access and delivery</li>
                    <li>• Technical and vocational training</li>
                    <li>• Digital literacy and technology adoption</li>
                    <li>• Higher education financing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Mental Health & Wellbeing</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Youth mental health services</li>
                    <li>• Stress and burnout prevention</li>
                    <li>• Community support systems</li>
                    <li>• Mental health awareness campaigns</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fellowship Structure */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Fellowship Structure</h2>
              <p className="text-xl text-muted-foreground">
                A comprehensive 6-month programme combining research, training, and practical advocacy experience.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">Phase 1</Badge>
                    <CardTitle>Foundation & Training (Months 1-2)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Research methodology and data analysis</li>
                    <li>• Policy analysis and development frameworks</li>
                    <li>• Advocacy strategies and communication</li>
                    <li>• Stakeholder mapping and engagement</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">Phase 2</Badge>
                    <CardTitle>Research & Analysis (Months 3-4)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Primary and secondary data collection</li>
                    <li>• Community consultations and surveys</li>
                    <li>• Expert interviews and focus groups</li>
                    <li>• Data analysis and findings synthesis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">Phase 3</Badge>
                    <CardTitle>Policy Development & Advocacy (Months 5-6)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Policy brief and recommendation development</li>
                    <li>• Stakeholder presentations and consultations</li>
                    <li>• Community project implementation</li>
                    <li>• Media engagement and public campaigns</li>
                    <li>• Final research publication and dissemination</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="py-20 bg-white md:px-6">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Fellowship Expected Outcomes</h2>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What Fellows Achieve:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Publish original research on critical social issues</li>
                  <li>• Present findings to government officials and policymakers</li>
                  <li>• Develop actionable policy recommendations</li>
                  <li>• Build networks with key stakeholders</li>
                  <li>• Gain recognition as emerging policy experts</li>
                </ul>
              </div>

              {/* <div className="bg-primary/5 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-3">Recent Fellow Achievements:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Policy brief on youth employment adopted by Lagos State</li>
                  <li>• Mental health awareness campaign reached 50,000+ youth</li>
                  <li>• Education financing proposal presented to Federal Ministry</li>
                  <li>• Community development project implemented in 3 states</li>
                </ul>
              </div> */}
            </div>

            <div className="space-y-6">
              {/* <h3 className="text-xl font-semibold">Fellowship Benefits:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Monthly stipend for research activities</li>
                <li>• Access to research resources and databases</li>
                <li>• Mentorship from policy experts</li>
                <li>• Publication and dissemination support</li>
                <li>• Networking with government and civil society</li>
                <li>• Certificate and recognition</li>
              </ul> */}

              <div className="space-y-4">
                <h4 className="font-semibold text-2xl text-foreground">Application Requirements:</h4>
                <ul className="space-y-2 text-base text-muted-foreground">
                  <li>• Bachelor&apos;s degree or equivalent experience</li>
                  <li>• Research proposal (1,500 words)</li>
                  <li>• Academic transcripts and CV</li>
                  <li>• Two academic/professional references</li>
                  <li>• Demonstrated interest in policy and advocacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Drive Policy Change?</h2>
            <p className="text-lg opacity-90">
              Join TEPPF and become part of a new generation of policy advocates working to transform Nigeria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" asChild>
                <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfDsRpoCHZhQ2-LnK8-N4ALmejp97aYt3p74CIZ3Ar6em7Dlg/viewform">
                  Apply for Fellowship <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <Link href="/resources">View Previous Research Publications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
