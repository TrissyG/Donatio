"use client";
import { Button } from "@/components/ui/button";
import { completeChallenge } from "@/gateway/Challenges/putChallenges";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      // await completeChallenge("1");
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      // router.push("http://localhost:3000/");
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
          height={450}
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
          className="align-right self-end w-[150px] rounded-full bg-donatio-green text-[16px] font-bold"
          onClick={onSubmit}
        >
          {loading ? (
            <p className="flex">
              Posting <Loader2 className="animate-spin ml-2 " />
            </p>
          ) : (
            "Post"
          )}
        </Button>
      </form>
    </div>
  );
}
