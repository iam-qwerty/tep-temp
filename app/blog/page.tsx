"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const blogPosts = [
    {
      id: 1,
      title: "Empowering the Next Generation: TEPA Cohort 3 Graduation Ceremony",
      excerpt:
        "Celebrating 30 young leaders who completed our flagship personal development programme and are ready to make their mark on the world.",
      author: "TEP Communications Team",
      date: "2024-12-15",
      category: "Programme Updates",
      image: "/placeholder.svg?height=300&width=400",
      featured: true,
    },
    {
      id: 2,
      title: "Breaking Barriers: How TEPYCC is Bridging the Skills Gap",
      excerpt:
        "An in-depth look at how our career development programme is helping young Nigerians transition from education to meaningful employment.",
      author: "Dr. Adaora Okafor",
      date: "2024-12-10",
      category: "Impact Stories",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Policy in Action: TEPPF Fellows Present Research to National Assembly",
      excerpt:
        "Our Policy Fellows made history by presenting youth employment research directly to lawmakers, influencing national policy discussions.",
      author: "TEPPF Research Team",
      date: "2024-12-05",
      category: "Policy & Advocacy",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Community Spotlight: TEPNH Members Launch Mental Health Initiative",
      excerpt:
        "How our networking hub community came together to address mental health challenges among university students across Lagos.",
      author: "Sarah Adebayo",
      date: "2024-11-28",
      category: "Community Stories",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "The Future of Work: Preparing Nigerian Youth for Tomorrow&apos;s Economy",
      excerpt:
        "Insights from our latest research on emerging job trends and how young people can position themselves for success.",
      author: "TEPYCC Research Unit",
      date: "2024-11-20",
      category: "Research Insights",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Partnership Announcement: Collaborating with TechHub Nigeria",
      excerpt:
        "Exciting new partnership will provide tech training and internship opportunities for our programme participants.",
      author: "Partnership Team",
      date: "2024-11-15",
      category: "Partnerships",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = [
    "all",
    "Programme Updates",
    "Impact Stories",
    "Policy & Advocacy",
    "Community Stories",
    "Research Insights",
    "Partnerships",
  ]

  const filteredPosts =
    selectedCategory === "all" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  // const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">News & Blog</h1>
            <p className="text-xl leading-relaxed">
              Stay updated with the latest news, insights, and stories from The Emergence Porch community. Discover how
              we&apos;re empowering young leaders across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-muted">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Latest Highlights</h2>
              </div>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-4">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <Button asChild variant="secondary">
                        <Link href={`/news/${featuredPost.id}`}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Recent Articles</h2>
              <p className="text-xl mt-4">Insights, updates, and stories from our community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{post.category}</Badge>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                    <CardDescription className="text-sm">{post.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <Link href={`/news/${post.id}`}>
                        Read More <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="secondary" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Stay in the Loop</h2>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to receive the latest updates, stories, and insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button variant={'secondary'}>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
