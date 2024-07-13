import Image from "next/image";
interface CardProps {
  caption: string;
  imgSrc: string;
  username: string;
  timePosted: string;
  likes: number;
}

const Card = ({ imgSrc, username, timePosted, likes, caption }: CardProps) => {
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
        <p className="mb-2">{caption}</p>
      </div>
      <div className="my-2 flex items-center justify-between">
        <div>
          <Image src={"/avatar.png"} height={50} width={50} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>{username}</p>
          <p className="text-zinc-600">{timePosted} minutes ago</p>
        </div>
        <div>
          {likes}k <span className="text-red-600">♥</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
