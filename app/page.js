import Image from "next/image";
import bg from "../public/banner2.png";

export default function Home() {
  return (
    <div className="bg-white  ">
      <link rel="icon" href="/logow.png" />
      <div className="sm:flex h-full w-full pt-12 sm:pr-24 justify-end bg-white relative">
        <Image
          src="/logo.png"
          height={300}
          width={300}
          alt="logo"
          className="m-auto sm:m-0"
        />
      </div>
      <div className="justify-center h-full w-full py-24">
        <p className="text-center text:3xl sm:text-4xl font-Madani">
          <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white">
            ...
          </span>
          جاري العمل
        </p>
      </div>
      <div className="justify-bottom h-full w-full pt-36 sm:pt-16 bg-white">
        <Image src={bg} height={300} width={2000} alt="bg" />
      </div>
    </div>
  );
}
