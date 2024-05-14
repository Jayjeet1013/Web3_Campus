import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"

import { techData } from "@/data/TechData";

function Card(tech: any) {
  const { title, sub_title, logo_url, link } = tech;

  return (
    <div className="border-2 rounded-lg md:w-[300px] hover border-dark py-8 px-3">
      <Link href={link} target="_blank">
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
        <div className="  text-center">
          <h3 className="h3 mb-2 pb-4">Learn technology which matters !</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center  ">
          {techData.slice(0, 8).map((tech, index) => {
            return (
              <div  key={index + 1} className="p-2   py-4 ">
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
        <Link href="/learn/#tech">
          <p className="text-center my-3 cursor-pointer animate-bounce w-max mx-auto">
            🎢Learn More 👉...
          </p>
        </Link>
      </div>
    </div>
  );
}
