import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-muted border-t px-4 md:px-6">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="The Emergence Porch" width={32} height={32} className="h-8 w-8" />
              <span className="font-bold text-lg text-primary">The Emergence Porch</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering young Nigerians with leadership skills, career clarity, and social responsibility through
              mentorship and community.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/the-emergence-porch/"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1YnzmqeRhq/"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/theemergenceporch"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/emergenceporch" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-muted-foreground hover:text-primary">
                  Our Initiatives
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link href="/opportunities" className="text-muted-foreground hover:text-primary">
                  Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/initiatives/tepa" className="text-muted-foreground hover:text-primary">
                  TEPA - Academy
                </Link>
              </li>
              <li>
                <Link href="/initiatives/tepycc" className="text-muted-foreground hover:text-primary">
                  TEPYCC - Career Compass
                </Link>
              </li>
              <li>
                <Link href="/initiatives/teppf" className="text-muted-foreground hover:text-primary">
                  TEPPF - Policy Fellowship
                </Link>
              </li>
              <li>
                <Link href="/initiatives/tepnh" className="text-muted-foreground hover:text-primary">
                  TEPNH - Networking Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Stay Connected</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <Link href="mailto:theemergenceporch@gmail.com" className="text-muted-foreground hover:text-primary">
                  theemergenceporch@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <Link href="tel:+2349125314634" className="text-muted-foreground hover:text-primary">
                  +234 912 531 4634
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Newsletter</p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Emergence Porch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
