"use client";
import { getChallenges } from "@/gateway/Challenges/getChallenges";
import { Challenge } from "@/types/types";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const dates = [
  {
    day: "TU",
    date: "11",
    streak: "no",
  },
  {
    day: "WE",
    date: "12",
    streak: "yes",
  },
  {
    day: "TH",
    date: "13",
    streak: "no",
  },
  {
    day: "FR",
    date: "14",
    streak: "yes",
  },
  {
    day: "SA",
    date: "15",
    streak: "yes",
  },
  {
    day: "SU",
    date: "16",
    streak: "no",
  },
  {
    day: "MO",
    date: "17",
    streak: "today",
  },
  {
    day: "TU",
    date: "18",
    streak: "no",
  },
  {
    day: "WE",
    date: "19",
    streak: "no",
  },
  {
    day: "TH",
    date: "20",
    streak: "no",
  },
];

// const challenges = [
//   {
//     id: 1,
//     name: "Challenge 1",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     icon: "/challenge.svg",
//     donuts: 50,
//   },

//   {
//     id: 2,
//     name: "Challenge 2",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     icon: "/challenge.svg",
//     donuts: 50,
//   },

//   {
//     id: 3,
//     name: "Challenge 3",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     icon: "/challenge.svg",
//     donuts: 50,
//   },
// ];

export default function page() {
  const [challenges, setChallenges] = useState<Challenge[] | void>([]);

  useEffect(() => {
    const getChallenge = async () => {
      try {
        const data = await getChallenges();
        setChallenges(data);
      } catch (error) {
        console.log(error);
      }
    };

    getChallenge();
  }, []);

  return (
    <div>
      <h1 className="text-2xl px-4">
        Hey, <strong>Naren !</strong>
      </h1>
      <div className="flex justify-center items-center gap-[6px]">
        {dates.map((date) => {
          switch (date.streak) {
            case "yes":
              return (
                <div
                  key={date.date}
                  className="flex items-center justify-center flex-col"
                >
                  <p className="text-[17px] text-opacity-60">{date.day}</p>
                  <p className="font-bold px-2 py-[5px] bg-donatio-green bg-opacity-15 rounded-full">
                    {date.date}
                  </p>
                </div>
              );
            case "today":
              return (
                <div
                  key={date.date}
                  className="flex items-center justify-center flex-col p-2 text-white bg-donatio-black rounded-full"
                >
                  <p className="text-[17px] text-opacity-60">{date.day}</p>
                  <p className="font-bold py-[5px]">{date.date}</p>
                </div>
              );
            default:
              return (
                <div
                  key={date.date}
                  className="flex items-center justify-center flex-col p-2"
                >
                  <p className="text-[17px] text-opacity-50 ">{date.day}</p>
                  <p className="font-bold py-[5px]">{date.date}</p>
                </div>
              );
          }
        })}
      </div>
      <div className="my-4 mx-4 bg-white rounded-2xl h-[300px] shadow-lg" />

      <div className="flex flex-col gap-2">
        {challenges?.map((challenge) => {
          return (
            <div
              key={challenge.title}
              className={`${
                challenge.donut == 80 ? "bg-opacity-50" : " bg-opacity-15"
              } bg-donatio-green flex items-center justify-between mx-4 px-2 rounded-2xl h-[80px] shadow-lg`}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/challenge-dark.svg"
                  alt="challenge"
                  width={28}
                  height={28}
                />
                <div className="flex justify-between items-center px-8 py-2">
                  <div>
                    <p className=" font-bold">{challenge.title}</p>
                    <p className="text-[12px] font-normal">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[2px] flex-1">
                <div className="flex items-center gap-2">
                  <Image
                    src="/challenge-dark.svg"
                    alt="challenge"
                    width={20}
                    height={20}
                  />
                  <p>{challenge.donut}</p>
                </div>
                {challenge.isCompleted ? (
                  <div className="px-2 py-1 border-2 border-donatio-green bg-donatio-green flex-shrink-0 w-[50px] rounded-full flex justify-center">
                    <CheckCircle size={24} />
                  </div>
                ) : (
                  <div className="px-2 py-1 border-2 border-donatio-green flex-shrink-0 w-[50px] rounded-full">
                    <p className="text-sm font-bold">0 / 1</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
