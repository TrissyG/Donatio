"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AnimatedChefHoratio } from "@/app/_components/animation/chefHoratio/AnimatedChefHoratio";
import { useRouter } from "next/navigation";
import { addDonuts } from "@/gateway/Users/putUsers";

const packages = [
  {
    donuts: "990",
    value: "$10.00",
    name: "Pro",
  },
];

export default function page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onclose = async () => {
    setLoading(true);

    await addDonuts("1", -990, 1120, 16200);

    router.push("/");
    setLoading(false);
  };

  return (
    <div>
      <div className="text-center text-xl  mt-24 mb-2">
        <h1 className="text-3xl font-semibold">$10 Pro Package</h1>
        <p>
          To:{" "}
          <strong className="text-donatio-green text-center">
            The Nature Conservancy
          </strong>
        </p>
      </div>

      <div className="flex flex-col gap-4 mt-8 max-h-[600px] overflow-y-auto no-scrollbar">
        {packages.map((pkg) => (
          <div
            key={pkg.donuts}
            className="flex flex-col items-center ml-6 justify-center w-[360px] h-[300px] rounded-2xl bg-white shadow-lg bg-opacity-30 py-12 border-[1px]"
          >
            <div className="text-3xl font-semibold flex gap-2">
              <p>{pkg.donuts}</p>
              <Image src="/donut.svg" alt="logo" width={30} height={25} />
            </div>
            <p className="text-xl font-semibold">{pkg.value}</p>
            <p className="text-xl font-semibold">{pkg.name}</p>

            <Button className="mt-12 bg-donatio-green rounded-full px-8">
              Selected
            </Button>
          </div>
        ))}

        <Dialog>
          <DialogTrigger asChild className="mx-4 mt-4">
            <Button className="rounded-full">Confirm purchase</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center py-4 text-xl">
                Thank you!
              </DialogTitle>
              <DialogDescription asChild>
                <div>
                  <div className="flex justify-center">
                    <AnimatedChefHoratio scale={2.5} />
                  </div>

                  <p className="text-lg font-semibold py-2 pt-4">
                    Thank you for donating $10 to The Nature Conservancy
                  </p>
                  <p className="text-[14px] text-opacity-60">
                    Your contribution is greatly appreciated!
                  </p>

                  <Button
                    className="bg-donatio-green rounded-full w-full px-8 mt-6"
                    onClick={() => onclose()}
                  >
                    {loading ? (
                      <>
                        Going back <Loader2 className="animate-spin ml-2" />
                      </>
                    ) : (
                      "Close"
                    )}
                  </Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
