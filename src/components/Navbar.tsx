import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import type { RootState } from "../store/store";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <nav className="backdrop-blur-md text-white fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto px-4 bg-black/70">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            <Link to="/" className="flex items-center gap-1">
              <img src="./apnacafe.ico" alt="icon" width="50px" height="50px" />
              Apna Cafe
            </Link>
          </motion.div>

          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>

            {isAuthenticated ? (
              <Link to="/cart" className="relative">
                <ShoppingCartIcon className="h-6 w-6" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {items.length}
                  </span>
                )}
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-accent transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
