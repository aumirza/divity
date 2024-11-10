import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
  ...restprops
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div {...restprops} className={cn("w-11/12 mx-auto", className)}>
      {children}
    </div>
  );
}
