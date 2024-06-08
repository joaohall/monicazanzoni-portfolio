"use client";

import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  const ease = cubicBezier(0, 0.82, 0.07, 1);
  return (
    <section className="h-screen bg-black flex relative w-full overflow-hidden justify-center">
      <motion.div
        transition={{ ease: ease, duration: 0.8, delay: 1.5 }}
        initial={{
          filter: "blur(20px)",
          opacity: -1,
          y: 200,
          scale: 1.3,
          backdropFilter: "blur(10px)",
        }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        className="h-full w-full absolute "
      >
        <Image
          src={"/images/props/laurasbackground.png"}
          alt=""
          unoptimized
          quality={100}
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="text-3xl max-w-[1000px] w-full flex min-[1200px]:items-end justify-end flex-col min-[1200px]:justify-center p-12 relative z-10 h-full min-[1200px]:w-3/4   min-[1200px]:p-0">
        <div className="text-white mb-72">
          <motion.h1
            transition={{ ease: ease, duration: 0.8, delay: 1.3 }}
            initial={{ opacity: -1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bold text-3xl min-[370px]:text-4xl  "
          >
            Laura Coimbra.
          </motion.h1>
          <motion.p
            transition={{ ease: ease, duration: 0.8, delay: 1.5 }}
            initial={{ opacity: -1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg font-medium"
          >
            Designer
          </motion.p>
          <motion.div
           transition={{ ease: ease, duration: 0.8, delay: 1.8 }}
           initial={{ opacity: -1, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
          className=" flex-row flex gap-6">
            <Image
              src={"./icons/arrowpointingdownleft.svg"}
              width={25}
              height={25}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
