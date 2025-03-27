import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('../images/hero.png')] 
        bg-cover bg-center"
        style={{ filter: "brightness(0.65)" }}
      />
      <div className="relative h-full flex items-center justify-center text-center bg-black/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Apna Cafe
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Where the rich aroma of coffee and the calm of the atmosphere create
            unforgettable moments.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white px-8 py-3 rounded-full text-lg font-semibold 
            hover:bg-opacity-90 transition-colors"
          >
            {/* <Link to="ViewMenu">View Menu</Link> */}
            View Menu
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
