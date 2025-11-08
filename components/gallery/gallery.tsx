"use client"
import React, { useMemo, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type Img = { src: string; alt?: string; tags?: string[] }

export default function Gallery({ images }: { images: Img[] }) {
  const tags = useMemo(() => {
    const s = new Set<string>()
    images.forEach((i) => (i.tags || []).forEach((t) => s.add(t)))
    return ["All", ...Array.from(s)]
  }, [images])

  const [filter, setFilter] = useState<string>("All")
  const [idx, setIdx] = useState<number | null>(null)

  const visible = images.filter((im) => filter === "All" || (im.tags || []).includes(filter))

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Photo Gallery</h2>
          <div className="flex gap-2 flex-wrap">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1 rounded-full text-sm border transition ${
                  t === filter ? "bg-primary text-primary-foreground border-primary" : "bg-transparent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {visible.map((img, i) => (
            <div key={i} className="break-inside-avoid rounded-lg overflow-hidden mb-4 shadow-sm">
              <button className="w-full group block" onClick={() => setIdx(i)}>
                <div className="relative w-full h-64 sm:h-48 lg:h-56">
                  <Image
                    src={img.src}
                    alt={img.alt || "gallery image"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="p-3 bg-white">
                  <div className="text-sm text-muted-foreground">{img.alt}</div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {idx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                aria-label="close"
                onClick={() => setIdx(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/90"
              >
                <X />
              </button>

              <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black rounded">
                <Image src={visible[idx].src} alt={visible[idx].alt ?? "image"} fill className="object-contain" />
              </div>

              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={() => setIdx((s) => (s === null ? null : (s - 1 + visible.length) % visible.length))}
                  className="p-2 rounded bg-white/90"
                >
                  <ChevronLeft />
                </button>
                <div className="text-sm text-muted-foreground">
                  {idx + 1} / {visible.length}
                </div>
                <button
                  onClick={() => setIdx((s) => (s === null ? null : (s + 1) % visible.length))}
                  className="p-2 rounded bg-white/90"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
