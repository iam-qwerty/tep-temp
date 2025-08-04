import Link from "next/link"
import { FileText, Download, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">Resources</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access our comprehensive library of research reports, publications, and resources to support youth
              development and policy advocacy.
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search resources..." className="pl-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="container px-4">
          <Tabs defaultValue="reports" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="reports">Research Reports</TabsTrigger>
              <TabsTrigger value="publications">Publications</TabsTrigger>
            </TabsList>

            <TabsContent value="reports">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Research Reports</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Evidence-based research conducted by our Policy Fellows and research team on critical issues
                    affecting Nigerian youth.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">2024</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">
                        Youth Employment Crisis in Nigeria: A Comprehensive Analysis
                      </CardTitle>
                      <CardDescription>TEPPF Research Team</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        An in-depth analysis of youth unemployment trends, causes, and potential policy solutions across
                        Nigeria&apos;s six geopolitical zones.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">2024</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">Mental Health Among Nigerian University Students</CardTitle>
                      <CardDescription>Dr. Adaora Okafor & TEPPF Fellows</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        A study examining mental health challenges, support systems, and intervention strategies for
                        university students across Nigeria.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">2024</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">
                        Digital Skills Gap: Preparing Youth for the Future Economy
                      </CardTitle>
                      <CardDescription>TEPYCC Research Unit</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Assessment of digital literacy levels among Nigerian youth and recommendations for bridging the
                        skills gap.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">2023</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">Entrepreneurship Ecosystem for Young Nigerians</CardTitle>
                      <CardDescription>TEPA Alumni Network</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Mapping the entrepreneurship landscape and identifying barriers and opportunities for young
                        entrepreneurs.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">2023</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">
                        Civic Engagement Among Nigerian Youth: Trends and Opportunities
                      </CardTitle>
                      <CardDescription>TEPPF Policy Research</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Analysis of youth participation in democratic processes and recommendations for increased civic
                        engagement.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">2023</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">Gender Equality in Youth Leadership Programs</CardTitle>
                      <CardDescription>TEP Research Collective</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Examining gender representation and creating inclusive frameworks for youth leadership
                        development.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="publications">
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Publications</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Articles, whitepapers, and thought leadership pieces on youth development, leadership, and social
                    impact.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Article</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">Building Purpose-Driven Leaders in Nigeria</CardTitle>
                      <CardDescription>Published in Leadership Quarterly Africa</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        A comprehensive guide to developing values-based leadership among young Nigerians in the 21st
                        century.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Read Online
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Whitepaper</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">The Future of Work: Preparing Nigerian Youth</CardTitle>
                      <CardDescription>TEP Policy Brief Series</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Strategic recommendations for aligning youth skills development with emerging job market
                        demands.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">Guide</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">Mentorship Best Practices for Youth Development</CardTitle>
                      <CardDescription>TEPYCC Mentorship Manual</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        A practical guide for mentors working with young people in personal and professional
                        development.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">Case Study</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">Community-Led Development: Lessons from TEPNH</CardTitle>
                      <CardDescription>Social Impact Review</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        How community-centered approaches to youth development create lasting social change.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Read Online
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">Toolkit</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">Policy Advocacy Toolkit for Young Leaders</CardTitle>
                      <CardDescription>TEPPF Resource Collection</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Essential tools and templates for young people engaging in policy advocacy and social change.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download ZIP
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">Report</Badge>
                        <FileText className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">Annual Impact Report 2024</CardTitle>
                      <CardDescription>The Emergence Porch</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Comprehensive overview of our programs, impact metrics, and stories from our community.
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" />
                          Download PDF
                        </Button>
                        <Button size="sm" variant="outline">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Contribute to Our Research</h2>
            <p className="text-xl text-muted-foreground">
              Have research ideas or want to collaborate on policy advocacy? Join our research community and help create
              evidence-based solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/initiatives/teppf">
                  Join TEPPF <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Propose Research</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
