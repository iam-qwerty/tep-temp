import React from "react"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

type T = { quote: string; author: string; role?: string }

const samples: Record<string, T[]> = {
  tepa: [
    { quote: "TEPA helped me find direction and the confidence to lead.", author: "Chinedu", role: "Alumnus" },
    { quote: "The coaching and peer work changed my perspective on service.", author: "Amaka", role: "Alumnus" },
    { quote: "A transformative experience — practical and soulful.", author: "Kemi", role: "Mentor" },
  ],
  tepnh: [
    { quote: "The hub connected me to collaborators I still work with.", author: "Sarah", role: "Member" },
    { quote: "I found a community that actually listens.", author: "Tunde", role: "Volunteer" },
    { quote: "Events are thoughtful and well-run.", author: "Ruth", role: "Partner" },
  ],
  teppf: [
    { quote: "The fellowship sharpened my research and advocacy skills.", author: "Ife", role: "Fellow" },
    { quote: "I presented to policy-makers because of this programme.", author: "Bayo", role: "Fellow" },
    { quote: "Practical mentorship with measurable impact.", author: "Ngozi", role: "Advisor" },
  ],
  tepycc: [
    { quote: "I got a job offer two months after graduation.", author: "Ada", role: "Graduate" },
    { quote: "Mentorship matched me with the right industry contacts.", author: "Emeka", role: "Mentee" },
    { quote: "The career roadmap was priceless.", author: "Zainab", role: "Alumnus" },
  ],
}

export default function Testimonials({ initiative = "Initiative" }: { initiative?: string }) {
  const key = initiative.toLowerCase()
  const items = samples[key] ?? Object.values(samples).flat().slice(0, 3)

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">{initiative} Testimonials</h2>
          <p className="text-xl text-muted-foreground">Voices from participants and partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-lg">{t.author}</CardTitle>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground italic">“{t.quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
