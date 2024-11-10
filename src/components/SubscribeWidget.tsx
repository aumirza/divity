import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function SubscribeWidget() {
  return (
    <div className="flex flex-col text-sm">
      <span>Subscribe</span>
      <div className="flex gap-2">
        <Input placeholder="Enter your email" className="rounded-full" />
        <Button className="p-3 rounded-full bg-transparent" variant="outline">
          Subscribe
        </Button>
      </div>
      <p className="text-xs">
        By subscribing you agree to with our Privacy Policy
      </p>
    </div>
  );
}

export default SubscribeWidget;
