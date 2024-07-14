import {Button} from "@/components/ui/button";
import {ChevronLeft, ChevronRight} from "lucide-react";
import Link from "next/link";
import React from "react";
import {AnimatedArtistHoratio} from "@/app/_components/animation/artistHoratio/AnimatedArtistHoratio";

export default function page() {
  return (
    <div className="px-6 overflow-y-auto no-scrollbar max-h-[700px]">
      <div className='pl-10'>
        <AnimatedArtistHoratio scale={2}/>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mt-4 mb-2">
          The Nature Conservancy
        </h1>
        <p>
          The Nature Conservancy (TNC) is a leading environmental organization
          dedicated to conserving the lands and waters on which all life
          depends. With a presence in 79 countries and territories, TNC tackles
          climate change, protects vital habitats, provides food and water
          sustainably, and helps make cities more resilient. <br /> <br />
          Their science-based approach and collaborative efforts aim to create
          lasting solutions for nature and people.
        </p>
      </div>

      <div className="mt-12">
        <ol className="flex flex-col gap-4 list-decimal list-inside">
          <li>
            <strong>Climate Action</strong> - TNC mitigates climate change by
            protecting forests, promoting reforestation, and supporting
            sustainable land use.
          </li>
          <li>
            <strong>Zero Hunger</strong> - TNC promotes sustainable agriculture
            to increase food security and protect the environment.
          </li>
          <li>
            <strong>Clean Water and Sanitation</strong> - TNC ensures
            sustainable water management by protecting watersheds and reducing
            water pollution.
          </li>
        </ol>
      </div>

      <div className="flex justify-between items-center ">
        <Link href="/explore">
          <Button className="rounded-full">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>

        <Link href="/donate">
          <Button className="my-6 rounded-full px-6 bg-donatio-green self-end mr-4">
            Donate <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
