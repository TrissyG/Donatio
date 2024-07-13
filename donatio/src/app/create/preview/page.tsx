"use client";
import { Button } from "@/components/ui/button";
import { completeChallenge } from "@/gateway/Challenges/putChallenges";
import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const onPost = async () => {
    try {
      setLoading(true);
      await completeChallenge("1");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-8">
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/donatio-deba9.appspot.com/o/posts%2F3vlh9Qthjo2epdtWdv9A?alt=media&token=b2b4efd3-abea-451a-a96e-18431807be94"
          }
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
          onClick={() => onPost}
        >
          Post
        </Button>
      </form>
    </div>
  );
}
