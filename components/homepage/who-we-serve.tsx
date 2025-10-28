import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { workModel } from "@/lib/data"


const whoWeServe = [
    "Young people aged 15–30",
    "Undergraduate students",
    "Job seekers and recent graduates",
    "NYSC members and early career professionals",
    "First-generation students and graduates",
    "Young change makers and innovators",
    "Youth experiencing burnout, confusion, or a desire for clarity and purpose",
]

export function WhoWeServe() {
    return (
        <section id="who-we-serve" className="py-10 md:py-5 bg-muted/30 md:px-6">
            <div className="container">
                {/* Who We Serve */}
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-32">
                    <div className="space-y-6">
                        {/* <Badge variant="secondary" className="w-fit">
              Who We Serve
            </Badge> */}
                        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Who We Serve</h3>
                        <p className="text-muted-foreground">
                            We are committed to supporting young people from all backgrounds and at various stages of their personal
                            and professional journey.
                        </p>
                        <ul className="space-y-3">
                            {whoWeServe.map((item, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <Heart className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4">
                            <p className="text-base text-muted-foreground mb-8">
                                We also offer transformative retreats and team-building experiences for organisations looking to nurture
                                the wellbeing and leadership potential of their staff.
                            </p>
                            <Button asChild>
                                <Link target="_blank" href="https://bit.ly/TEPMembershipForm">Become a member of the community</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative">
                        <Image
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nigerian-collaboration-xTwKRmYMHbrAlPsbkpfzb03rA3mtYO.png"
                            alt="Diverse youth community"
                            width={600}
                            height={500}
                            className="rounded-2xl object-cover shadow-lg"
                        />
                    </div>
                </div>

                {/* Work Model */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How We Work</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                        Our three-step model guides young people through their journey of growth and impact.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {workModel.map((step, index) => (
                        <div key={index} className="text-center space-y-4">
                            <div className="mx-auto w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                                {step.step}
                            </div>
                            <h4 className="text-2xl font-bold">{step.title}</h4>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
