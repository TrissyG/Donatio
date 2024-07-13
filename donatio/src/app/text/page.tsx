"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const Page = () => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello World!")
          .callFunction(() => {
            console.log("String typed out!");
          })
          .start();
      }}
    />
  );
};

export default Page;
