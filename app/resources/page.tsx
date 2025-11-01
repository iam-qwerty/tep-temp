import Link from "next/link"
import { FileText, Download, ExternalLink, Search, TrendingUp, Users, Target, Award, Calendar, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
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

interface AnnualReport {
  year: string
  title: string
  executiveSummary: string
  keyHighlights: string[]
  impactMetrics: {
    label: string
    value: number
    target: number
    unit: string
  }[]
  programmes: {
    name: string
    participants: number
    outcomes: string[]
  }[]
  financials?: {
    revenue: number
    expenses: number
    surplus: number
  }
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
    title: "Gender Equality in Youth Leadership Programmes",
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
    description: "Comprehensive overview of our programmes, impact metrics, and stories from our community.",
  }
]

const annualReports: AnnualReport[] = [
  {
    year: "2024",
    title: "Building Tomorrow: Youth Empowerment in Action",
    executiveSummary: "TEP's most impactful year yet, reaching record numbers of young Nigerians and expanding our programmes across all six geopolitical zones.",
    keyHighlights: [
      "Launched innovative digital skills training for 5,000+ youth",
      "Established partnerships with 15 major corporations",
      "Expanded mentorship programme to reach rural communities",
      "Published groundbreaking research on youth mental health"
    ],
    impactMetrics: [
      { label: "Youth Served", value: 15000, target: 12000, unit: "" },
      { label: "Employment Rate", value: 78, target: 75, unit: "%" },
      { label: "Programme Satisfaction", value: 94, target: 90, unit: "%" },
      { label: "Community Partnerships", value: 45, target: 40, unit: "" }
    ],
    programmes: [
      {
        name: "TEPYCC Leadership Programme",
        participants: 1200,
        outcomes: ["85% completion rate", "92% positive feedback", "67% secured leadership positions"]
      },
      {
        name: "TEPA Entrepreneurship Academy",
        participants: 800,
        outcomes: ["$2.3M in startup funding secured", "45 new businesses launched", "78% survival rate after 2 years"]
      },
      {
        name: "TEPPF Policy Fellowship",
        participants: 150,
        outcomes: ["12 policy papers published", "8 bills influenced", "25% advanced to government roles"]
      }
    ],
    financials: {
      revenue: 4500000,
      expenses: 3800000,
      surplus: 700000
    }
  },
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

const AnnualReportCard = ({ report }: { report: AnnualReport }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-NG').format(num)
  }

  return (
    <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-sm font-semibold px-3 py-1">
            <Calendar className="mr-2 h-4 w-4" />
            {report.year}
          </Badge>
          <div className="flex items-center space-x-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Annual Report</span>
          </div>
        </div>
        <CardTitle className="text-xl text-foreground">{report.title}</CardTitle>
        <CardDescription className="text-base">{report.executiveSummary}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Key Highlights */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 flex items-center">
            <Award className="mr-2 h-4 w-4 text-primary" />
            Key Highlights
          </h4>
          <ul className="space-y-2">
            {report.keyHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start text-sm">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Impact Metrics */}
        <div>
          <h4 className="font-semibold text-foreground mb-4 flex items-center">
            <TrendingUp className="mr-2 h-4 w-4 text-primary" />
            Impact Metrics
          </h4>
          <div className="grid grid-cols-2 gap-4">
            {report.impactMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{metric.label}</span>
                  <span className="font-medium">
                    {formatNumber(metric.value)}{metric.unit}
                    {metric.target && (
                      <span className="text-muted-foreground">/{formatNumber(metric.target)}{metric.unit}</span>
                    )}
                  </span>
                </div>
                {metric.target && (
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min((metric.value / metric.target) * 100, 100)}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-6">
        <div className="flex space-x-3 w-full">
          <Button className="flex-1">
            <Download className="mr-2 h-4 w-4" />
            Download Full Report
          </Button>
          <Button variant="outline" className="flex-1">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Online
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

// Main Resource Page Component
export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">Resources</h1>
            <p className="text-xl leading-relaxed">
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
                  <h2 className="text-3xl lg:text-4xl font-bold">Reports</h2>
                  <p className="text-xl max-w-3xl mx-auto">
                    Evidence-based research conducted by our research/policy team on critical issues
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

      {/* Annual Reports Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 md:px-6">
        <div className="container px-4">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Annual Reports</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive yearly reviews of our impact, programmes, achievements, and financial performance
                in advancing youth development across Nigeria.
              </p>
            </div>

            {/* Timeline-style layout */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary to-muted" />

              <div className="space-y-12">
                {annualReports.map((report, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row md:items-start md:space-x-8">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                    {/* Year indicator */}
                    <div className="ml-16 mr-8 w-20 flex-shrink-0">
                      <Badge variant="outline" className="text-lg font-bold px-4 py-2">
                        {report.year}
                      </Badge>
                    </div>

                    {/* Report card */}
                    <div className="flex-1 max-w-full md:max-w-3xl">
                      <AnnualReportCard report={report} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfDsRpoCHZhQ2-LnK8-N4ALmejp97aYt3p74CIZ3Ar6em7Dlg/viewform">
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