"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface StatusBarProps {}

const StatusBar = ({}: StatusBarProps) => {
  const onCreate = () => {};

  return (
    <nav className="my-4 px-10">
      <div className="flex items-center justify-between rounded-xl">
        <div>Streak</div>
        <div>Logo</div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={() => onCreate}
              className="text-black flex flex-row gap-2 cursor-pointer px-4 py-2 bg-donatio-green rounded-full shadow-md font-bold"
            >
              <p>Create</p>
              <Image src={"/challenge.svg"} alt="next" width={20} height={20} />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default StatusBar;
