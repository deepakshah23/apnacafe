import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <HeroSection />
      <div id="viewMenu">
        <Menu />
      </div>
    </motion.div>
  );
};

export default Home;
