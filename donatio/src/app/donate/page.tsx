import React from "react";
import { AnimatedStandingHoratio } from "../_components/animation/standingHoratio/AnimatedStandingHoratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, CreditCard } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex justify-center items-center mt-12 flex-col gap-10">
      <AnimatedStandingHoratio scale={2.5} />
      <Button className="text-lg w-[300px] h-[45px] rounded-full bg-donatio-green">
        Donate with Card <CreditCard size={20} className="ml-4" />
      </Button>
      <Link href="/donate/donuts">
        <Button className="text-lg w-[300px] h-[45px] rounded-full bg-donatio-black">
          Donate with Donuts{" "}
          <Image
            src="/donut.svg"
            alt="logo"
            width={20}
            height={20}
            className="ml-4"
          />
        </Button>
      </Link>

      <Button className="text-lg w-[170px] h-[45px] rounded-full bg-donatio-red mt-40 self-start ml-16">
        <ChevronLeft size={20} className="mr-2" />{" "}
        <p className="pr-4 ">Return</p>
      </Button>
    </div>
  );
}
