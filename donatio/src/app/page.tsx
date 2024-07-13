"use client";
import { useEffect, useState } from "react";
import PillButton from "./_components/ui/PillButton";
import Card from "./_components/posts/Card";
import { Message, User } from "@/types/types";
import { getUsers } from "@/gateway/Users/getUsers";
import { AnimatedStandingHoratio } from "./_components/animation/AnimatedStandingHoratio";
import Typewriter from "typewriter-effect";

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
          { text: "This is a response from Horatio AI!", sender: "horatio" },
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
    imgSrc: "/piermanuele-sberni-m9dyZivCp2A-unsplash.jpg",
    caption: "Lorem ipsum Lorem ipsum Lorem ipsum",
    username: "regular_donor24",
    timePosted: "27",
    likes: 26.4,
  };

  const forYouArray = [
    post,
    post,
    post,
    post,
    post,
    post,
    post,
    post,
    post,
    post,
  ];

  const causeTabs = ["Climate Change", "Poverty", "Poor Education"];

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
          <div className="px-6 mt-2">
            <h1 className="text-2xl font-semibold mb-3 text-center">
              Horatio AI
            </h1>
            <div className="flex gap-6">
              <AnimatedStandingHoratio />
              <div className="w-[700px] bg-white h-[300px] shadow-lg rounded-xl relative">
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

        <div>
          {causeTabs.map((cause, index) => (
            <div key={index} className="flex gap-2 items-center">
              <p>{cause}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
