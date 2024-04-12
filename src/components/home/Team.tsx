import React from "react";

import { contributorsData } from "@/data/contributors";
import { FaTwitter } from "react-icons/fa";
import { Flex } from "@chakra-ui/react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

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
        className="w-[100px] rounded-md mb-1 border-2 border-dark"
        src={pic}
        alt="profile pic"
      />
      <p className="text-xl font-bold">{name}</p>
      <p className="p text-md opacity-70">{title}</p>

      <div className="flex gap-2 items-center ">
        <a href={twitter} className="mr-2 text-2xl text-gray-600 hover:text-black">
        <BsTwitter/>
        </a>

        <a href={linkedin} className="mr-2 text-2xl text-gray-600 hover:text-black">
         <BsLinkedin/>
        </a>

      
      </div>
    </div>
  );
}

export default function Contributers() {
  return (
    <div className="bg-[#FAFFE9] py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center md:text-start md:text-[40px] text-[24px] ">Our Teams</h1>
        <p className="mb-5 p">
      
        </p>

        <div className="flex md:flex-row md:gap-6 gap-8 flex-col items-center ">
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
