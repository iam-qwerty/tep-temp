import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/initiatives", label: "Our Initiatives" },
  { href: "/team", label: "Our Team" },
  { href: "/news", label: "News & Blog" },
  { href: "/opportunities", label: "Opportunities" },
]
const programs = [
  { href: "/initiatives/tepa", label: "TEPA - Academy" },
  { href: "/initiatives/tepycc", label: "TEPYCC - Career Compass" },
  { href: "/initiatives/teppf", label: "TEPPF - Policy Fellowship" },
  { href: "/initiatives/tepnh", label: "TEPNH - Networking Hub" },
]

export default function Footer() {
  return (
    <footer className="bg-primary md:px-6 text-primary-foreground">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="The Emergence Porch" width={32} height={32} className="h-8 w-8" />
              <span className="font-bold text-lg">The Emergence Porch</span>
            </Link>
            <p className="text-sm text-primary-foreground">
              Empowering young Nigerians with leadership skills, career clarity, and social responsibility through
              mentorship and community.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/the-emergence-porch/" target="_blank"
                className="text-primary-foreground hover:text-muted"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1YnzmqeRhq/" target="_blank"
                className="text-primary-foreground hover:text-muted"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/theemergenceporch" target="_blank"
                className="text-primary-foreground hover:text-muted"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/emergenceporch" target="_blank" className="text-primary-foreground hover:text-muted">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              {programs.map((program) => (
                <li key={program.href}>
                  <Link href={program.href} className="text-primary-foreground hover:text-primary">
                    {program.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Stay Connected</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-foreground" />
                <Link href="mailto:theemergenceporch@gmail.com" className="text-primary-foreground hover:text-primary">
                  theemergenceporch@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-foreground" />
                <Link href="tel:+2349125314634" className="text-primary-foreground hover:text-primary">
                  +234 912 531 4634
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Newsletter</p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button size="sm" variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-primary-foreground">
          <p>&copy; {new Date().getFullYear()} The Emergence Porch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
