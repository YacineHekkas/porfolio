"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dialog, DialogContent, DialogPortal } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import FormattedDescription from "@/components/FormattedDescription";
import { useDialog } from "@/context/dialog-context";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

type Img = StaticImageData | string;

type ProjectProps = {
  title: string;
  description: string;
  tags?: readonly string[];      // accept readonly tags
  imageUrl?: Img;
  fulldescription: string;
  images?: readonly Img[];       // <-- accept readonly Img[]
};

export default function Project({
  title,
  description,
  tags = [] as readonly string[],
  imageUrl = "/placeholder.svg",
  fulldescription,
  images = [] as readonly Img[],
}: ProjectProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { setIsDialogOpen } = useDialog();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  const srcOf = (img: Img | undefined): string => {
    if (!img) return "/placeholder.svg";
    return typeof img === "string" ? img : img.src;
  };

  return (
    <>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
        onClick={() => {
          setIsOpen(true);
          setIsDialogOpen(true);
        }}
      >
        <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
          {/* Mobile layout (image on top) */}
          <div className="sm:hidden">
            {imageUrl && (
              <div className="relative w-full h-60">
                <Image
                  src={imageUrl}
                  alt={title}
                  quality={95}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            )}
            <div className="pt-4 pb-7 px-5 flex flex-col h-full">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
              {tags.length > 0 && (
                <ul className="flex flex-wrap mt-4 gap-2">
                  {tags.map((tag, index) => (
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
          </div>

          {/* Desktop layout */}
          <div className="hidden sm:block">
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
              {tags.length > 0 && (
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                  {tags.map((tag, index) => (
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
                src={imageUrl}
                alt={title}
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
          </div>
        </section>
      </motion.div>

      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          setIsDialogOpen(open);
        }}
      >
        <DialogPortal>
          <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 md:max-w-6xl md:h-[80vh]">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-50 text-gray-950 dark:text-white/90"
              onClick={() => {
                setIsOpen(false);
                setIsDialogOpen(false);
              }}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="grid h-full grid-rows-[1fr,auto] md:grid-rows-1 md:grid-cols-[1.1fr,0.9fr]">
              <div className="relative h-[40vh] md:h-full bg-gradient-to-br from-[#fbe2e3] to-[#dbd7fb] dark:from-[#946263] dark:to-[#676394] flex items-center">
                {images.length > 0 ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={images[currentImageIndex]}
                      alt={`${title} image ${currentImageIndex + 1}`}
                      fill
                      className="object-contain p-4 cursor-pointer"
                      onClick={() => handleImageClick(currentImageIndex)}
                    />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          className={cn(
                            "w-2 h-2 rounded-full transition-colors",
                            index === currentImageIndex ? "bg-gray-950 dark:bg-white/90" : "bg-gray-500/50 dark:bg-white/50"
                          )}
                          onClick={() => setCurrentImageIndex(index)}
                        />
                      ))}
                    </div>
                  </div>
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
                          currentImageIndex === index ? "border-gray-950 dark:border-white/90" : "border-transparent"
                        )}
                        onClick={() => handleImageClick(index)}
                      >
                        <Image src={image} alt={`Project thumbnail ${index + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col h-[60vh] md:h-full bg-white dark:bg-gray-950">
                <div className="flex-1 p-6 overflow-y-auto">
                  <FormattedDescription fulldescription={fulldescription} />
                </div>
              </div>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>

      {isLightboxOpen && images.length > 0 && (
        <Lightbox
          mainSrc={srcOf(images[currentImageIndex])}
          nextSrc={srcOf(images[(currentImageIndex + 1) % images.length])}
          prevSrc={srcOf(images[(currentImageIndex + images.length - 1) % images.length])}
          onCloseRequest={() => setIsLightboxOpen(false)}
          onMovePrevRequest={() => setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}
        />
      )}
    </>
  );
}
