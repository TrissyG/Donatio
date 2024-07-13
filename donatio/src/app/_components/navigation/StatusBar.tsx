"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface StatusBarProps {}

const StatusBar = ({}: StatusBarProps) => {
  const onCreate = () => {};

  return (
    <nav className="my-4 px-10">
      <div className="flex items-center justify-between rounded-xl">
        <div>Streak</div>
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
