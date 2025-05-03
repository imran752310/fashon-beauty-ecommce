import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaApplePay,
  FaGooglePay,
  FaCcDiscover
} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800 pt-12 pb-6 px-6 lg:px-24 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Company</h3>
          <p className="text-sm text-gray-600">
            Find a location nearest you. See <br />
            <a href="#" className="underline font-medium">Our Stores</a>
          </p>
          <p className="mt-2 font-semibold">+31033880000</p>
          <p className="text-sm text-gray-600">admin@.com</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Useful links</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#">New Products</a></li>
            <li><a href="#">Best Sellers</a></li>
            <li><a href="#">Bundle & Save</a></li>
            <li><a href="#">Online Gift Card</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Information</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#">Start a Return</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping FAQ</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold">Good emails.</h3>
          <p className="text-sm text-gray-600 mt-2 mb-4">
            Enter your email below to be the first to know about new collections and product launches.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-black text-md text-white px-2 rounded-r-md ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="mb-4 md:mb-0">
          © Muhamad Imran khan in 2025
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-black text-lg">
          <FaTwitter />
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
        </div>

        {/* Payment Logos */}
        <div className="flex space-x-2 mt-4 md:mt-0 text-2xl">
          <FaCcAmex />
          <FaApplePay />
          <FaGooglePay />
          <FaCcMastercard />
          <FaCcDiscover />
          <FaCcVisa />
        </div>
      </div>

      {/* Brand Name */}
      <div className="mt-8 text-center text-3xl font-bold text-black">GLOWING</div>
    </footer>
  );
}
