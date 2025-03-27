import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { clearCart } from "../../store/slices/cartSlice";
import type { RootState } from "../../store/store";

const OrderConfirmation = () => {
  const { items, total, deliveryInfo } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate order processing
    const timer = setTimeout(() => {
      dispatch(clearCart());
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch, navigate]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-lg mx-auto text-center pt-28 min-h-[80vh]"
    >
      <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
        <svg
          className="w-10 h-10 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-primary mb-4">
        Thank you for your order!
      </h2>

      <p className="text-gray-600 mb-8">
        Your order has been confirmed and will be delivered to:
        <br />
        <span className="font-semibold">
          {deliveryInfo?.fullName}
          <br />
          {deliveryInfo?.address}
          <br />
          {deliveryInfo?.city}, {deliveryInfo?.postalCode}
        </span>
      </p>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>Rs{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>Rs {total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <p className="text-gray-600">
        You will be redirected to the home page in a few seconds...
      </p>
    </motion.div>
  );
};

export default OrderConfirmation;
