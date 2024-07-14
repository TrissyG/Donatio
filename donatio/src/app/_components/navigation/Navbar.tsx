"use client";

import React, { useState } from "react";
import Image from "next/image";
import SelectedIcon from "../SelectedIcon";
import Link from "next/link";

export default function Navbar() {
  const [icons, setIcons] = useState([
    {
      name: "explore",
      url: "/",
      imageUrl: "/explore.svg",
      selected: true,
    },
    {
      name: "challenge",
      url: "/challenge",
      imageUrl: "/challenge.svg",
      selected: false,
    },
    {
      name: "causes",
      url: "/charity",
      imageUrl: "/charity.svg",
      selected: false,
    },
    {
      name: "profile",
      url: "/profile",
      imageUrl: "/profile.svg",
      selected: false,
    },
  ]);
  const onIconClick = (currentIcon: any) => {
    const newIcons = icons.map((icon) => {
      if (icon.name === currentIcon.name) {
        return { ...icon, selected: true };
      } else {
        return { ...icon, selected: false };
      }
    });
    setIcons(newIcons);
  };

  return (
    <div className="w-[340px] h-[65px] bg-donatio-black ml-[30px] rounded-full absolute bottom-[15px] shadow-lg">
      <ul className="flex flex-row gap-6 items-center justify-around px-3 mt-[10px]">
        {icons.map((icon, index) => (
          <Link
            href={icon.url}
            key={index}
            className="cursor-pointer transition-all duration-300 hover:opacity-70"
          >
            {icon.selected ? (
              <SelectedIcon name={icon.name} />
            ) : (
              <Image
                src={icon.imageUrl}
                width={50}
                height={50}
                alt={icon.name}
                onClick={() => {
                  onIconClick(icon);
                }}
                className="text-white text-[16px] w-6"
              />
            )}
          </Link>
        ))}
      </ul>
    </div>
  );
}
