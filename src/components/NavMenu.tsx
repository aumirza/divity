import { cn } from "@/lib/utils";
import React from "react";
import Container from "./Container";

// Audio vision oem interrioir aeshtaetics necessities 'car care'  'online audo' 'offline stores' 'in-office services'
const menuLinks = [
  {
    text: "Audio",
    link: "#audio",
  },

  {
    text: "Vision",
    link: "#vision",
  },

  {
    text: "OEM",
    link: "#oem",
  },

  {
    text: "Interrioir",
    link: "#interrioir",
  },

  {
    text: "Aesthetics",
    link: "#aesthetics",
  },

  {
    text: "Necessities",
    link: "#necessities",
  },

  {
    text: "Car Care",
    link: "#car-care",
  },

  {
    text: "Online Audio",
    link: "#online-audio",
  },

  {
    text: "Offline Stores",
    link: "#offline-stores",
  },

  {
    text: "In-Office Services",
    link: "#in-office-services",
  },
];

function NavMenu() {
  return (
    <nav className="bg-gray-300 py-2">
      <Container>
        <ul className="w-full flex justify-between gap-2 text-sm md:text-base text-nowrap overflow-hidden">
          {menuLinks.map((link, index) => {
            return (
              <li key={index.toString() + link}>
                <a
                  href={link.link}
                  className={cn("p-3", index === 0 ? "text-orange-500 " : "")}
                >
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}

export default NavMenu;
