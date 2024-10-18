import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const textRef = useRef(null);
  const listRef = useRef(null);
  const isTextInView = useInView(textRef, { triggerOnce: true });
  const isListInView = useInView(listRef, { triggerOnce: true });

  return (
    <div className="about r overflow-hidden bg-slate-900 px-2 py-4 text-white ">
      <div className=" inset-0 bg-blue-600 bg-opacity-30 py-5 md:top-0">
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTextInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="p-6 md:p-12"
        >
          <h1 className="mb-4 text-center text-2xl font-bold md:text-3xl">
            Our Mission & Vision
          </h1>
          <p className="mb-4 font-semibold md:text-center md:text-lg ">
            At Shamzbridge, we believe in harnessing the power of human
            resources to build a thriving workplace where innovation,
            collaboration, and growth flourish.
          </p>
          <motion.ul
            ref={listRef}
            initial={{ opacity: 0, x: -100 }}
            animate={isListInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="list-inside list-disc space-y-2"
          >
            <li>
              <span className="font-semibold">Empowering Teams:</span> We
              empower our employees to achieve their highest potential through
              continuous learning and development.
            </li>
            <li>
              <span className="font-semibold">Fostering Inclusion:</span> We are
              committed to fostering an inclusive culture where diverse
              perspectives are valued and celebrated.
            </li>
            <li>
              <span className="font-semibold">Driving Innovation:</span> Our
              innovative practices ensure that we stay at the forefront of
              industry trends and employee satisfaction.
            </li>
            <li>
              <span className="font-semibold">Building Community:</span> We
              create a strong sense of community both within our organization
              and in the greater industry.
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          ref={listRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isListInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="px-6 md:px-12"
        >
          <h1 className="mb-4 text-xl font-bold md:text-2xl">Meet Our Team</h1>
          <p className="mb-4  font-semibold md:text-center md:text-lg ">
            Our dedicated team of HR professionals is here to support you every
            step of the way.
          </p>
          <motion.ul
            ref={listRef}
            initial={{ opacity: 0, x: 100 }}
            animate={isListInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="list-inside list-disc space-y-2"
          >
            <li>
              <span className="font-semibold">Dedicated Support:</span> Our HR
              team is dedicated to providing personalized support for all
              employees.
            </li>
            <li>
              <span className="font-semibold">Experienced Professionals:</span>{" "}
              We have a team of experienced professionals committed to fostering
              a positive workplace culture.
            </li>
            <li>
              <span className="font-semibold">Collaborative Environment:</span>{" "}
              We work collaboratively to ensure a smooth onboarding process and
              continuous employee engagement.
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
