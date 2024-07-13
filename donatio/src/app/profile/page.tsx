import Image from "next/image";
import React from "react";
import Card from "../_components/posts/Card";

export default function Page() {
  const post = {
    imgSrc: "/mohammad-minhaz-uDG2-d4oUn8-unsplash.jpg",
    theme: "Climate change",
    caption:
      "drip drip rain drip weee treeees treeeestreeees treeeestreeeestreeees",
    likes: 123,
    avatarSrc: "/avatar.png",
  };

  const forYouArray = [post, post, post, post];

  return (
    <div className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
      <div className="flex justify-center items-center flex-col gap-8">
        <div
          className="justify-center flex items-center gap-2 flex-col
        "
        >
          <Image src="/avatar.png" alt="" width={100} height={100} />
          <p className="text-lg font-semibold">regular_donor24</p>
        </div>

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

      <div className="pt-2 max-h-[480px] overflow-y-auto no-scrollbar">
        {forYouArray.map((post, index) => (
          <Card {...post} />
        ))}
      </div>
    </div>
  );
}
