import Link from "next/link";
import React from "react";

export default function EarnHeader() {
  return (
    <div className="bg-[#E7FFFF] pt-12 md:pt-28  md:pb-24 ">
      <div className="section text-center">
        <div className="md:max-w-[60%] mx-auto">
          <h1 className="heading  ">
            💸
            <br />
            Earn
          </h1>
          <p>
            You can earn through Participating in Hackathons and Got a job.
          </p>

          <div className="flex gap-4 pt-6 items-center text-center justify-center ">
            <Link href={'/earn/hackathons'}>
              <button className="border rounded-md p-2 bg-green-400 text-black ">Hackathons</button>
            </Link>
            <Link href={'/earn/Jobs'}>
              <button className="border rounded-md px-8 py-2 bg-green-400 text-black ">Jobs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
