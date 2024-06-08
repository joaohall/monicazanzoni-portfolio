"use client";
import localFont from 'next/font/local'
import Picture1 from "../../public/images/props/laura1.png";
import Picture2 from "../../public/images/props/laura2.png";
import Picture3 from "../../public/images/props/laura3.png";
import Lenis from "lenis";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

import { useEffect, useRef } from "react";

const ScotchDisplay = localFont({ src: '../../public/fonts/ScotchDisplay-SemiBold.ttf' })

export default function MovingText() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const Slide = (props) => {
    const direction = props.direction == "left" ? -1 : 1;

    const translateX = useTransform(
      props.progress,
      [0, 1],
      [150 * direction, -150 * direction]
    );

    return (
      <motion.div
        style={{ x: translateX, left: props.left }}
        className="relative flex whitespace-nowrap"
      >
        <Phrase src={props.src} />

        <Phrase src={props.src} />

        <Phrase src={props.src} />
      </motion.div>
    );
  };

  const Phrase = ({ src }) => {
    return (
      <div className={"px-5 flex gap-5 items-center"}>
        <p className={`${ScotchDisplay.className} text-[7.5vw]`}>Advertising and Publicity</p>

        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <Image style={{ objectFit: "cover" }} src={src} alt="image" fill />
        </span>
      </div>
    );
  };

  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <main className="overflow-hidden">
      <div className="h-[100vh]" />
      <div ref={container}>
        <Slide
          src={Picture1}
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
        />

        <Slide
          src={Picture2}
          direction={"right"}
          left={"-25%"}
          progress={scrollYProgress}
        />

        <Slide
          src={Picture3}
          direction={"left"}
          left={"-75%"}
          progress={scrollYProgress}
        />
      </div>

    </main>
  );
}
