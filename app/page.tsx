import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { Impact } from "@/components/impact"
import { Team } from "@/components/team"
import { GetInvolved } from "@/components/get-involved"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Team />
        <GetInvolved />
      </main>
      <Footer />
    </div>
  )
}
