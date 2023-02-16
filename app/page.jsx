import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import News from "./News";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <main className="text-center p-5">
      <News />
    </main>
  );
}
