"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUsers } from "@/gateway/Users/getUsers";
import { User } from "@/types/types";

interface StatusBarProps {}

const StatusBar = ({}: StatusBarProps) => {
  const onCreate = () => {};
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const users = await getUsers();
        setUser(users!);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  return (
    <nav className="my-4 px-10">
      <div className="flex items-center justify-between rounded-xl">
        <div>Donut {user[0].donuts}</div>
        <div>Logo</div>
        <Link href={"/create"}>
          <Button
            onClick={() => onCreate}
            className="text-black flex flex-row gap-2 cursor-pointer px-4 py-2 bg-donatio-green rounded-full shadow-md font-bold"
          >
            <p>Create</p>
            <Image src={"/challenge.svg"} alt="next" width={20} height={20} />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default StatusBar;
