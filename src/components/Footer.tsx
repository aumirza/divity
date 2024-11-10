import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import SubscribeWidget from "./SubscribeWidget";

function SubFooter() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-2 justify-between text-sm">
      <span>Privacy Policy | Terms of Service | Cookies setting</span>
      <span>© 2024 All rights reserved.</span>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white">
      <Container className="py-10">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <div className="flex flex-col gap-2">
            <Logo />
            <ul className="flex gap-4 text-sm">
              <li>Tires</li>
              <li>Batteries</li>
              <li>Lubricants</li>
              <li>Car accessories</li>
            </ul>
            <div className="flex gap-2 text-sm">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <LinkedinIcon />
            </div>
          </div>
          <SubscribeWidget />
        </div>
        <hr className="my-5" />
        <SubFooter />
      </Container>
    </div>
  );
}
