import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react"

const navigation = {
  main: [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Impact", href: "#impact" },
    { name: "Team", href: "#team" },
    { name: "Get Involved", href: "#get-involved" },
  ],
  programs: [
    { name: "TEPA - Academy", href: "#programs" },
    { name: "TEPYCC - Career Compass", href: "#programs" },
    { name: "TEPPF - Policy Fellowship", href: "#programs" },
    { name: "TEPNH - Networking Hub", href: "#programs" },
  ],
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/the-emergence-porch/",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1YnzmqeRhq/",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/theemergenceporch?igsh=MWs5djhpYXMwdHdhdg==",
      icon: Instagram,
    },
    {
      name: "X",
      href: "https://x.com/emergenceporch?s=08",
      icon: Twitter,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="The Emergence Porch" width={40} height={40} className="h-10 w-auto" />
              <span className="font-bold text-foreground">The Emergence Porch</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Nigeria's go-to community for raising purpose-driven young leaders equipped to lead meaningful lives and
              transform their communities.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:theemergenceporch@gmail.com" className="hover:text-primary">
                  theemergenceporch@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+2349125314634" className="hover:text-primary">
                  +234 912 531 4634
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              {navigation.programs.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Follow us for updates, stories, and insights on how we're creating purpose-driven change across Nigeria.
            </p>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Emergence Porch. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Founded June 1, 2025 • Empowering Young Nigerians
          </p>
        </div>
      </div>
    </footer>
  )
}
