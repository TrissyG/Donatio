"use client";

import React, { useState } from "react";
import PillButton from "../_components/ui/PillButton";

export default function Page() {
  const [isForYouSelected, setIsForYouSelected] = useState(true);

  const handleForYouClick = () => {
    setIsForYouSelected(true);
  };

  const handleExploreClick = () => {
    setIsForYouSelected(false);
  };

  return (
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
  );
}
