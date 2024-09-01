"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Images = [
  { src: "/img/img1.jpg" },
  { src: "/img/img2.jpg" },
  { src: "/img/img3.jpg" },
  { src: "/img/img4.jpg" },
  { src: "/img/img1.jpg" },
  { src: "/img/img2.jpg" },
  { src: "/img/img3.jpg" },
  { src: "/img/img4.jpg" },
];

export function CarouselSize() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full h-56 "
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Images.map((item, index) => (
          <CarouselItem key={index} className="basis-1/4">
            <img
              src={item.src}
              className="  object-contain   "
              alt=""
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
