"use client";

import { Button } from "@/components/ui/button";
import { Expand } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import generateImage from "@/gateway/stabilityai-api";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [canvasImage, setCanvasImage] = useState<Blob | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [start, setStart] = useState<{ x: number; y: number } | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
  const [offset, setOffset] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [prompt, setPrompt] = useState<string>("");
  const color = "#000";
  const background = "#fff";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  const handlePromptChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPrompt(event.target.value);
  };

  const getCanvasImage = () => {
    if (canvasRef.current) {
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          setCanvasImage(blob);
        }
      });
    }
  };

  useEffect(() => {
    getCanvasImage();
  }, []);

  const onGenerate = async () => {
    getCanvasImage();
    setLoading(true);

    if (canvasImage) {
      const formData = new FormData();
      formData.append("image", canvasImage);
      formData.append("prompt", prompt);

      await generateImage(formData);
      console.log(canvasImage);
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.lineWidth = 1.5;
        setContext(ctx);
        handleSize();
      }
    }

    const handleResize = () => handleSize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasRef]);

  useEffect(() => {
    if (context) {
      context.strokeStyle = color;
    }
  }, [color, context]);

  const handleStart = (x: number, y: number) => {
    setIsDrawing(true);
    setStart({ x, y });
  };

  const handleEnd = () => {
    setIsDrawing(false);
  };

  const handleMove = (x: number, y: number) => {
    if (!isDrawing || !start || !context) return;

    context.beginPath();
    context.moveTo(start.x, start.y);
    context.lineTo(x, y);
    context.closePath();
    context.stroke();

    setStart({ x, y });
  };

  const handleSize = () => {
    if (canvasRef.current) {
      const { top, left } = canvasRef.current.getBoundingClientRect();
      setOffset({ top, left });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    handleStart(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    handleMove(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = e.touches[0];
    handleStart(clientX - offset.left, clientY - offset.top);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = e.touches[0];
    handleMove(clientX - offset.left, clientY - offset.top);
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
            <canvas
              ref={canvasRef}
              width={350}
              height={300}
              className="rounded-lg"
              onMouseDown={handleMouseDown}
              style={{ background }}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleEnd}
              onTouchMove={handleTouchMove}
            />
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
