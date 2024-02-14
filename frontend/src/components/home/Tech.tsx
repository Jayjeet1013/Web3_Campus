import Link from "next/link";
import React from "react";

import { techData } from "@/data/TechData";
import { Flex } from "@chakra-ui/react";

const data = {
  logo: "https://d33wubrfki0l68.cloudfront.net/7be340cf7f33d774314208ef5909440b608d87a2/cbe64/static/4f10d2777b2d14759feb01c65b2765f7/b7d3e/eth-glyph-colored.png",
  name: "Ethereum",
  desc: "I use whimsical to create wireframes and user flows.",
};

function Card(tech: any) {
  const { title, sub_title, logo_url, link } = tech;

  return (
    <div className="border-2 w-[300px] hover border-dark py-8 px-3">
      <Link href={link}>
        {" "}
        <img className="mb-3 max-h-[60px]" src={logo_url} alt="logo" />
        <h4 className="my-3 h4">{title}</h4>
        <p className="p text-sm line-clamp-4">{sub_title}</p>
      </Link>
    </div>
  );
}

export default function Technology() {
  return (
    <div className="bg-[#fff]">
      <div className="flex flex-col items-center justify-center px-5 py-20 ">
        <div className="text-center">
          <h3 className="h3 mb-2 pb-4">Learn technology which matters !</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center  ">
          {techData.slice(0, 8).map((tech, index) => {
            return (
              <div key={index + 1} className="p-2  py-4 ">
                <Card
                  title={tech.title}
                  logo_url={tech.logo_url}
                  sub_title={tech.sub_title}
                  link={tech.link}
                />
              </div>
            );
          })}
        </div>

        <Link href="/learn">
          <p className="text-center my-3 cursor-pointer animate-bounce w-max mx-auto">
            🎢Learn More 👉...
          </p>
        </Link>
      </div>
    </div>
  );
}
