"use client";

import { Button } from "@/components/ui/button";
import { Expand } from "lucide-react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Canvas from "../_components/Canvas";

interface createPageProps {}

export default function page() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onGenerate = () => {
    setLoading(true);

    try {
      setTimeout(() => {
        setLoading(false);
        router.push("http://localhost:3000/create/preview");
      }, 3000);
    } catch (error) {}
  };

  return (
    <div>
      {loading ? (
        <div>
          <div className="mx-8 bg-white grid place-items-center mt-12 shadow-md rounded-lg h-[400px]">
            Mascot
          </div>
          <p className="mx-8 mt-4 text-lg ">Generating your Post...</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-center mb-6 mt-2 text-donatio-green">
            Generate a Post
          </h2>
          <h3 className="text-lg mx-8 font-bold mt-2 mb-4">Draw anything</h3>

          <div
            id="canvas"
            className="mx-8 h-[300px] shadow-md place-items-center rounded-lg mb-6 relative"
          >
            <Canvas />
            <Expand
              className="absolute top-4 right-4 cursor-pointer transition-all duration-250 hover:text-donatio-green"
              size={20}
            />
          </div>
          <form className="flex justify-center flex-col items-center">
            <label className="font-semibold text-lg mb-4 text-left">
              Input your prompt
            </label>
            <textarea
              className="w-[350px] p-4 rounded-lg shadow-md border-2 border-donatio-green"
              rows={4}
            ></textarea>
          </form>
          <div className="px-8 mt-6">
            <Button
              className="bg-donatio-green px-[140px] rounded-full text-[17px] font-semibold"
              onClick={onGenerate}
            >
              Generate
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
