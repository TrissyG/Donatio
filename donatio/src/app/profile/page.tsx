import Image from "next/image";
import React from "react";
import Card from "../_components/posts/Card";

export default function page() {
  const post = {
    imgSrc: "/piermanuele-sberni-m9dyZivCp2A-unsplash.jpg",
    caption: "Lorem ipsum Lorem ipsum Lorem ipsum",
    username: "regular_donor24",
    timePosted: "27",
    likes: 26.4,
  };

  const forYouArray = [post, post, post, post];

  return (
    <div className="">
      <div className="flex justify-center items-center flex-col gap-8">
        <Image src="/avatar.png" alt="" width={100} height={100} />
        <div className="flex items-center justify-around gap-12 font-semibold">
          <div className="flex flex-col items-center justify-center">
            <div>199</div>
            <div>Followers</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>173</div>
            <div>Followed</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div>12</div>
            <div>Topics</div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-opacity-20 border-black mt-6" />

      <div className="pt-2 max-h-[505px] overflow-y-auto no-scrollbar">
        {forYouArray.map((post) => (
          <Card
            imgSrc={post.imgSrc}
            caption={post.caption}
            username={post.username}
            timePosted={post.timePosted}
            likes={post.likes}
          />
        ))}
      </div>
    </div>
  );
}
