import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Apna Cafe</h3>
            <p className="text-gray-300">
              Serving delicious coffee, refreshing beverages, and tasty snacks
              in a cozy ambiance. Relax, unwind, and enjoy every sip! ☕✨
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <address className="text-gray-300 not-italic">
              Prathiba Tower, Sec- 41
              <br />
              Gurgaon City, 122003
              <br />
              Phone: +91 9876543210
              <br />
              Email: info@apnacafe.com
            </address>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 Apna Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
