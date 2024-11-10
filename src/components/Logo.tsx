import Image from "next/image";
import React from "react";

import logo from "@/assets/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-5">
      <div className="">
        <Image src={logo} alt="logo" width={40} height={40} />
      </div>
      <h1 className="text-2xl">Divity Audio</h1>
    </div>
  );
}
