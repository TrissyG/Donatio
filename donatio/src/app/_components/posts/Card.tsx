import Image from "next/image";
interface CardProps {
  imgSrc: string;
}

const Card = ({ imgSrc }: CardProps) => {
  return (
    <div className="px-4 pt-8 pb-4 bg-donatio-white rounded-xl m-8 drop-shadow-xl">
      <div className="flex flex-col justify-center items-center border-b-2">
        <Image
          src={imgSrc}
          alt={""}
          width={200}
          height={100}
          className="rounded-lg mb-4"
        />
        <p className="mb-2">
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum{" "}
        </p>
      </div>
      <div className="my-2 flex items-center justify-between">
        <div>
          <Image src={"/avatar.png"} height={50} width={50} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>regular_doner24</p>
          <p className="text-zinc-600">27 minutes ago</p>
        </div>
        <div>
          23.6k <span className="text-red-600">♥</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
