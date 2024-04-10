import React from "react";
import { ProjectData } from "@/data/projects"; 

function Card(props:any) {
  const { banner_url, title, description, link, tech_stack } = props;

  return (
    <div className="border-2 border-dark  h-full bg-white">
      <img className="w-full border-b-2 border-dark" src={banner_url} />

      <div className="p-3">
        <h4 className="h4 line-clamp-2">{title}</h4>
        <div className="flex flex-wrap ">
        {tech_stack.map((tech:any, index:any) => {
          return <div className="bg-[#fff] px-2 py-1 text-xs border border-dark flex m-1" key={index}>⚡️{tech}</div>;
        })}
        </div>
        <p className="my-3 p text-sm line-clamp-2 ">{description}</p>

        <a href={link} target="_blank" rel="noreferrer">
          <button className="btn">Build NOW 🚀</button>
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="bg-[#FEFBED]">
      <div className="text-center p-4  bg-[#000]">
        <h3 className="h3 text-white">Learning by Building</h3>
      </div>
      <div className="mx-auto max-w-7xl px-4 ">
        <div>
          {ProjectData.map((data, index) => {
            return (
              <div key={index} className="p-2">
                <Card
                  banner_url={data.banner_url}
                  title={data.title}
                  tech_stack={data.tech_stack}
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
