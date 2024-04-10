import Link from "next/link";
import React from "react";
import { useState } from "react";
import { ethers } from 'ethers';



export default function Nav() {

  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Function to connect/disconnect the wallet
 

  return (
    <nav className="flex items-center mx-auto max-w-7xl justify-between  py-4 px-4 border-dark">
      {/* logo */}
      <div className="text-2xl">
        <Link href='/'> <h3>
          ⚡️ Web3<b>Campus</b>
        </h3></Link>
        
      
      </div>
      {/* links */}
      <div className=" items-center justify-around hidden sm:flex">
        <Link href="/learn">
          <div className="mx-[50px] text-xl">👨‍💻 Learn</div>
        </Link> 
        
        <Link href="/earn">
          <div className="mx-[50px] text-xl">💰 Earn</div>
        </Link>

        <Link href="/">
          <div className="mx-[50px] text-xl">About</div>
        </Link>

       

        <Link href="/">
          <div className="mx-[50px] text-xl">Contact</div>
        </Link>
      </div>
      {/* <div className="main hidden sm:flex">
        <div className="content">
          <button className="btn"  >
            {connected ? "Disconnect Wallet" : "Connect Wallet"}
          </button>
          
          <h4 className="wal-add pt-2">{walletAddress}</h4>
        </div>

       
      </div> */}
    </nav>
  );
}
