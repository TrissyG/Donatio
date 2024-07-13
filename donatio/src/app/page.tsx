"use client";
import { useEffect, useState } from "react";
import PillButton from "./_components/ui/PillButton";
import Card from "./_components/posts/Card";
import { User } from "@/types/types";
import { getUsers } from "@/gateway/Users/getUsers";
import { Divide } from "lucide-react";
import { AnimatedStandingHoratio } from "./_components/animation/AnimatedStandingHoratio";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isForYouSelected, setIsForYouSelected] = useState(true);
  const [users, setUsers] = useState<User[]>();

  const handleForYouClick = () => {
    setIsForYouSelected(true);
  };

  const handleExploreClick = () => {
    setIsForYouSelected(false);
  };

  useEffect(() => {
    const getUser = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    getUser();
  }, []);

  const post = {
    imgSrc: "/piermanuele-sberni-m9dyZivCp2A-unsplash.jpg",
    caption: "Lorem ipsum Lorem ipsum Lorem ipsum",
    username: "regular_donor24",
    timePosted: "27",
    likes: 26.4,
  };

  const forYouArray = [
    post,
    post,
    post,
    post,
    post,
    post,
    post,
    post,
    post,
    post,
  ];

  const causeTabs = ["All", "Climate Change", "Poverty", "Poor Education"];

  const causes = [
    {
      name: "Ukraine Crisis Relief",
      description:
        "The ongoing conflict in Ukraine has led to a humanitarian crisis, with millions of people displaced and in need of food, shelter, and medical assistance",
      imgSrc: "/ukraine.png",
    },
    {
      name: "COVID-19 Pandemic Response",
      description:
        "Efforts to provide vaccines, medical supplies, and support to communities affected by the pandemic, especially in developing countries.",
      imgSrc: "/covid.png",
    },
    {
      name: "Wildfire Relief in Canada",
      description:
        "Severe wildfires have devastated large areas, displacing residents and destroying homes and habitats.",
      imgSrc: "/wildfire.png",
    },
    {
      name: "Hunger Crisis in the Horn of Africa",
      description:
        "Prolonged drought and conflict have led to severe food shortages in countries like Somalia, Ethiopia, and Kenya.",
      imgSrc: "/hunger.png",
    },
  ];

  return (
    <main className="flex-1">
      <div className="flex justify-center items-center gap-16 border-b-[1px] border-opacity-20 border-black pb-6">
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
      <div className=" max-h-[650px] overflow-y-auto no-scrollbar">
        {isForYouSelected ? (
          forYouArray.map((post, index) => <Card key={index} {...post} />)
        ) : (
          <div className="px-6 mt-2">
            <h1 className="text-2xl font-semibold mb-3 text-center">
              Horatio AI
            </h1>
            <div className="flex gap-6">
              <AnimatedStandingHoratio />
              <div className="w-[260px] bg-white h-[300px] shadow-lg rounded-xl relative">
                <div className="absolute bottom-2 right-[5px]">
                  <input
                    className="w-[234px] h-[40px] border-2 border-donatio-green rounded-full px-4"
                    type="text"
                    placeholder="hello"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4 items-center pl-4 overflow-x-hidden mt-6">
          {causeTabs.map((cause, index) => (
            <div
              key={index}
              className={`${
                cause == "All" ? "px-6 bg-donatio-green bg-opacity-40" : "px-3"
              } py-2 rounded-full border-2 border-opacity-70 border-donatio-green text-nowrap`}
            >
              {cause}
            </div>
          ))}
        </div>

        <div className="flex flex-col overflow-y-auto gap-4 mt-6 px-4 mb-4 no-scrollbar">
          {causes.map((cause, index) => (
            <div
              key={index}
              className="w-full h-[155px] py-3 px-4 rounded-2xl bg-white shadow-lg flex gap-4 relative"
            >
              <div>
                <Image
                  src="/piermanuele-sberni-m9dyZivCp2A-unsplash.jpg"
                  alt={cause.imgSrc}
                  width={85}
                  height={100}
                  className="rounded-lg shrink-0 w-[325px] h-[130px] object-cover"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div>
                <h2 className="font-semibold">{cause.name}</h2>
                <p className="text-[12px]">{cause.description}</p>
                <button className="text-[12px] px-3 py-1 absolute bottom-2 right-2 text-donatio-green font-semibold">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        {users?.map((user, index) => (
          <div key={index}>
            <p>Causes:</p>
            <ul>
              {user.causes?.map((cause, causeIndex) => (
                <li key={causeIndex}>{cause}</li>
              ))}
            </ul>
            <p>Donut Balance: {user.donuts}</p>
            <p>Donut Earned: {user.donuts_earned}</p>
            <p>Donut Given: {user.donut_given}</p>
          </div>
        ))}
      </div> */}
    </main>
  );
}
