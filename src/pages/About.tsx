import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto min-h-[80vh] pt-28"
    >
      <h1 className="text-4xl font-bold text-black mb-6 ">About Us</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-4">
          Welcome to Apna Cafe, where passion meets perfection in every cup.
          Established in 2022, we've been serving the community with the finest
          coffee and creating memorable experiences for our customers.
        </p>
        <p className="text-gray-600 mb-4">
          Our coffee beans are sourced from sustainable farms around the world,
          and we take pride in our artisanal roasting process that brings out
          the unique flavors in every blend.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Quality in every cup</li>
            <li>Sustainable sourcing</li>
            <li>Community focus</li>
            <li>Exceptional service</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
