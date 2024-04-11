import React from "react";
import LearnByGame from "./LearnByGame";

export default function LearnHeader() {
  return (
    <div className="bg-[#E7FFFF]">
      <div className="section text-center">
        <div className="max-w-[60%] mx-auto">
        <h1 className="heading">🧑‍💻<br/>Learn</h1>
        <p>
          Typically, the purpose of a white paper is to advocate that a certain
          position is the best way to go or that a certain solution is best for
          a particular problem. When it is used for commercial purposes, it
          could influence the decision-making processes of current and
          prospective customers.
        </p>
        </div>
        <div>
          <LearnByGame/>
        </div>
      </div>
    </div>
  );
}
