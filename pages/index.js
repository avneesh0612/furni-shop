import Head from "next/head";
import Companies from "../components/Companies";
import Deals from "../components/Deals";
import Footer from "../components/Footer";
import HeroHome from "../components/HeroHome";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen max-w-[100vw] min-w-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroHome />
      <Companies />
      <Deals />
      <Footer />
    </div>
  );
}
