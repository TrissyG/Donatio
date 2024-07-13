import Image from "next/image";

interface StatusBarProps {}

const StatusBar = ({}: StatusBarProps) => {
  return (
    <nav className="my-4 px-10">
      <div className="flex items-center justify-between rounded-xl">
        <div>Streak</div>
        <div>Logo</div>
        <div className="flex flex-row gap-2 cursor-pointer px-4 py-2 bg-donatio-green rounded-full shadow-md font-bold">
          <p>Create</p>
          <Image src={"/challenge.svg"} alt="next" width={20} height={20} />
        </div>
      </div>
    </nav>
  );
};

export default StatusBar;
