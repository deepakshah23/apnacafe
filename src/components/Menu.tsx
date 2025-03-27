import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

const products = [
  {
    id: "1",
    name: "Cappuccino",
    price: 499,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
    description: "Rich espresso topped with creamy milk foam",
  },
  {
    id: "2",
    name: "Latte",
    price: 399,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400",
    description: "Smooth espresso with steamed milk",
  },
  {
    id: "3",
    name: "Croissant",
    price: 349,
    category: "pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400",
    description: "Buttery, flaky French pastry",
  },
  {
    id: "4",
    name: "Chocolate Cake",
    price: 599,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
    description: "Rich chocolate layer cake",
  },
  {
    id: "5",
    name: "Green Tea",
    price: 349,
    category: "tea",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400",
    description: "Premium Japanese green tea",
  },
  {
    id: "6",
    name: "Iced Coffee",
    price: 449,
    category: "coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
    description: "Chilled coffee served over ice",
  },
];

const categories = ["all", "coffee", "tea", "pastries", "desserts"];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const dispatch = useDispatch();

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="py-16 px-4">
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
                    className="bg-accent text-white px-4 py-2 rounded-md 
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
