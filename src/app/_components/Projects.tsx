import SourceCodeButton from "@/components/buttons/SourceCodeButton";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
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
                <Image
                  className="h-10"
                  src={"/images/app_store.svg"}
                  height={40}
                  width={40}
                  alt="App Store"
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.hdyadu.ludo_sudo"
                target="_blank"
              >
                <Image
                  className="h-10"
                  src={"/images/google-play-badge.png"}
                  height={40}
                  width={40}
                  alt="Play Store"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
