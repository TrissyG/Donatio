import Image from "next/image";
import React from "react";

export default function Page() {

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
      </div>
    </div>
  );
}
