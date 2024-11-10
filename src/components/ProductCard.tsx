"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { HeartIcon } from "lucide-react";

export default function ProductCard({
  title,
  price,
  image,
  attributes,
}: {
  title: string;
  price: number;
  image: StaticImageData;
  attributes: {
    name: string;
    value: string;
  }[];
}) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card className="flex flex-col justify-center items-center w-[19rem] md:w-64 p-2 m-auto">
      <div className="relative">
        <div className="flex justify-center items-center size-72  md:size-60 bg-gray-100 rounded-lg">
          <Image
            className=""
            src={image}
            alt={title}
            width={200}
            height={200}
          />
        </div>
        <div className="absolute right-2 top-2 text-red-500 cursor-pointer hover:animate-pulse">
          {isLiked ? (
            <HeartIcon fill="red" onClick={() => setIsLiked(false)} />
          ) : (
            <HeartIcon onClick={() => setIsLiked(true)} />
          )}
        </div>
      </div>
      <div className="w-full p-1 flex flex-col gap-1">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex gap-2 text-sm">
          {attributes.map((attribute, index) => (
            <div key={index} className="flex gap-1">
              <span>{attribute.name}:</span>
              <span>{attribute.value}</span>
            </div>
          ))}
        </div>
        <div className="">
          INR<span>&nbsp;{price}</span>
        </div>
        <Button className="w-full font-medium text-primary rounded-md bg-orange-300">
          Add to Cart(incl. coupon)
        </Button>
      </div>
    </Card>
  );
}
