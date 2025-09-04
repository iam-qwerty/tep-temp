import Link from "next/link"
import { FileText, Download, ExternalLink, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Resource {
  year?: string
  type?: string
  title: string
  author: string
  description: string
  downloadLabel?: string
  fileType?: string
}

const researchReports: Resource[] = [
  {
    year: "2024",
    title: "Youth Employment Crisis in Nigeria: A Comprehensive Analysis",
    author: "TEPPF Research Team",
    description: "An in-depth analysis of youth unemployment trends, causes, and potential policy solutions across Nigeria's six geopolitical zones.",
  },
  {
    year: "2024",
    title: "Mental Health Among Nigerian University Students",
    author: "Dr. Adaora Okafor & TEPPF Fellows",
    description: "A study examining mental health challenges, support systems, and intervention strategies for university students across Nigeria.",
  },
  {
    year: "2024",
    title: "Digital Skills Gap: Preparing Youth for the Future Economy",
    author: "TEPYCC Research Unit",
    description: "Assessment of digital literacy levels among Nigerian youth and recommendations for bridging the skills gap.",
  },
  {
    year: "2023",
    title: "Entrepreneurship Ecosystem for Young Nigerians",
    author: "TEPA Alumni Network",
    description: "Mapping the entrepreneurship landscape and identifying barriers and opportunities for young entrepreneurs.",
  },
  {
    year: "2023",
    title: "Civic Engagement Among Nigerian Youth: Trends and Opportunities",
    author: "TEPPF Policy Research",
    description: "Analysis of youth participation in democratic processes and recommendations for increased civic engagement.",
  },
  {
    year: "2023",
    title: "Gender Equality in Youth Leadership Programs",
    author: "TEP Research Collective",
    description: "Examining gender representation and creating inclusive frameworks for youth leadership development.",
  }
]

const publications: Resource[] = [
  {
    type: "Article",
    title: "Building Purpose-Driven Leaders in Nigeria",
    author: "Published in Leadership Quarterly Africa",
    description: "A comprehensive guide to developing values-based leadership among young Nigerians in the 21st century.",
    downloadLabel: "Read Online"
  },
  {
    type: "Whitepaper",
    title: "The Future of Work: Preparing Nigerian Youth",
    author: "TEP Policy Brief Series",
    description: "Strategic recommendations for aligning youth skills development with emerging job market demands.",
  },
  {
    type: "Guide",
    title: "Mentorship Best Practices for Youth Development",
    author: "TEPYCC Mentorship Manual",
    description: "A practical guide for mentors working with young people in personal and professional development.",
  },
  {
    type: "Case Study",
    title: "Community-Led Development: Lessons from TEPNH",
    author: "Social Impact Review",
    description: "How community-centered approaches to youth development create lasting social change.",
    downloadLabel: "Read Online"
  },
  {
    type: "Toolkit",
    title: "Policy Advocacy Toolkit for Young Leaders",
    author: "TEPPF Resource Collection",
    description: "Essential tools and templates for young people engaging in policy advocacy and social change.",
    fileType: "ZIP"
  },
  {
    type: "Report",
    title: "Annual Impact Report 2024",
    author: "The Emergence Porch",
    description: "Comprehensive overview of our programs, impact metrics, and stories from our community.",
  }
]

const ResourceCard = ({ resource }: { resource: Resource }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardHeader>
      <div className="flex items-center justify-between">
        <Badge variant={resource.year === "2024" ? "secondary" : "outline"}>
          {resource.year || resource.type}
        </Badge>
        <FileText className="h-5 w-5 text-muted-foreground" />
      </div>
      <CardTitle className="text-lg">{resource.title}</CardTitle>
      <CardDescription>{resource.author}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-sm text-muted-foreground">{resource.description}</p>
      <div className="flex space-x-2">
        <Button size="sm" className="flex-1">
          {resource.downloadLabel ? (
            <>
              <ExternalLink className="mr-2 h-4 w-4" />
              {resource.downloadLabel}
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download {resource.fileType || "PDF"}
            </>
          )}
        </Button>
        <Button size="sm" variant="outline">
          {resource.downloadLabel ? <Download className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
        </Button>
      </div>
    </CardContent>
  </Card>
)

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
      <section className="py-20 md:px-6">
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
                  {researchReports.map((report, index) => (
                    <ResourceCard key={index} resource={report} />
                  ))}
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
                  {publications.map((publication, index) => (
                    <ResourceCard key={index} resource={publication} />
                  ))}
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
                <Link target="_blank" href="https://bit.ly/TEPMembershipForm">
                  Join Our Community <ExternalLink className="ml-2 h-4 w-4" />
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
