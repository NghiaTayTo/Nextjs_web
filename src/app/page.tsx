// import main from "./styles/main.module.scss"

import { lusitana } from "./components/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" /> */}
      <div className="bg-blue-200 p-10">
        <h1 className="text-2xl">Phan Trọng Nghĩa</h1>
        <p className={lusitana.className}>Tôi cảm thấy mình sắp giàu to rồi</p>
      </div>

      <div>
        <Image
          src="/hero_mobile.png"
          width={700}
          height={450}
          className="hidden md:block"
          alt="Hero"
        />
        <Image
          src="/hero.png"
          width={300}
          height={650}
          className="block md:hidden"
          alt="Hero"
        />
      </div>
    </div>
  );
}
