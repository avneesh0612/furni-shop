import Head from "next/head";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen max-w-[100vw] min-w-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHome />
    </div>
  );
}
