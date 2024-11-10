import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { SquareArrowOutUpRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CardDescriptionSection({
  heading,
  descriptions,
  link,
  image,
  rtl,
}: {
  heading: string;
  descriptions: string[];
  link: string;
  image: StaticImageData;
  rtl?: boolean;
}) {
  return (
    <Container
      className={cn(
        "flex  justify-between items-center gap-20",
        rtl ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="z-20">
          <Image
            className="w-60 lg:w-68 rounded-lg"
            width={380}
            src={image}
            alt=""
          />
        </div>
        <div className="w-80 lg:w-96 h-44 lg:h-48 -mt-40 lg:-mt-44 bg-gray-800 rounded-lg"></div>
      </div>
      <div className="max-w-lg flex flex-grow flex-col items-end gap-5">
        <h3 className="font-bold text-5xl lg:text-6xl tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-black via-gray-900 to-amber-800 ">
          {heading}
        </h3>
        <p className="flex flex-col">
          {descriptions.map((desc) => (
            <span key={desc.slice(0, 5)}>{desc}</span>
          ))}
        </p>
        <Button className="w-full">
          <Link className="flex items-center gap-1" href={link}>
            <span>Explore Now</span>
            <SquareArrowOutUpRightIcon />
          </Link>
        </Button>
      </div>
    </Container>
  );
}
