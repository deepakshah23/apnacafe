import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="h-screen bg-[url('../images/image.png')]
        bg-cover  bg-center "
    >
      <div className="bg-gray-900/30 h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-4xl mx-auto min-h-[80vh] pt-28 backdrop-blur-lg px-4  "
        >
          <h1 className="text-4xl font-bold text-white mb-6 ">About Us</h1>
          <div className="prose prose-lg">
            <p className="text-gray-100 mb-4">
              Welcome to Apna Cafe, where passion meets perfection in every cup.
              Established in 2022, we've been serving the community with the
              finest coffee and creating memorable experiences for our
              customers.
            </p>
            <p className="text-gray-100 mb-4">
              Our coffee beans are sourced from sustainable farms around the
              world, and we take pride in our artisanal roasting process that
              brings out the unique flavors in every blend.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold  mb-4 text-white">
                Our Values
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Quality in every cup</li>
                <li>Sustainable sourcing</li>
                <li>Community focus</li>
                <li>Exceptional service</li>
              </ul>
            </div>
          </div>
        </motion.div>
        //{" "}
      </div>
      //{" "}
    </div>
  );
};

export default About;
