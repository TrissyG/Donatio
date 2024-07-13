"use client";

import { Button } from "@/components/ui/button";
import { Expand, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import Canvas from "../_components/Canvas";
import generateImage from "@/gateway/Images/generateImage";
import { postImage } from "@/gateway/Images/postImage";
import Image from "next/image";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  const handlePromptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPrompt(event.target.value);
  };

  const onGenerate = async () => {
    canvasRef.current?.toBlob(async (blob) => {
      if (blob) {
        try {
          const generatedImage = await generateImage(blob, prompt);
          const imageUrl = await postImage(generatedImage);

          setLoading(false);
          router.push(
            `/create/preview/?imageUrl=${encodeURIComponent(imageUrl)}`
          );
        } catch (error) {
          console.error("Error generating or uploading image:", error);
          setLoading(false);
        }
      }
    });
  };

  return (
    <div>
      {loading ? (
        <div>
          <div className="mx-8 grid place-items-center mt-12 h-[400px]">
            <Image
              src="/mascot4.svg"
              alt="mascot-cooking"
              width={320}
              height={400}
            />
          </div>
          <div className="text-xl font-semibold">
            <p className="mx-8 mt-4 text-lg flex items-center gap-4">
              Generating your Post <Loader2 className="animate-spin w-6 h-6" />
            </p>
          </div>
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
            <Canvas ref={canvasRef} />
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
              onChange={handlePromptChange}
              value={prompt}
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
