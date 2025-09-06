import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function HeroCarousel() {
  const images = [
    { src: "/interior-emulsions.jpg", alt: "Interior emulsions" },
    { src: "/wood-finishes.jpg", alt: "Wood finishes" },
    { src: "/exterior-emulsion.jpg", alt: "Exterior emulsion" },
    { src: "/modern-painted-house.png", alt: "Modern painted house" },
  ]

  return (
    <Carousel
      className="w-full"
      opts={{ loop: true, align: "start" }}
      plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl shadow-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
