"use client";
import React from "react";
import { AnimatedStandingHoratio } from "../_components/animation/standingHoratio/AnimatedStandingHoratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronLeft, CreditCard } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center mt-48 flex-col gap-10">
      <AnimatedStandingHoratio scale={2.5} />
      <Link href="/donate/payment">
        <Button className="text-lg w-[300px] h-[45px] rounded-full bg-donatio-green">
          Donate with Card <CreditCard size={20} className="ml-4" />
        </Button>
      </Link>
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
      <Button
        className="absolute top-20 left-4"
        onClick={() => router.push("charity/tnc")}
      >
        <ChevronLeft className="h-4" />
      </Button>
    </div>
  );
}
