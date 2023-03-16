import Image from "next/image";
import React from "react";
import Medium from "../assets/Medium.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center bg-yellow-400 border-y px-10 py-10">
      <div className="px-10, space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span
            className="underline decoration-black decoration-4
            "
          >
            Medium
          </span>{" "}
          is a place to write, read and connect
        </h1>
        <h2>
          It's free and easy to post what you're thinking related to any topic
          and content with millions of readers
        </h2>
      </div>
      <Image
        className="hidden md:inline-flex h-50 lg:h-full"
        src={Medium}
        alt="M"
      />
    </div>
  );
};

export default Banner;
