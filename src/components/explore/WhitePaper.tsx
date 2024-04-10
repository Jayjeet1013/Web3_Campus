import Link from "next/link";
import React from "react";
import { whitepaperData } from "@/data/whitepaperData"; 
import { Flex } from "@chakra-ui/react";

function Card(props : any) {
  const { logo_url, title, sub_title, writer, link } = props;

  return (
    <Link href={link} target="_blank">
      <div className="border-2 border-dark py-5 px-3 hover h-full bg-white">
        <img
          className="mb-3 max-h-[50px]"
          src={logo_url}
        />

        <h4 className="my-3 h4">{title}</h4>
        <p className="p text-sm">
          {sub_title}
        </p>
        <p className="p mt-3 text-xs">✍️ {writer}</p>
      </div>
    </Link>
  );
}

function Whitepapers() {

  return (
    <div className="bg-[#DCF7FF]">
      <div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">Whitepaper is the best book 📖</h3>
      </div>
      <div className="mx-auto max-w-7xl px-4 ">
        <div className="flex flex-wrap ">
          {whitepaperData.map((data, index) => {
            return (
              <div key={index} className="p-2">
                <Card
                  logo_url={data.logo_url}
                  title={data.title}
                  sub_title={data.sub_title}
                  writer={data.writer}
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

export default Whitepapers;
