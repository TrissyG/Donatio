"use client";
import { useEffect, useState } from "react";
import PillButton from "./_components/ui/PillButton";
import Card from "./_components/posts/Card";
import { User } from "@/types/types";
import { getUsers } from "@/gateway/Users/getUsers";
import { Divide } from "lucide-react";
import { AnimatedStandingHoratio } from "./_components/animation/AnimatedStandingHoratio";

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

  const causeTabs = ["Climate Change", "Poverty", "Poor Education"];

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

        <div>
          {causeTabs.map((cause, index) => (
            <div key={index} className="flex gap-2 items-center">
              <p>{cause}</p>
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
