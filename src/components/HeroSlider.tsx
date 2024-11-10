"use client";
import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Container from "./Container";
import Image from "next/image";

import worldMap from "@/assets/world-map.png";
import speaker from "@/assets/jbl-speaker-product.png";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";

function HeroSlider() {
  return (
    <Container className="py-10">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        // slidesPerView={3}
        className="h-[27rem] rounded-lg"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {new Array(4).fill(0).map((_, i) => (
          <SwiperSlide
            key={i}
            className="relative bg-black text-white h-full w-full flex justify-center items-center"
          >
            <div className="absolute h-full w-full flex flex-col md:flex-row justify-around items-center">
              <div className="flex flex-col items-center md:items-start">
                <h4 className="text-xl md:text-2xl font-medium">
                  Gear Up with JBL Speakers
                </h4>
                <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                  JBL CLUB WS 1200
                </h3>
                <p className="text-xl">12&ldquo; Shallow Mount Sunwoofer</p>
                <Button className="bg-orange-600 text-white px-3 py2 mt-3 rounded-full">
                  <ShoppingCartIcon />
                  <span>Shop Now</span>
                </Button>
              </div>
              <div className="">
                <Image
                  className="size-60 lg:size-64"
                  src={speaker}
                  height={400}
                  width={400}
                  alt={""}
                />
              </div>
            </div>
            <Image
              className="-z-10 abosulte top-0 left-0 w-full h-full"
              src={worldMap}
              height={400}
              width={400}
              alt={""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default HeroSlider;
