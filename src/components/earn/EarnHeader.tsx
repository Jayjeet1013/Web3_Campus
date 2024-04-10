import Link from "next/link";
import React from "react";

export default function EarnHeader() {
  return (
    <div className="bg-[#E7FFFF] py-20">
      <div className="section text-center">
        <div className="max-w-[60%] mx-auto">
          <h1 className="heading">
            💸
            <br />
            Earn
          </h1>
          <p>
            you can earn through Participating in Hackathons and Got a job
          </p>

          <div className="flex gap-4 items-center text-center justify-center ">
            <Link href={'/earn/hackathons'}>
              <button>Hackathons</button>
            </Link>
            <Link href={'/earn/Jobs'}>
              <button>Jobs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
