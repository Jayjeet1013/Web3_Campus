import React from "react";

import { contributorsData } from "@/data/contributors";
import { FaTwitter } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";

interface ContributersProp {
pic:string;
name:string;
title:string;
twitter:string;
linkedin:string;
}

function ContributerCard({ pic, name, title,twitter,linkedin }:ContributersProp) {
  return (
    <div>
      <img
        className="w-[100px] mb-1 border-2 border-dark"
        src={pic}
        alt="profile pic"
      />
      <p className="text-xl font-bold">{name}</p>
      <p className="p text-md opacity-70">{title}</p>

      <div>
        <a href={twitter} className="mr-2 text-2xl text-gray-600 hover:text-black">
        twitter
        </a>

        <a href={linkedin} className="mr-2 text-2xl text-gray-600 hover:text-black">
          linkedin
        </a>

      
      </div>
    </div>
  );
}

export default function Contributers() {
  return (
    <div className="bg-[#FAFFE9] py-5">
      <div className="mx-auto max-w-7xl">
        <h1 className="h1">Our Teams</h1>
        <p className="mb-5 p">
      
        </p>

        <div className="flex md:flex-row flex-col items-center ">
          {contributorsData.map((contributor, index) => (
            <ContributerCard
              key={index}
              pic={contributor.profile_url}
              name={contributor.name}
              title={contributor.title}
              linkedin={contributor.linkedin}
              twitter={contributor.twitter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
