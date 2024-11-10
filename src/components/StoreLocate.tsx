import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";

import storeImage from "@/assets/store.png";
import Image from "next/image";

function StoreLocate() {
  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center justify-around bg-gray-900   rounded-lg md:h-36 w-full p-5">
        <div className="">
          <Image
            src={storeImage}
            height={300}
            width={300}
            alt="store"
            className="w-64"
          />
        </div>
        <div className="">
          <h4 className="text-3xl font-semibold text-orange-500">
            Checkout Stores near you
          </h4>
          <p className="text-sm text-white">
            checkout the divity audio stores near your office/residence
          </p>
        </div>
        <Button className="bg-white text-black">Find a store</Button>
      </div>
    </Container>
  );
}

export default StoreLocate;
