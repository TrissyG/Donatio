"use client";
import {useEffect, useState} from "react";
import PillButton from "./_components/ui/PillButton";
import Card from "./_components/posts/Card";
import {Message, User} from "@/types/types";
import {getUsers} from "@/gateway/Users/getUsers";
import {AnimatedStandingHoratio} from "./_components/animation/standingHoratio/AnimatedStandingHoratio";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Home() {
  const [isForYouSelected, setIsForYouSelected] = useState(true);
  const [users, setUsers] = useState<User[]>();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleForYouClick = () => {
    setIsForYouSelected(true);
  };

  const handleExploreClick = () => {
    setIsForYouSelected(false);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: `Horatio recommends The Nature Conservancy!`,
            sender: "horatio",
          },
        ]);
      }, 1000);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    getUser();
  }, []);

  const post = {
    imgSrc: "/mohammad-minhaz-uDG2-d4oUn8-unsplash.jpg",
    theme: "Climate change",
    caption:
      "drip drip rain drip weee treeees treeeestreeees treeeestreeeestreeees",
    likes: 123,
    avatarSrc: "/avatar.png",
  };
  const post2 = {
    imgSrc: "/piermanuele-sberni-m9dyZivCp2A-unsplash.jpg",
    caption: "swoosh goes the volcano swoosh weee lava lava hot floor is lava",
    theme: "Volcanoes",
    likes: 23454,
    avatarSrc: "/mascot1.svg",
  };

  const forYouArray = [
    post,
    post2,
    post,
    post2,
    post,
    post2,
    post,
    post2,
    post,
    post2,
    // post,
    // post,
    // post,
    // post,
    // post,
    // post,
    // post,
    // post,
  ];

  const causeTabs = ["All", "Climate Change", "Poverty", "Poor Education"];

  const causes = [
    {
      name: "Ukraine Crisis Relief",
      description:
        "The ongoing conflict in Ukraine has led to a humanitarian crisis, with millions of people displaced and in need of food, shelter, and medical assistance",
      imgSrc: "/ukraine.png",
    },
    {
      name: "COVID-19 Pandemic Response",
      description:
        "Efforts to provide vaccines, medical supplies, and support to communities affected by the pandemic, especially in developing countries.",
      imgSrc: "/covid.png",
    },
    {
      name: "Wildfire Relief in Canada",
      description:
        "Severe wildfires have devastated large areas, displacing residents and destroying homes and habitats.",
      imgSrc: "/wildfire.png",
    },
    {
      name: "Hunger Crisis in the Horn of Africa",
      description:
        "Prolonged drought and conflict have led to severe food shortages in countries like Somalia, Ethiopia, and Kenya.",
      imgSrc: "/hunger.png",
    },
  ];

  return (
    <main className="flex-1">
      <div className="flex justify-center items-center gap-16 border-b-[1px] border-opacity-20 border-black pb-6">
        <PillButton
          className={`px-6 py-2 drop-shadow-lg ${
            isForYouSelected
              ? "bg-donatio-green text-white"
              : "outline-donatio-green outline outline-2 text-donatio-green"
          }`}
          onClick={handleForYouClick}
        >
          For You
        </PillButton>
        <PillButton
          className={`px-6 py-2 drop-shadow-lg ${
            !isForYouSelected
              ? "bg-donatio-green text-white"
              : "outline-donatio-green outline outline-2 text-donatio-green"
          }`}
          onClick={handleExploreClick}
        >
          Explore
        </PillButton>
      </div>
      <div className="max-h-[650px] overflow-y-auto no-scrollbar">
        {isForYouSelected ? (
          forYouArray.map((post, index) => <Card key={index} {...post} />)
        ) : (
          <div className="px-4 mt-2">
            <h1 className="text-2xl font-semibold mb-3 text-center">
              Horatio AI
            </h1>
            <div className="flex gap-3">
              <div className="">
                <AnimatedStandingHoratio scale={0.7} />
              </div>

              <div className="w-[700px] bg-white h-[300px] shadow-lg rounded-xl relative text-[12px]">
                <div className="absolute bottom-2 right-[5px]">
                  <div className="mb-14">
                    <div
                      className={`p-2 m-2 rounded-lg bg-gray-300 text-black`}
                    >
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter.typeString("I am Horatio AI!").start();
                        }}
                      />
                    </div>
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message.sender === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`p-2 m-2 rounded-lg ${
                            message.sender === "user"
                              ? "bg-donatio-green text-white"
                              : "bg-gray-300 text-black"
                          }`}
                        >
                          {message.sender === "horatio" ? (
                            <Typewriter
                              onInit={(typewriter) => {
                                typewriter.typeString(message.text).start();
                              }}
                            />
                          ) : (
                            message.text
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-2 right-[0px] flex items-center">
                    <input
                      className="w-[200px] h-[40px] border-2 border-donatio-green rounded-full px-4"
                      type="text"
                      placeholder="Type a message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                    />
                    <button
                      onClick={handleSendMessage}
                      className="ml-2 px-4 py-2 bg-donatio-green text-white rounded-full"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div
          className={`flex gap-4 items-center pl-4 overflow-x-hidden mt-6 ${
            isForYouSelected ? "hidden" : ""
          }`}
        >
          {causeTabs.map((cause, index) => (
            <div
              key={index}
              className={`${
                cause == "All" ? "px-6  bg-opacity-40" : "px-3 bg-opacity-0"
              } py-2 cursor-pointer transition-all duration-300 hover:bg-opacity-20 bg-donatio-green rounded-full border-2 border-opacity-70 border-donatio-green text-nowrap`}
            >
              {cause}
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col overflow-y-auto gap-4 mt-6 px-4 mb-4 no-scrollbar ${
            isForYouSelected ? "hidden" : ""
          }`}
        >
          {causes.map((cause, index) => (
            <div
              key={index}
              className="w-full h-[155px] py-3 px-4 rounded-2xl bg-white shadow-lg flex gap-4 relative"
            >
              <div>
                <Image
                  src="/piermanuele-sberni-m9dyZivCp2A-unsplash.jpg"
                  alt={cause.imgSrc}
                  width={85}
                  height={100}
                  className="rounded-lg shrink-0 w-[325px] h-[130px] object-cover"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div>
                <h2 className="font-semibold">{cause.name}</h2>
                <p className="text-[12px]">{cause.description}</p>
                <button className="text-[12px] px-3 py-1 absolute bottom-2 right-2 text-donatio-green font-semibold">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
