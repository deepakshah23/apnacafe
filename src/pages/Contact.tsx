import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto min-h-[80vh] pt-28"
    >
      <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-primary mb-4">Visit Us</h2>
        <p className="text-gray-600">
          Pratibha Tower, Sec- 41
          <br />
          Gurgaon City, 122003
          <br />
          Phone: +91 9876543210
          <br />
          Email: info@apnacafe.com
        </p>
      </div>
    </motion.div>
  );
};

export default Contact;
