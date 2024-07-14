"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getUsers } from "@/gateway/Users/getUsers";
import { User } from "@/types/types";
import { PlusSquare } from "lucide-react";

interface StatusBarProps {}

const StatusBar = ({}: StatusBarProps) => {
  const onCreate = () => {};
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        const users = await getUsers();
        setUser(users!);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <nav className="my-4 px-6">
      <div className="flex items-center justify-between rounded-xl">
        <div className="flex items-center gap-2 px-4 font-semibold">
          <Image
            src="/donut.svg"
            alt="logo"
            width={20}
            height={20}
            className=""
          />{" "}
          {loading ? "" : user[0].donuts}
        </div>
        <Image src="/logo.svg" alt="logo" width={100} height={30} />
        <Link href={"/create"}>
          <Button
            onClick={() => onCreate}
            className="text-white flex flex-row gap-2 cursor-pointer px-4 py-2 bg-donatio-green rounded-full shadow-md font-bold"
          >
            <p className="tracking-wider">CREATE</p>
            <PlusSquare size={20} className="text-white" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default StatusBar;
