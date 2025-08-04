
import { Hero } from "@/components/homepage/hero"
import { About } from "@/components/homepage/about"
import { Programs } from "@/components/homepage/programs"
import { Impact } from "@/components/homepage/impact"
import { Team } from "@/components/homepage/team"
import { GetInvolved } from "@/components/homepage/get-involved"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Team />
        <GetInvolved />
      </main>
    </div>
  )
}
