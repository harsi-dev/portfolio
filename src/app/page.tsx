import SourceCodeButton from "@/components/buttons/SourceCodeButton";
import Socials from "@/components/socials/socials";
import Link from "next/link";

export default function Home() {
  return (
    <main className="jus flex min-h-screen flex-col items-start justify-start p-8 sm:items-center sm:justify-center">
      <section className="">
        <div className="mb-8 flex gap-8">
          <img
            src="/images/headshot.jpeg"
            alt="Harsi Dhaliwal"
            className="h-32 w-32 rounded-full border object-cover shadow-lg"
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

      <section className="mt-8 w-full max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-gray-300 p-6 shadow-md">
            <h3 className="text-left text-xl font-semibold">Ludo Sudo</h3>
            <p className="text-left text-[hsl(210,10%,60%)]">
              Realtime multiplayer game built with Flutter & Go.
            </p>
            <div className="mt-4 flex flex-col items-start justify-start">
              <div>
                <SourceCodeButton link="https://github.com/harsi-dev/ludo_flutter" />
              </div>
              <div className="mt-2 flex flex-row flex-wrap items-center justify-start gap-1">
                <Link
                  href="https://apps.apple.com/in/app/ludo-sudo/id6738285746"
                  target="_blank"
                >
                  <img className="h-10" src={"/images/app_store.svg"} />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.hdyadu.ludo_sudo"
                  target="_blank"
                >
                  <img className="h-10" src={"/images/google-play-badge.png"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 w-full max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-400">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Prisma",
            "Tailwind CSS",
            "Golang",
            "Kubernetes",
            "Docker",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-gray-300 p-2 text-black shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
