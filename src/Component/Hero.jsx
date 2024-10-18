import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundVideo from "../Asset/video/BgVideo.mp4";
import { scroller } from "react-scroll";

function Header() {
  const navRef = useRef(null);
  const textRef = useRef(null);

  const navInView = useInView(navRef, { triggerOnce: false });
  const textInView = useInView(textRef, { triggerOnce: false });

  const scrollToComponent = (id) => {
    scroller.scrollTo(id, {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -100,
    });
  };

  return (
    <>
      <div className="home relative h-screen w-full overflow-hidden bg-stone-950">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={BackgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={navInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col gap-40"
          ref={navRef}
        >
          <div className="flex h-screen items-center">
            <div className="flex w-full flex-col">
              <h1 className="text-center text-2xl font-bold text-white md:text-4xl">
                Experience the Ultimate Mech Battle Experience
              </h1>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={
                  textInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }
                }
                transition={{ duration: 1, ease: "easeInOut" }}
                className="mt-10 flex flex-col gap-5 px-4 text-xl font-bold text-white md:w-[50%] md:gap-8 md:px-8 md:text-2xl"
                ref={textRef}
              >
                <p>
                  Compete, Collect, and Own Unique Digital Assets in the World's
                  First Blockchain-Powered Mech Shooter
                </p>
                <p
                  className="btn w-40 cursor-pointer rounded-lg border bg-pink-700 p-2 text-center transition-all duration-150 hover:bg-transparent"
                  onClick={() => scrollToComponent("community")}
                >
                  Join the Battle
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Header;
