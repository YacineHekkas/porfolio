"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from "@/lib/utils"
import FormattedDescription from "@/components/FormattedDescription"

type ProjectProps = {
  title: string
  description: string
  tags?: string[] // Make tags optional
  imageUrl?: string // Make imageUrl optional
  fulldescription: string
  images?: string[] // Make images optional
}

export default function Project({
  title,
  description,
  tags = [], // Provide a default empty array
  imageUrl = "/placeholder.svg", // Provide a default placeholder image
  fulldescription,
  images = [], // Provide a default empty array
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  })

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  // Auto swipe functionality
  const autoSwipe = () => {
    const timer = setInterval(() => {
      if (!selectedImage && images.length > 0) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
      }
    }, 3000)
    return () => clearInterval(timer)
  }

  useState(autoSwipe)

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
        onClick={() => setIsOpen(true)}
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
            {tags?.length > 0 && (
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                {tags?.map((tag, index) => (
                  <li
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {imageUrl && (
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt="Project I worked on"
              quality={95}
              width={452}
              height={320}
              className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
              transition 
              group-hover:scale-[1.04]
              group-hover:-translate-x-3
              group-hover:translate-y-3
              group-hover:-rotate-2

              group-even:group-hover:translate-x-3
              group-even:group-hover:translate-y-3
              group-even:group-hover:rotate-2

              group-even:right-[initial] group-even:-left-40"
            />
          )}
        </section>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 md:max-w-6xl md:h-[80vh]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4 z-50 text-gray-950 dark:text-white/90"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="grid h-full grid-rows-[1fr,auto] md:grid-rows-1 md:grid-cols-[1.1fr,0.9fr]">
            <div className="relative h-[40vh] md:h-full bg-gradient-to-br from-[#fbe2e3] to-[#dbd7fb] dark:from-[#946263] dark:to-[#676394] flex items-center">
              {images.length > 0 ? (
                selectedImage ? (
                  <div className="relative w-full h-full">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-4 z-50 text-gray-950 dark:text-white/90"
                      onClick={() => setSelectedImage(null)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Image
                      src={selectedImage || "/placeholder.svg"}
                      alt="Selected project image"
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-950 dark:text-white/90"
                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-950 dark:text-white/90"
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <Image
                      src={images[currentImageIndex] || "/placeholder.svg"}
                      alt="Project image"
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          className={cn(
                            "w-2 h-2 rounded-full transition-colors",
                            index === currentImageIndex
                              ? "bg-gray-950 dark:bg-white/90"
                              : "bg-gray-500/50 dark:bg-white/50",
                          )}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-500">No images available</div>
              )}

              {images.length > 0 && (
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-auto py-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      className={cn(
                        "relative flex-shrink-0 h-16 w-16 rounded-lg overflow-hidden border-2",
                        currentImageIndex === index ? "border-gray-950 dark:border-white/90" : "border-transparent",
                      )}
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Project thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col h-[60vh] md:h-full bg-white dark:bg-gray-950">
              <div className="flex-1 p-6 overflow-y-auto">
                <FormattedDescription fulldescription={fulldescription} />
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#dbd7fb] dark:bg-[#676394] text-gray-950 dark:text-white/90 px-3 py-1 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
