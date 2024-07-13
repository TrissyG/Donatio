"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { Post } from "@/types/types";

interface CardProps {
  post: Post;
}

const Card = ({ post }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const truncateCaption = (desc: string) =>
    desc.length > 30 ? `${desc.substring(0, 30)}...` : desc;

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  const truncatedLikes =
    likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)}k` : likeCount;

  const handleCaptionClick = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative mx-4 flex items-center justify-center">
      <img
        src={post.image}
        alt={post.description}
        className="rounded-lg m-4 w-full h-full"
      />
      <div className="absolute top-8 right-4 p-2 bg-black bg-opacity-50 rounded-full cursor-pointer">
        <div className="flex items-center justify-center gap-2">
          <HeartHandshake
            className={`text-white ${isLiked ? "text-red-500" : ""}`}
            onClick={handleLikeClick}
          />
          <p className="text-white cursor-default">{truncatedLikes} likes</p>
        </div>
      </div>
      <div className="absolute top-8 left-4 p-2 bg-black bg-opacity-50 text-white rounded-full">
        <p>{post.causes}</p>
      </div>
      <div
        className={`absolute bottom-8 py-4 px-4 w-11/12 bg-black bg-opacity-50 text-white ${
          isExpanded ? "rounded-lg bg-opacity-90" : "rounded-full"
        }`}
      >
        <div
          className={`flex gap-4 ${
            isExpanded ? "items-start" : "items-center"
          }`}
        >
          <img src={post.user_image} alt="" className="max-w-10" />
          <p className="cursor-pointer" onClick={handleCaptionClick}>
            {isExpanded ? post.description : truncateCaption(post.description)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
