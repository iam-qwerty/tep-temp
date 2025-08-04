import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32 px-2 md:px-6">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Empowering <span className="text-primary">Purpose-Driven</span> Young Leaders
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl">
                Nigeria&apos;s go-to community for raising young leaders equipped to lead meaningful lives, transform their
                communities, and shape an equitable future for all.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#programs">Explore Programs</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#get-involved">Get Involved</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">65%</div>
                <div className="text-sm text-muted-foreground">Youth unemployment rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">40%</div>
                <div className="text-sm text-muted-foreground">Young professionals facing burnout</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15-30</div>
                <div className="text-sm text-muted-foreground">Age range we serve</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/nigerian-professionals-collaboration-iQl6v3XE7WhGXI5wa31Zbve4Oubt5O.png"
                alt="Young Nigerian leaders collaborating"
                width={600}
                height={600}
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Founded</div>
                <div className="text-lg">June 1, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
