import React from "react";
import Container from "./Container";

import warrarntyImage from "@/assets/warranty.png";
import replacementImage from "@/assets/replacement.png";
import billingImage from "@/assets/billing.png";
import deliveryImage from "@/assets/delivery.png";
import Image from "next/image";

const testimonials = [
  {
    emphasised: "1 Year",
    text: "Warranty",
    image: warrarntyImage,
  },
  {
    emphasised: "7 Day",
    text: "Replacement",
    image: replacementImage,
  },
  {
    emphasised: "GST",
    text: "Billing",
    image: billingImage,
  },
  {
    emphasised: "Your place",
    text: "Delivery",
    image: deliveryImage,
  },
];

export default function TestimonialSection() {
  return (
    <Container className="flex justify-center">
      <div className="grid grid-cols-4 gap-7 md:gap-10">
        {testimonials.map((testimonial) => (
          <div
            className="flex flex-col justify-center items-center"
            key={testimonial.text}
          >
            <div className="flex justify-center items-center">
              <Image
                className="size-16 md:size-24"
                src={testimonial.image}
                height={200}
                width={200}
                alt={testimonial.text}
              />
            </div>
            <div className="text-sm md:tezt-base text-center">
              <span className="font-semibold">
                {testimonial.emphasised} &nbsp;
              </span>
              <span>{testimonial.text}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
