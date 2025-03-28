import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { products } from "../assets/data/menuData";

const categories = ["all", "coffee", "tea", "pastries", "desserts"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dispatch = useDispatch();

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter(
          (product: any) => product.category === selectedCategory
        );

  return (
    <div className="py-16 px-20">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Our Menu
      </h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full capitalize ${
              selectedCategory === category
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-1">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-primary">
                    Rs {product.price.toFixed(2)}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      dispatch(addToCart({ ...product, quantity: 1 }))
                    }
                    className="bg-primary text-white px-4 py-2 rounded-md 
                    hover:bg-opacity-90 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Menu;
