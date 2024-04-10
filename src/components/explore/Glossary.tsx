import React from "react";
import { abcdData } from "@/data/web3-glossary"; 

function Card(data:any) {
  const { word, meaning } = data;

  return (
    <div className="border-2 border-dark hover h-full p-2 bg-white">
      <h4 className="mb-2 h4">{word}</h4>
      <p className="p text-sm">{meaning}</p>
    </div>
  );
}

export default function Web3Glossary() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="bg-[#FEFBED]">
      <div className="text-center p-4 bg-[#000]">
        <h3 className="h3 text-white">
          A deep dive into crypto terms, DeFi def initions, and Web3 words.
        </h3>
      </div>
      <div className="section">
        {alphabet.map((letter, index) => {
          return (
            <div className="mb-5" key={index}>
              <h1 className="h3">
                <b className="text-uppercase text-bolder">{letter}</b> ➡️ for
              </h1>
              <div className="flex  ">
                {abcdData[index].map((data, index) => {
                  return (
                    <div key={index}  className="p-2">
                      <Card word={data.word} meaning={data.meaning} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
