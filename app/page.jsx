import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import News from "./News";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const data = await fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/teams?key=${process.env.API_KEY}`
  );
  const res = await data.json();
  // const teamData = res.filter((team) => team.Key === "MIA");
  // console.log(res);

  return (
    <main className="text-center p-5">
      <News />
    </main>
  );
}
