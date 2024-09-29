import { Metadata } from "next";

import Picture from "@/components/Picture";
import Name from "@/components/Name";
import Title from "@/components/Title";
import Socials from "@/components/socials/socials";

export const metadata: Metadata = {
  title: "Harsimran Portfolio",
  description: "Harsimranjit Dhaliwal Portfolio",
};
export default function Page() {
  return (
    <>
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
