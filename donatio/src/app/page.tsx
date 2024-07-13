"use client";
import { useEffect, useState } from "react";
import PillButton from "./_components/ui/PillButton";
import Card from "./_components/posts/Card";
import { User } from "@/types/types";
import { getUsers } from "@/gateway/Users/getUsers";

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
    imgSrc: "/mohammad-minhaz-uDG2-d4oUn8-unsplash.jpg",
    theme: "Climate change",
    caption:
      "drip drip rain drip weee treeees treeeestreeees treeeestreeeestreeees",
    likes: 123,
    avatarSrc: "/avatar.png",
  };
  const post2 = {
    imgSrc: "/piermanuele-sberni-m9dyZivCp2A-unsplash.jpg",
    caption: "swoosh goes the volcano swoosh weee lava lava hot floor is lava",
    theme: "Volcanoes",
    likes: 23454,
    avatarSrc: "/author.png",
  };

  const forYouArray = [
    post,
    post2,
    post,
    post2,
    post,
    post2,
    post,
    post2,
    post,
    post2,
    // post,
    // post,
    // post,
    // post,
    // post,
    // post,
    // post,
    // post,
  ];
  const exploreArray = [post, post, post];

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
        {isForYouSelected
          ? forYouArray.map((post, index) => <Card key={index} {...post} />)
          : exploreArray.map((post, index) => <Card key={index} {...post} />)}
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
