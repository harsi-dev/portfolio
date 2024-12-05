import { Metadata } from "next";

import Socials from "@/components/socials/socials";

export const metadata: Metadata = {
  title: "Harsimran's Portfolio",
  description: "Harsimran's Portfolio",
};
export default function Page() {
  return (
    <>
      <main className="m-auto flex h-screen items-center justify-center">
        <div className="rounded-lg border border-slate-400 p-4 shadow-lg shadow-slate-700">
          <p className="py-2 text-lg font-bold text-gray-200">
            Hi, My name is Harsimran
          </p>
          <p className="text-gray-200">I am a Fullstack Developer</p>
          <p className="text-gray-200">working with Flutter and Golang.</p>
          <p className="text-gray-200">Do checkout my socials to learn more.</p>
          <p className="py-2 text-gray-200">Cheers.</p>
          <Socials />
        </div>
      </main>
    </>
  );
}
