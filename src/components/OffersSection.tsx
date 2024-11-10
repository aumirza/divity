import React from "react";
import Container from "./Container";
import { Button } from "./ui/button";
import { LinkIcon } from "lucide-react";

function OffersSection() {
  return (
    <Container className="my-5">
      <h4 className="text-xl font-medium mb-2">Ongoing Offers</h4>
      <div className="flex items-center justify-around rounded-lg h-32 bg-[radial-gradient(circle_at_50px,_var(--tw-gradient-stops))] from-orange-400 via-orange-600 to-black px-2">
        <p className="text-2xl md:text-4xl lg:text-6xl text-white font-extrabold drop-shadow-md">
          Explore deals on Car Audio
        </p>
        <Button className="bg-orange-600 text-white rounded-none">
          <span>See More</span>
          <LinkIcon />
        </Button>
      </div>
    </Container>
  );
}

export default OffersSection;
