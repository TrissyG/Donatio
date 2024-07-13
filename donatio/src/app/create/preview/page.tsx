"use client";
import { Button } from "@/components/ui/button";
import { completeChallenge } from "@/gateway/Challenges/putChallenges";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(1);
      setLoading(true);
      await completeChallenge("1");
      setLoading(false);
      router.push("http://localhost:3000/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <Image
          src={"/piermanuele-sberni-m9dyZivCp2A-unsplash.jpg"}
          alt="image1"
          width={350}
          height={520}
          className="rounded-2xl shadow-lg border-2 border-donatio-green"
        />
      </div>

      <form className="flex flex-col gap-4 mx-8 mt-6">
        <label className="text-lg font-semibold">Write a caption</label>
        <textarea
          className="rounded-lg shadow-md border-2 border-donatio-green border-opacity-50"
          rows={4}
        ></textarea>
        <Button
          className="align-right self-end px-[50px] rounded-full bg-donatio-green text-[16px] font-bold"
          onClick={onSubmit}
        >
          Post
        </Button>
      </form>
    </div>
  );
}
