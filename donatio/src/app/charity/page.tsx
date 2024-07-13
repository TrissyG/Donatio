import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  const charities = [
    {
      name: "The Nature Conservancy",
      description:
        "Protects natural habitats and promotes sustainable practices to combat climate change and support food security.",
      imageUrl: "/nature.jpg",
    },
    {
      name: "World Food Programme",
      description:
        "Provides food assistance in emergencies and works to improve nutrition and build resilience in vulnerable communities.",
      imageUrl: "/nature2.jpg",
    },
    {
      name: "Environmental Defense Fund",
      description:
        "Addresses climate change through science, economics, and law to create sustainable environmental solutions.",
      imageUrl: "/nature3.jpg",
    },
    {
      name: "Action Against Hunger",
      description:
        "Fights global hunger by providing nutrition, food security, and water sanitation in crisis-affected areas.",
      imageUrl: "/nature4.jpg",
    },
  ];

  const causeTabs = ["All", "Climate Change", "Poverty", "Poor Education"];

  return (
    <div className="mx-6">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Explore Charities
      </h1>

      <div
        className={`flex gap-4 items-center pl-4 overflow-x-hidden mt-6 mb-4`}
      >
        {causeTabs.map((cause, index) => (
          <div
            key={index}
            className={`${
              cause == "All" ? "px-6  bg-opacity-40" : "px-3 bg-opacity-0"
            } py-2 cursor-pointer transition-all duration-300 hover:bg-opacity-20 bg-donatio-green rounded-full border-2 border-opacity-70 border-donatio-green text-nowrap`}
          >
            {cause}
          </div>
        ))}
      </div>
      <div className="flex justiy-center items-center flex-col gap-6 text-center max-h-[570px] overflow-y-auto no-scrollbar ">
        {charities.map((charity, index) => (
          <div
            key={index}
            className="relative shadow-lg border-[2px] rounded-2xl  h-[300px] py-20 flex justify-center items-center gap-2 flex-col px-6"
          >
            <img
              src={charity.imageUrl}
              alt={charity.imageUrl}
              className="rounded-lg m-4 w-full h-full absolute -z-10"
            />
            <div className="rounded-lg m-4 w-full h-full absolute -z-[9] bg-donatio-cream bg-opacity-75" />
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
