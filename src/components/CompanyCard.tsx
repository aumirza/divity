import React from "react";
import Container from "./Container";
import backgroundImage from "@/assets/background.jpeg";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
import logo from "@/assets/logo.png";

export default function CompanyCard() {
  return (
    <Container>
      <div className="relative rounded-lg h-64 w-full">
        <Image
          src={backgroundImage}
          alt="background"
          fill
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center text-white">
          <div className="flex items-center gap-5">
            <div className="">
              <Image src={logo} alt="logo" width={20} height={20} />
            </div>
            <h1 className="text-2xl">Divity Audio</h1>
          </div>
          <p className="flex flex-col text-center text-2xl font-bold">
            <span> Your road to Automotive</span>
            <span>Excellence</span>
          </p>
          <Button className=" bg-orange-600 text-white rounded-full shadow">
            <span>Shop Now</span>
            <ShoppingCartIcon />
          </Button>
        </div>
      </div>
    </Container>
  );
}
