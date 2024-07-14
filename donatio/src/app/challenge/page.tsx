"use client";
import { getChallenges } from "@/gateway/Challenges/getChallenges";
import { getUsers } from "@/gateway/Users/getUsers";
import { addDonuts } from "@/gateway/Users/putUsers";
import { Challenge, User } from "@/types/types";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AnimatedDonutHoratio } from "@/app/_components/animation/donutHoratio/AnimatedDonutHoratio";

const dates = [
  {
    day: "WE",
    date: "10",
    streak: "no",
  },
  {
    day: "TH",
    date: "11",
    streak: "yes",
  },
  {
    day: "FR",
    date: "12",
    streak: "no",
  },
  {
    day: "SA",
    date: "13",
    streak: "yes",
  },
  {
    day: "SU",
    date: "14",
    streak: "today",
  },
  {
    day: "MO",
    date: "15",
    streak: "no",
  },
  {
    day: "TU",
    date: "16",
    streak: "yes",
  },
  {
    day: "WE",
    date: "17",
    streak: "no",
  },
  {
    day: "TH",
    date: "18",
    streak: "no",
  },
  {
    day: "FR",
    date: "19",
    streak: "no",
  },
];

export default function Page() {
  const [challenges, setChallenges] = useState<Challenge[] | void>([]);
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dailiesCompleted, setDailiesCompleted] = useState<number>(0);

  const router = useRouter();

  const onClaim = async (a: number, b: number, c: number) => {
    try {
      setLoading(true);
      await addDonuts("1", a, b, c);
      setDailiesCompleted(dailiesCompleted + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getChallenge = async () => {
      try {
        const data = await getChallenges();
        const userData = await getUsers();
        setUser(userData!);
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
                  <p className="text-[17px] text-opacity-60 text-donatio-green">
                    {date.day}
                  </p>
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
                  <p className="text-[17px] text-opacity-50 text-donatio-green ">
                    {date.day}
                  </p>
                  <p className="font-bold py-[5px]">{date.date}</p>
                </div>
              );
          }
        })}
      </div>
      <div className="my-4 mx-6 rounded-2xl h-[300px] flex gap-4 justify-end">
        <div className="pt-24 flex flex-col gap-4">
          <div className="font-semibold">
            Complete you daily challenges with dodo to get donuts.
          </div>
          <div className="relative w-[125px] border-donatio-green border-2 rounded-full h-10 grid place-items-center shadow-md">
            <div className="absolute rounded-full left-0 top-0 bg-donatio-green bg-opacity-20 h-10 w-full" />
            <div
              className={`absolute rounded-full left-0 top-0 bg-donatio-green bg-opacity-70 h-10 w-${
                dailiesCompleted * (100 / 3)
              }%
              }`}
            />
            <p className="text-[14px] font-semibold absolute z-20">
              {dailiesCompleted} / 3
            </p>
          </div>
        </div>

        <Image
          src="/mascot3.svg"
          alt="mascot-standing"
          width={200}
          height={300}
          className="drop-shadow-xl"
        />
      </div>

      <div className="flex flex-col gap-2">
        {challenges?.map((challenge) => {
          return (
            <>
              {challenge.isClaimed ? (
                <div
                  key={challenge.title}
                  className={`${
                    challenge.donut == 80 ? "bg-opacity-50" : " bg-opacity-15"
                  } bg-donatio-green flex items-center justify-between mx-4 px-2 rounded-2xl h-[80px] shadow-lg opacity-30 relative`}
                >
                  <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-donatio-black text-opacity-70 text-xl italic">
                    Claimed
                  </p>
                </div>
              ) : (
                <div
                  key={challenge.title}
                  className={`${
                    challenge.donut == 80 ? "bg-opacity-40" : " bg-opacity-15"
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
                  <div className="flex flex-col gap-[4px] flex-1 items-center">
                    <div className="flex items-center gap-2 ">
                      <Image
                        src="/donut.svg"
                        alt="donuts"
                        width={15}
                        height={15}
                      />
                      <p className="text-[14px] font-bold">{challenge.donut}</p>
                    </div>
                    {challenge.isCompleted ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            onClick={() =>
                              onClaim(
                                challenge.donut,
                                user[0].donuts,
                                user[0].donuts_earned,
                              )
                            }
                            className="px-2 py-1 border-2 border-donatio-green bg-donatio-green flex-shrink-0 w-[50px] rounded-full flex justify-center cursor-pointer transition-all duration-300 hover:opacity-70"
                          >
                            <CheckCircle size={24} />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-donatio-cream">
                          <DialogHeader>
                            <DialogTitle className="text-center text-xl">
                              Donuts Earned!
                            </DialogTitle>
                            <DialogDescription>
                              <div className="flex flex-col gap-4">
                                <div className="h-[300px] pt-[50px] grid place-items-center">
                                  <AnimatedDonutHoratio scale={2.5} />
                                </div>
                                <p>
                                  You have earned{" "}
                                  <strong>{challenge.donut}</strong> donuts.
                                </p>
                                <form>
                                  <Button
                                    onClick={() => router.push("/challenge")}
                                    className="bg-donatio-green"
                                    type="submit"
                                  >
                                    Close
                                  </Button>
                                </form>
                              </div>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <div className="px-2 py-1 border-2 border-donatio-green flex-shrink-0 w-[55px] rounded-full text-center">
                        <p className="text-sm font-bold">0 / 1</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}
