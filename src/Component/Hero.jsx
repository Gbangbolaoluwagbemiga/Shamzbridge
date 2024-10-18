import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BackgroundVideo from "../Asset/video/BgVideo.mp4"; // You can replace this with a more HR-focused video
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
    <div className="hero relative h-screen w-full overflow-hidden bg-gray-900">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={BackgroundVideo} // Ensure this video is appropriate for a professional HR context
        autoPlay
        loop
        muted
        playsInline
      />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={navInView ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center"
        ref={navRef}
      >
        <h1 className="text-center text-3xl font-bold text-white md:text-5xl">
          Elevate Your Workforce to New Heights
        </h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={textInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mt-8 flex flex-col gap-4 px-4 text-lg font-bold text-white md:w-[60%] md:gap-6 md:px-8 md:text-2xl"
          ref={textRef}
        >
          <p>
            Unlock the potential of your team with our comprehensive HR
            solutions designed to foster growth, engagement, and success.
          </p>
          <p
            className="btn w-48 cursor-pointer rounded-lg border bg-blue-600 p-2 text-center transition-all duration-150 hover:bg-transparent"
            onClick={() => scrollToComponent("services")}
          >
            Discover Our Services
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
