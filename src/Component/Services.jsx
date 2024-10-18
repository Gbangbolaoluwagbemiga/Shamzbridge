import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const servicesData = [
  {
    title: "Talent Acquisition",
    description:
      "We help you find and attract the best talent in your industry, ensuring a perfect fit for your company culture.",
  },
  {
    title: "Employee Development",
    description:
      "We offer comprehensive training programs designed to enhance employee skills and promote professional growth.",
  },
  {
    title: "Performance Management",
    description:
      "Our tailored performance management systems foster a culture of feedback, helping employees thrive and reach their potential.",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "We create strategies to promote diversity and inclusion within your organization, enriching your workplace culture.",
  },
  {
    title: "HR Consulting",
    description:
      "Our experienced consultants provide strategic HR support to align your workforce with your business goals.",
  },
];

function Services() {
  const listRef = useRef(null);
  const isListInView = useInView(listRef, { triggerOnce: true });

  return (
    <div className="services bg-gray-100 py-20 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="mb-10 text-center text-3xl font-bold">Our Services</h2>
        <motion.ul
          ref={listRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isListInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map((service, index) => (
            <li
              key={index}
              className="service-item transform rounded-lg bg-white p-6 shadow-lg transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Services;
