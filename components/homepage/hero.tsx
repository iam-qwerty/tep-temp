import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 md:py-24 px-6 md:px-6">
      <div className="md:container mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-6 max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Empowering <span className="text-primary">Purpose-Driven</span> Young Leaders
              </h1>
              <p className="text-muted-foreground text-lg md:text-lg">
                Nigeria&apos;s go-to community for raising young leaders equipped to lead meaningful lives, transform their
                communities, and shape an equitable future for all.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#programs">Explore Programs</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-secondary text-secondary-foreground" asChild>
                <Link href="#get-involved">Get Involved</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">65%</div>
                <div className="text-sm text-muted-foreground">Youth unemployment rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">40%</div>
                <div className="text-sm text-muted-foreground">Young professionals facing burnout</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15-30</div>
                <div className="text-sm text-muted-foreground">Age range we serve</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full max-w-md mx-auto ">
            <div className="aspect-square relative">
              <Image
                src="/hero-image.jpg"
                alt="Young Nigerian leaders collaborating"
                fill
                className="rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-lg font-bold">Founded</div>
                <div className="text-sm">June 1, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
