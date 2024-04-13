import React from "react";
import LearnByGame from "./LearnByGame";
import Platforms from "./Platforms";
import LearnByYoutube from "./LearnByYoutube";

export default function LearnHeader() {
  return (
    <div className="bg-[#E7FFFF]  pt-44">
      <div className=" text-center">
        <div className="md:max-w-[60%] pb-24 mx-auto">
        <h1 className="text-[30px] md:heading ">🧑‍💻<br/>Learn</h1>
        <p className="text-[24px] ">
          Learn by using these techs
        </p>
        </div>
        <div>
          <LearnByGame/>
          <Platforms/>
          <LearnByYoutube/>
        </div>
      </div>
    </div>
  );
}
