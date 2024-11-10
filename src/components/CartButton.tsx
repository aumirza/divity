import React from "react";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";

export default function CartButton() {
  return (
    <Button className="p-2 bg-orange-600 rounded-full px-4 ">
      <ShoppingCartIcon />
      <span>cart</span>
    </Button>
  );
}
