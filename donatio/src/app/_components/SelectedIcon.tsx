import React from "react";

export default function SelectedIcon({ name }: { name: string }) {
  return (
    <div className="w-[150px] h-[45px] bg-donatio-green rounded-full grid place-items-center">
      <p className="text-black text-[16px] font-bold capitalize">+ {name}</p>
    </div>
  );
}
