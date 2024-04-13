import Link from "next/link";
import React from "react";
import { documentaryData } from "@/data/documentary"; 

function Card(props:any) {
  const { banner_url, title, description, link } = props;

  return (
    <div className="border-2 border-dark rounded-md w-[340px]  h-full bg-white">
      <img className=" w-full border-b-2 border-dark rounded-md " src={banner_url} alt="banner" />

      <div className="p-3">
        <h4 className="h4 line-clamp-2">{title}</h4>
        <p className="my-3 p text-sm line-clamp-2 ">{description}</p>

        <a href={link} target="_blank" rel="noreferrer">
          <button className="btn">🎬 Watch Now 🍿</button>
        </a>
      </div>
    </div>
  );
}

export default function Documentaries() {
  return (
    <div className="bg-[#F2FFDA] py-20">
      <div className="text-center  p-4 bg-[#000]">
        <h3 className="h3 text-white">{`Learn while you're board from learning 🍿`}</h3>
      </div>
      <div className="mx-auto flex max-w-7xl px-4 py-9 ">
        <div className="flex flex-wrap gap-6 items-center justify-center ">
          {documentaryData.map((data, index) => {
            return (
              <div key={index+1}  className="">
                <Card
                  banner_url={data.banner_url}
                  title={data.title}
                  description={data.description}
                  link={data.link}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
