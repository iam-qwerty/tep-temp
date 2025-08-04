import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowRight, Users, Target, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function DonationPreview() {
    return (
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
            <div className="container px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Content Side */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Heart className="h-5 w-5 text-secondary" />
                                    <span className="text-sm font-medium text-secondary uppercase tracking-wide">Make an Impact</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                                    Every Donation Plants Seeds of <span className="text-primary">Purpose</span>
                                </h2>
                            </div>

                            <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                                &quot;When one young person rises whole, the ripple reaches families, communities, and systems. That is the
                                quiet power of what we do.&quot;
                            </blockquote>

                            <p className="text-muted-foreground leading-relaxed">
                                Your support doesn&apos;t just fund programs—it transforms lives. With 65% of Nigeria&apos;s unemployed being
                                aged 15-34, your donation directly addresses this crisis by empowering young people with the skills,
                                clarity, and confidence they need to thrive.
                            </p>

                            {/* Donation Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-primary/5 rounded-lg">
                                    <div className="text-xl font-bold text-primary">₦50,000</div>
                                    <p className="text-xs text-muted-foreground">Sponsors one youth through TEPA</p>
                                </div>
                                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                                    <div className="text-xl font-bold text-secondary">₦25,000</div>
                                    <p className="text-xs text-muted-foreground">Provides career mentorship</p>
                                </div>
                                <div className="text-center p-4 bg-primary/5 rounded-lg">
                                    <div className="text-xl font-bold text-primary">₦10,000</div>
                                    <p className="text-xs text-muted-foreground">Funds workshop materials</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 pt-4">
                                <Button size="lg" className="w-full sm:w-auto justify-center" asChild>
                                    <Link href="/donate" className="flex items-center gap-2">
                                        Support the Mission <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent justify-center" asChild>
                                    <Link href="/about" className="flex items-center gap-2">
                                        Learn Our Impact
                                    </Link>
                                </Button>
                            </div>

                        </div>

                        {/* Visual Side */}
                        <div className="relative mx-auto max-w-md">
                            <div className="relative">
                                <Image
                                    src="/placeholder.svg?height=400&width=500"
                                    alt="Young leaders in development program"
                                    width={500}
                                    height={400}
                                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                                />

                                {/* Floating Cards */}
                                <Card className="absolute -top-6 -left-3 w-28 sm:w-32 bg-white/95 backdrop-blur shadow-md">
                                    <CardContent className="p-3 text-center">
                                        <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1" />
                                        <div className="text-base font-bold text-foreground">500+</div>
                                        <p className="text-xs text-muted-foreground">Lives Transformed</p>
                                    </CardContent>
                                </Card>

                                <Card className="absolute -bottom-6 -right-3 w-28 sm:w-32 bg-white/95 backdrop-blur shadow-md">
                                    <CardContent className="p-3 text-center">
                                        <Target className="h-5 w-5 sm:h-6 sm:w-6 text-secondary mx-auto mb-1" />
                                        <div className="text-base font-bold text-foreground">95%</div>
                                        <p className="text-xs text-muted-foreground">Success Rate</p>
                                    </CardContent>
                                </Card>

                                <Card className="absolute top-1/2 -right-4 sm:-right-6 w-28 sm:w-36 translate-y-[-50%] bg-white/95 backdrop-blur shadow-md">
                                    <CardContent className="p-3 text-center">
                                        <Lightbulb className="h-5 w-5 sm:h-6 sm:w-6 text-primary mx-auto mb-1" />
                                        <div className="text-base font-bold text-foreground">4</div>
                                        <p className="text-xs text-muted-foreground">Impact Programs</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
