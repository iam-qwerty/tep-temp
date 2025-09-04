"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const featuredPartners = [
  {
    id: 1,
    name: "TechHub Nigeria",
    logo: "/logo.png",
    website: "https://techhub.ng",
  },
  {
    id: 2,
    name: "First Bank Nigeria",
    logo: "/logo.png",
    website: "https://firstbanknigeria.com",
  },
  {
    id: 3,
    name: "University of Lagos",
    logo: "/logo.png",
    website: "https://unilag.edu.ng",
  },
  {
    id: 4,
    name: "Microsoft Nigeria",
    logo: "/logo.png",
    website: "https://microsoft.com/nigeria",
  },
  {
    id: 5,
    name: "Tony Elumelu Foundation",
    logo: "/logo.png",
    website: "https://tonyelumelufoundation.org",
  },
  {
    id: 6,
    name: "Andela Nigeria",
    logo: "/logo.png",
    website: "https://andela.com",
  },
]

export function Partners() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Trusted Partners
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
          {/* <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            We collaborate with leading organizations across Nigeria to amplify our impact and create more opportunities for young leaders.
          </p> */}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-8 mb-8">
          {featuredPartners.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center p-4 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-md hover:scale-105"
            >
              <Link href={partner.website} target="_blank" className="flex flex-col items-center space-y-3">
                <div className="relative w-20 h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium">
                  {partner.name}
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Scrolling Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set */}
              {featuredPartners.map((partner) => (
                <div
                  key={`first-${partner.id}`}
                  className="flex-shrink-0 w-32 mx-2 group"
                >
                  <div className="flex flex-col items-center p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-sm">
                    <Link href={partner.website} target="_blank" className="flex flex-col items-center space-y-2">
                      <div className="relative w-16 h-8 grayscale group-hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium leading-tight">
                        {partner.name}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {featuredPartners.map((partner) => (
                <div
                  key={`second-${partner.id}`}
                  className="flex-shrink-0 w-32 mx-2 group"
                >
                  <div className="flex flex-col items-center p-3 rounded-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-sm">
                    <Link href={partner.website} target="_blank" className="flex flex-col items-center space-y-2">
                      <div className="relative w-16 h-8 grayscale group-hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium leading-tight">
                        {partner.name}
                      </span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Link */}
        {/* <div className="text-center">
          <Link
            href="/partners"
            className="inline-flex items-center text-sm text-primary hover:text-primary/80 font-medium transition-colors duration-300 group"
          >
            View all partners
            <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}