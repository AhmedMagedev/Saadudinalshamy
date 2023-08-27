import Image from "next/image";
import bg from "../public/banner.png";

export default function Home() {
  return (
    <div className="bg-white  ">
      <link rel="icon" href="/logow.png" />
      <div className="justify-center h-full w-full pt-12 bg-white">
        <Image
          src="/logo.png"
          height={300}
          width={300}
          alt="logo"
          className="m-auto"
        />
      </div>
      <div className="justify-center h-full w-full pt-20">
        <p className="text-center text-4xl font-Madani">جاري العمل</p>
      </div>
      <div className="justify-bottom h-full w-full pt-16 bg-white">
        <Image src={bg} height={100} width={2000} alt="bg" />
      </div>
    </div>
  );
}
