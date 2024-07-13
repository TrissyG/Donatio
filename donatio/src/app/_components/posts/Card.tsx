"use client";
import React, {useState} from "react";
import Image from "next/image";
import {HeartHandshake} from "lucide-react";
import {Post} from "@/types/types";

interface CardProps {
  post: Post;
}

const Card = ({ post }: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);

  const truncateCaption = (desc: string) =>
    desc.length > 30 ? `${desc.substring(0, 30)}...` : desc;

 function handleLikeClick() {
   setIsLiked(!isLiked);
   setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
 }

 const truncatedLikes =
   likeCount >= 1000 ? `${(likeCount / 1000).toFixed(1)}k` : likeCount;

 const handleCaptionClick = () => {
   setIsExpanded((prev) => !prev);
 };

 return (
   <div className="relative mx-4 flex items-center justify-center">
     <Image
       src={post.image}
       width={350}
       height={300}
       alt={post.description}
       className="rounded-lg mx-2 my-4 w-full h-full"
     />
     <div className="absolute top-8 right-4 py-2 px-4 bg-black bg-opacity-50 rounded-lg cursor-pointer">
       <div className="flex items-center justify-center gap-2">
         <HeartHandshake
           className={`${isLiked ? "text-red-500" : "text-white"}`}
           onClick={handleLikeClick}
         />
         <p className="text-white cursor-default">{truncatedLikes} {truncatedLikes === 1 ? 'like' : 'likes'}</p>
       </div>
     </div>
     {post.causes && (
       <div className="absolute top-8 left-4 max-w-[190px] py-2 px-4 bg-black bg-opacity-50 text-white rounded-lg">
         <p>{post.causes}</p>
       </div>
     )}
     <div
       className={`absolute bottom-8 py-4 px-4 w-11/12 bg-black bg-opacity-50 text-white ${
         isExpanded ? "rounded-lg bg-opacity-90" : "rounded-lg"
       }`}
     >
       <div
         className={`flex gap-4 ${isExpanded ? "items-start" : "items-center"}`}
       >
         <Image
           src={post.user_image}
           alt=""
           width={350}
           height={300}
           className="max-w-10 rounded-full"
         />
         <p className="cursor-pointer" onClick={handleCaptionClick}>
           {isExpanded ? post.description : truncateCaption(post.description)}
         </p>
       </div>
     </div>
   </div>
 );
};

export default Card;
