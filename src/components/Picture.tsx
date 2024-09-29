import Image from "next/image";
export default function Picture() {
  return (
    <div className="flex flex-row items-center justify-center space-x-6">
      <div className="justify-center align-middle">
        <Image
          className="mx-auto w-24"
          src="/images/headshot.jpeg"
          alt=""
          width="512"
          height="512"
        />
      </div>
    </div>
  );
}
