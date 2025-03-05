import SourceCodeButton from "@/components/buttons/SourceCodeButton";
import Socials from "@/components/socials/socials";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-white">
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold">
          Harsimran | Full-Stack Developer
        </h1>
        <p className="mb-6 text-lg text-gray-400">
          Building scalable, high-performance web applications.
        </p>
      </section>
      <section className="text-lg text-gray-400">
        I believe in building in public, rapid iteration, and shipping
        real-world projects.
      </section>
      <section className="mt-16 w-full max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-semibold">Highlighted Projects</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gray-800 p-6 shadow-md">
            <h3 className="text-left text-xl font-semibold">Ludo Sudo</h3>
            <p className="text-left text-gray-400">
              Realtime multiplayer game built with Flutter & Go.
            </p>
            <div className="mt-4 flex flex-col items-start justify-start">
              <div>
                <SourceCodeButton link="https://github.com/harsimran-d/ludo_flutter" />
              </div>
              <div className="flex flex-row flex-wrap items-center justify-start">
                <Link
                  href="https://apps.apple.com/in/app/ludo-sudo/id6738285746"
                  target="_blank"
                >
                  <img
                    className="box-border h-11"
                    src={"/images/app_store.svg"}
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.hdyadu.ludo_sudo"
                  target="_blank"
                >
                  <img
                    className="box-border h-16"
                    src={"/images/google-play-badge.png"}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 w-full max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-semibold">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-400">
          <span className="rounded-lg bg-gray-800 px-4 py-2">Next.js</span>
          <span className="rounded-lg bg-gray-800 px-4 py-2">React</span>
          <span className="rounded-lg bg-gray-800 px-4 py-2">TypeScript</span>
          <span className="rounded-lg bg-gray-800 px-4 py-2">Prisma</span>
          <span className="rounded-lg bg-gray-800 px-4 py-2">Tailwind CSS</span>
          <span className="rounded-lg bg-gray-800 px-4 py-2">Golang</span>
          <span className="rounded-lg bg-gray-800 px-4 py-2">Kubernetes</span>
          <span className="rounded-lg bg-gray-800 px-4 py-2">Docker</span>
        </div>
      </section>

      <footer className="mt-16 flex flex-col space-x-4">
        <p className="text-center text-xl text-gray-400">Let&apos;s connect!</p>
        <Socials />
      </footer>
    </main>
  );
}
