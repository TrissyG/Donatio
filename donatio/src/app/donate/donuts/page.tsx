import Image from "next/image";
import React from "react";

const packages = [
  {
    donuts: "500",
    value: "$5.00",
    name: "Starter",
  },
  {
    donuts: "990",
    value: "$10.00",
    name: "Pro",
  },
  {
    donuts: "1950",
    value: "$20.00",
    name: "Business",
  },
];

export default function page() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex justify-center items-center gap-2 rounded-full border-donatio-green border-opacity-60 border-2 px-4 py-2 bg-donatio-green bg-opacity-20">
        <p className="text-2xl font-semibold">1090</p>
        <Image
          src="/donut.png"
          alt="logo"
          width={30}
          height={30}
          className="ml-4"
        />
      </div>
    </div>
  );
}
