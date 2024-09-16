import Head from "next/head";

// @ts-ignore

import Picture from "@/components/Picture";
import Name from "@/components/Name";
import Title from "@/components/Title";
import Socials from "@/components/socials/socials";
export default function Home() {
  return (
    <>
      <Head>
        <title>Harsimranjit Dhaliwal&apos;s Portfolio</title>
        <meta name="description" content="Harsimranjit Dhaliwal's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="">
          <Picture />
          <div>
            <Name />
            <Title />
          </div>

          <Socials />
        </div>
      </main>
    </>
  );
}
