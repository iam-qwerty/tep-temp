import Gallery from "@/components/gallery/gallery"

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    alt: "Students in workshop",
    tags: ["workshop", "community"],
  },
  {
    src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop",
    alt: "Group discussion",
    tags: ["discussion", "community"],
  },
  {
    src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1400&auto=format&fit=crop",
    alt: "Mentor and mentee",
    tags: ["mentorship"],
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
    alt: "Graduation celebration",
    tags: ["celebration", "alumni"],
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop",
    alt: "Community project",
    tags: ["project", "impact"],
  },
  {
    src: "https://images.unsplash.com/photo-1511452885608-413c5a8e0f9b?q=80&w=1400&auto=format&fit=crop",
    alt: "Workshop hands-on",
    tags: ["workshop"],
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    alt: "Outdoor meetup",
    tags: ["community", "events"],
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop",
    alt: "Collaboration session",
    tags: ["collaboration"],
  },
]

export default function GalleryPage() {
  return (
    <main className="flex flex-col">
      <section className="py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container px-4 text-center">
          <h1 className="text-4xl font-bold">Moments & Memories</h1>
          <p className="mt-3 text-lg text-muted-foreground">A curated gallery of our programmes, people, and impact.</p>
        </div>
      </section>

      <Gallery images={IMAGES} />
    </main>
  )
}
