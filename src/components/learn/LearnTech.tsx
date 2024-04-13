import React from "react";

import { techData } from "@/data/TechData"; 
import Link from "next/link";

function Card(tech : any) {
  const {title, sub_title, logo_url, link} = tech

  return (
    <div className="border-2 hover border-dark py-5 px-3 bg-white">
      <Link href={link} target="_blank">
      <img
        className="mb-3 max-h-[50px]"
        src={logo_url}
      />
        
      <h4 className="my-3 h4">{title}</h4>
      <p className="p text-sm line-clamp-4">{sub_title}</p>
      </Link>
    </div>
  );
}

export default function LearnTech() {

  return (
    <div id="tech" className="bg-[#E8EBFF]">
        <div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">Learn tech which matters</h3>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

     
          {techData.map((tech, index) => {
            return (
              <div key={index} className=" p-2">
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
    </div>
  );
}
