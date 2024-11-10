import React from "react";
import Container from "./Container";

import audioImage from "@/assets/sony-audio.png";
import visionImage from "@/assets/vision.png";
import oemImage from "@/assets/oem.png";
import Image from "next/image";

const categories = [
  {
    name: "Audio",
    image: audioImage,
  },
  {
    name: "Visiom",
    image: visionImage,
  },
  {
    name: "Oem",
    image: oemImage,
  },
  {
    name: "Audio",
    image: audioImage,
  },
  {
    name: "Visiom",
    image: visionImage,
  },
  {
    name: "Oem",
    image: oemImage,
  },
  {
    name: "Visiom",
    image: visionImage,
  },
  {
    name: "Oem",
    image: oemImage,
  },
];

export default function Categories() {
  return (
    <Container>
      <h4 className="text-xl font-medium mb-2">Shop by Categories</h4>
      <div className="w-full grid grid-cols-4 md:grid-cols-8  justify-between gap-10 mt-10">
        {categories.map((category, i) => (
          <div key={category.name + i} className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <Image
                className="z-20 size-16 md:size-24"
                src={category.image}
                alt={category.name}
                height={200}
              />
              <div className="size-14 md:size-16 bg-gray-400 rounded-full -mt-16"></div>
            </div>
            <div className="">{category.name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
}
