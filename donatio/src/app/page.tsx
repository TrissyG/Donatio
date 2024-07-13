"use client";
import { useEffect, useState } from "react";
import PillButton from "./_components/ui/PillButton";
import Navbar from "./_components/Navbar";
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
      <div>{emily}</div>
    </main>
  );
}
