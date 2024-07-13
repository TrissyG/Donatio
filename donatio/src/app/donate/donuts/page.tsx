import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
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

export default function Page() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex justify-center items-center gap-2 rounded-full border-donatio-green border-opacity-60 border-2 px-4 py-2 bg-donatio-green bg-opacity-20">
        <p className="text-2xl font-semibold">1090</p>
        <Image
          src="/donut.svg"
          alt="logo"
          width={30}
          height={30}
          className="ml-4"
        />
      </div>

      <div className="flex flex-col gap-4 mt-8 max-h-[600px] overflow-y-auto no-scrollbar">
        {packages.map((pkg) => (
          <div
            key={pkg.donuts}
            className="flex flex-col items-center justify-center w-[330px] h-[300px] rounded-2xl bg-white shadow-lg bg-opacity-30 py-12 border-[1px]"
          >
            <div className="text-3xl font-semibold flex gap-2">
              <p>{pkg.donuts}</p>
              <Image src="/donut.svg" alt="logo" width={30} height={25} />
            </div>
            <p className="text-xl font-semibold">{pkg.value}</p>
            <p className="text-xl font-semibold">{pkg.name}</p>

            <Button className="mt-12 bg-donatio-green rounded-full px-8">
              Select <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
