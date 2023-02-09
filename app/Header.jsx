import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../public/nba-logo.png";

function Header() {
  return (
    <div className="bg-sky-600 text-white text-center">
      <nav className="flex gap-4 px-2 pt-2">
        <Link href={"/"}>Home</Link>
        <Link href={"/live"}>Live Games</Link>
        <Link href={"/standings"}>Standings</Link>
        <Link href={"/rosters"}>Rosters</Link>
      </nav>
      <div className="p-8">
        <Image src={logo} />
        <h2 className="text-2xl">The NBA in your pocket</h2>
      </div>
    </div>
  );
}

export default Header;
