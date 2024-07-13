import React from "react";
import { AnimatedStandingHoratio } from "../_components/animation/standingHoratio/AnimatedStandingHoratio";

export default function page() {
  return (
    <div className="mx-6">
      <h1 className="text-2xl font-semibold mb-3 ">Horatio AI</h1>
      <AnimatedStandingHoratio scale={0} />
    </div>
  );
}
