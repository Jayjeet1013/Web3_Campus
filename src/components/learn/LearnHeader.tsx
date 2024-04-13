import React from "react";
import LearnByGame from "./LearnByGame";
import Platforms from "./Platforms";
import LearnByYoutube from "./LearnByYoutube";

export default function LearnHeader() {
  return (
    <div className="bg-[#E7FFFF]  pt-48">
      <div className=" text-center">
        <div className="md:max-w-[60%] pb-28 mx-auto">
        <h1 className="text-[30px] md:text-[70px] font-bold ">🧑‍💻<br/>Learn</h1>
        <p className="text-[24px] ">
          Learn by using these techs
        </p>
        </div>
        <div> 
          <Platforms/>
          <LearnByGame/>
         
          <LearnByYoutube/>
        </div>
      </div>
    </div>
  );
}
