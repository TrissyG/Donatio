"use client";
import { useEffect, useState } from "react";
import PillButton from "./_components/ui/PillButton";

import Card from "./_components/posts/Card";
import { getEmily } from "@/gateway/getEmily";


export default function Home() {
  const [isForYouSelected, setIsForYouSelected] = useState(true);
  const [emily, setEmily] = useState("");

  const handleForYouClick = () => {
    setIsForYouSelected(true);
  };

  const handleExploreClick = () => {
    setIsForYouSelected(false);
  };

  useEffect(() => {
    const getUser = async () => {
      const emily = await getEmily();
      setEmily(emily);
    };
    getUser();
  });

  return (
    <main className="flex-1">
      <div className="flex justify-center items-center gap-16">
        <PillButton
          className={`px-6 py-2 drop-shadow-lg ${
            isForYouSelected
              ? "bg-donatio-green text-white"
              : "outline-donatio-green outline outline-2 text-donatio-green"
          }`}
          onClick={handleForYouClick}
        >
          For You
        </PillButton>
        <PillButton
          className={`px-6 py-2 drop-shadow-lg ${
            !isForYouSelected
              ? "bg-donatio-green text-white"
              : "outline-donatio-green outline outline-2 text-donatio-green"
          }`}
          onClick={handleExploreClick}
        >
          Explore
        </PillButton>
      </div>
      <Card
        imgSrc={"/piermanuele-sberni-m9dyZivCp2A-unsplash.jpg"}
        caption={"Lorem ipsum Lorem ipsum Lorem ipsum"}
        username={"regular_donor24"}
        timePosted={"27"}
        likes={26.4}
      />
      <div>{emily}</div>
    </main>
  );
}
