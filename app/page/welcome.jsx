"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="h-screen bg-black flex relative w-full overflow-hidden justify-center">
      <div className="h-full w-full absolute ">
        <Image
          src={"/images/props/laurasbackground.png"}
          alt=""
          unoptimized
          quality={100}
          fill
          className="object-cover"
        />
      </div>
      <div className="text-3xl max-w-[1000px] w-full flex min-[1200px]:items-end justify-end flex-col min-[1200px]:justify-center p-12 relative z-10 h-full min-[1200px]:w-3/4   min-[1200px]:p-0">
        <div className="text-white mb-72">
          <h1 className="font-bold text-3xl min-[370px]:text-4xl  ">
            Laura Coimbra.
          </h1>
          <p className="text-lg font-medium">Designer</p>
          <div className=" flex-row flex gap-6">
            <Image
              src={"./icons/arrowpointingdownleft.svg"}
              width={25}
              height={25}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
