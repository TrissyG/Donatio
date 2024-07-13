"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";

import { createPost } from "@/gateway/Posts/postPosts";
import { Post } from "@/types/types";
import { completeChallenge } from "@/gateway/Challenges/putChallenges";

export default function PageWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Page />
    </Suspense>
  );
}

function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("imageUrl");
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState<Omit<Post, "image">>({
    causes: "",
    description: "",
    likes: 0,
    reposts: 0,
    time: new Date().toISOString(),
    user_image: "",
    username: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!imageUrl) {
      console.error("No image URL found");
      return;
    }
    try {
      setLoading(true);
      await createPost(newPost, imageUrl);
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
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="image1"
            width={350}
            height={450}
            className="rounded-2xl shadow-lg border-2 border-donatio-green"
          />
        )}
      </div>

      <form className="flex flex-col gap-4 mx-8 mt-6">
        <label className="text-lg font-semibold">Enter a cause</label>
        <input
          type="text"
          name="causes"
          placeholder="Worthy cause"
          onChange={handleInputChange}
          className="px-4 py-2 rounded-lg shadow-md border-2 border-donatio-green border-opacity-50"
        />
        <label className="text-lg font-semibold">Write a description</label>
        <textarea
          name="description"
          className="rounded-lg shadow-md border-2 border-donatio-green border-opacity-50 px-4 py-2"
          rows={4}
          placeholder="Why should people care about this cause?"
          onChange={handleInputChange}
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
