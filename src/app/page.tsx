import Image from "next/image";
import Socials from "@/components/socials/socials";
import SkillSet from "./_components/SkillSet";

export default function Home() {
  return (
    <main className="jus flex min-h-screen flex-col items-start justify-start p-8 sm:items-center sm:justify-center">
      <section className="">
        <div className="mb-8 flex gap-8">
          <Image
            src="/images/headshot.jpeg"
            alt="Harsi Dhaliwal"
            className="h-32 w-32 rounded-full border object-cover shadow-lg"
            height={120}
            width={120}
          />
          <div className="my-auto flex h-full flex-col items-center justify-center text-center">
            <h1 className="mb-4 text-4xl font-bold text-[hsl(210,20%,20%)] shadow-[0_1px_0_hsl(210,20%,90%)]">
              Harsi Dhaliwal
            </h1>
            <Socials />
          </div>
        </div>
        <p className="mb-6 text-2xl text-[hsl(210,20%,40%)] sm:text-center">
          Flutter | Full Stack Developer
        </p>
        <p className="text-start text-lg text-[hsl(210,10%,40%)]">
          Building scalable, high-performance applications for web and mobile.
        </p>
      </section>
      <SkillSet />
    </main>
  );
}
