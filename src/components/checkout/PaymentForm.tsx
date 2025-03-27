import { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { setPaymentInfo, setCheckoutStep } from "../../store/slices/cartSlice";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      setPaymentInfo({
        cardNumber: formData.cardNumber,
        cardHolder: formData.cardHolder,
        expiryDate: formData.expiryDate,
      })
    );
    dispatch(setCheckoutStep("confirmation"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-lg mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{16}"
            maxLength={16}
            placeholder="1234 5678 9012 3456"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <div>
          <label
            htmlFor="cardHolder"
            className="block text-sm font-medium text-gray-700"
          >
            Card Holder Name
          </label>
          <input
            type="text"
            id="cardHolder"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            required
            className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
              pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
              placeholder="MM/YY"
              maxLength={5}
              className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div>
            <label
              htmlFor="cvv"
              className="block text-sm font-medium text-gray-700"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              pattern="[0-9]{3,4}"
              maxLength={4}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => dispatch(setCheckoutStep("delivery"))}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Place Order
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default PaymentForm;
