import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  removeFromCart,
  updateQuantity,
  setCheckoutStep,
} from "../store/slices/cartSlice";
import type { RootState } from "../store/store";
import DeliveryForm from "../components/checkout/DeliveryForm";
import PaymentForm from "../components/checkout/PaymentForm";
import OrderConfirmation from "../components/checkout/OrderConfirmation";

const Cart = () => {
  const { items, total, checkoutStep } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();

  const renderCheckoutStep = () => {
    switch (checkoutStep) {
      case "delivery":
        return <DeliveryForm />;
      case "payment":
        return <PaymentForm />;
      case "confirmation":
        return <OrderConfirmation />;
      default:
        return (
          <div className="space-y-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      {item.name}
                    </h3>
                    <p className="text-gray-600">RS {item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: parseInt(e.target.value),
                        })
                      )
                    }
                    className="rounded-md border-gray-300"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
            {items.length > 0 && (
              <>
                <div className="flex justify-between items-center border-t pt-4">
                  <span className="text-xl font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-primary">
                    Rs {total.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => dispatch(setCheckoutStep("delivery"))}
                  className="w-full bg-accent text-white py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </>
            )}
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto min-h-[80vh] pt-28"
    >
      <h1 className="text-4xl font-bold text-primary mb-6">
        {checkoutStep === "cart" ? "Your Cart" : "Checkout"}
      </h1>

      {items.length === 0 && checkoutStep === "cart" ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        renderCheckoutStep()
      )}
    </motion.div>
  );
};

export default Cart;
