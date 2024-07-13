"use client";
import { useState } from "react";
import PillButton from "./_components/ui/PillButton";
import Navbar from "./_components/Navbar";
import Card from "./_components/posts/Card";

export default function Home() {
  const [isForYouSelected, setIsForYouSelected] = useState(true);

  const handleForYouClick = () => {
    setIsForYouSelected(true);
  };

  const handleExploreClick = () => {
    setIsForYouSelected(false);
  };

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
    </main>
  );
}
