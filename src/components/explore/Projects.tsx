import React from "react";
import { ProjectData } from "@/data/projects";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

function Card(props: any) {
  const { banner_url, title, description, link, tech_stack } = props;

  return (
    <CardContainer className="inter-var ">
      <div className="border-2 rounded-md border-dark w-[340px] h-full bg-white">
        <CardItem translateZ="60" rotateX={0} rotateZ={-5}>
          <img
            className="w-full rounded-md border-b-2 border-dark"
            src={banner_url}
          />
        </CardItem>
        <div className="p-3">
          <CardItem translateZ="60">
            <h4 className="h4 line-clamp-2">{title}</h4>
          </CardItem>
          <div className="flex flex-wrap ">
            {tech_stack.map((tech: any, index: any) => {
              return (
                <div
                  className="bg-[#fff] px-2 py-1 text-xs border border-dark flex m-1"
                  key={index}
                >
                  ⚡️{tech}
                </div>
              );
            })}
          </div>
          <p className="my-3 p text-sm line-clamp-2 ">{description}</p>

          <a href={link} target="_blank" rel="noreferrer">
            <button className="btn">Build NOW 🚀</button>
          </a>
        </div>
      </div>
    </CardContainer>
  );
}

export default function Projects() {
  return (
    <div className="bg-[#FEFBED] py-20  ">
      <div className="text-center p-4  bg-[#000] ">
        <h3 className="h3 text-white">Learning by Building Projects</h3>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-9 ">
        <div className="gap-6 flex flex-wrap items-center justify-center ">
          {ProjectData.map((data, index) => {
            return (
              <div key={index} className="">
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
