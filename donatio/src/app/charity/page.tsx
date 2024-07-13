import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  const charities = [
    {
      name: "The Nature Conservancy",
      description:
        "Protects natural habitats and promotes sustainable practices to combat climate change and support food security.",
    },
    {
      name: "World Food Programme",
      description:
        "Provides food assistance in emergencies and works to improve nutrition and build resilience in vulnerable communities.",
    },
    {
      name: "Environmental Defense Fund",
      description:
        "Addresses climate change through science, economics, and law to create sustainable environmental solutions.",
    },
    {
      name: "Action Against Hunger",
      description:
        "Fights global hunger by providing nutrition, food security, and water sanitation in crisis-affected areas.",
    },
  ];

  return (
    <div className="mx-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Explore Charities
      </h1>

      <div className="flex justiy-center items-center flex-col gap-6 text-center max-h-[700px] overflow-y-auto no-scrollbar ">
        {charities.map((charity, index) => (
          <div
            key={index}
            className="shadow-lg border-[2px] rounded-2xl bg-white h-[300px] py-20 flex justify-center items-center gap-2 flex-col px-6"
          >
            <h1 className="text-2xl font-semibold mb-3">{charity.name}</h1>
            <p>{charity.description}</p>
            <Button className="mt-8 rounded-full bg-donatio-green px-10">
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
