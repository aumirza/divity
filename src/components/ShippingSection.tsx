import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import classicImage from "@/assets/Classic.png";
import ellipseImage from "@/assets/ellipse.png";
import rectangleImage from "@/assets/rectangle.png";
import worldMap from "@/assets/world-map.png";

export default function ShippingSection() {
  return (
    <Container>
      <div className="relative bg-gray-900 rounded-2xl p-5 md:p-16 md:pb-12 overflow-hidden">
        <div className="flex flex-col gap-14">
          <div className="z-20 flex flex-col md:flex-row justify-around">
            <h4 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider text-white">
              Worldwide shipping
            </h4>
            <div className="text-white">
              <p>We have worldwide shipping, so you can flexible choose</p>
              <p>Which device is compatible for you.</p>
              <Button className="flex gap-1 bg-orange-500 text-white">
                <span>Shop now</span>
                <ShoppingCartIcon />
              </Button>
            </div>
          </div>
          <div className="z-20 flex justify-around">
            <div className="">
              <Image
                src={classicImage}
                alt="classic"
                width={400}
                height={400}
              />
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2 md:gap-5">
                <Image
                  className="size-8 md:size-16"
                  src={ellipseImage}
                  alt="ellipse"
                  width={50}
                  height={50}
                />
                <Image src={rectangleImage} alt="rectangle" height={100} />
              </div>
            </div>
          </div>
        </div>
        <Image
          className="z-0 top-0 left-0 w-full h-full absolute"
          src={worldMap}
          alt="world map"
          height={1000}
          width={1000}
        />
      </div>
    </Container>
  );
}
