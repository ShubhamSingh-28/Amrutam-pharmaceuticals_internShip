import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#e6efe7] text-slate-700 py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
          <div className="flex flex-col gap-3 font-medium text-slate-700">
            <h2 className="text-base font-semibold mb-2 text-[#32653F]">
              Get in touch
            </h2>
            <p className="mb-1 text-sm">support@amrutam.global</p>
            <p className="mb-1 text-sm w-2/3">
              Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak,
              Lashkar, Gwalior - 474001
            </p>
            <p className="mb-4 text-sm">+91 9713171999</p>
          </div>
          <div className="flex space-x-2">
            <FooterIcon icon={<FaFacebookF />} />
            <FooterIcon icon={<FaInstagram />} />
            <FooterIcon icon={<FaYoutube />} />
            <FooterIcon icon={<FaTwitter />} />
            <FooterIcon icon={<FaLinkedinIn />} />
            <FooterIcon icon={<FaPinterestP />} />
          </div>
        </div>

        {/* Middle Column */}
        <div className="text-slate-700 font-medium">
          <h2 className="text-base font-semibold mb-2 text-[#32653F]">
            Information
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Privacy Policy for Mobile Apps</a>
            </li>
            <li>
              <a href="#">Shipping, return and cancellation Policy</a>
            </li>
            <li>
              <a href="#">International Delivery</a>
            </li>
            <li>
              <a href="#">For Businesses, Hotels, and Resorts</a>
            </li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-lg font-semibold mb-2 text-[#32653F]">
            Subscribe to our Newsletter and join
            <br />
            Amrutam Family today!
          </h2>
          <form className="mt-4 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 border border-green-900 rounded-full sm:rounded-r-none sm:rounded-l-full outline-none w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="mt-2 sm:mt-0 sm:ml-0 px-6 py-2 bg-black text-white rounded-full sm:rounded-l-none sm:rounded-r-full"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function FooterIcon({ icon }) {
  return (
    <div className="bg-[#3A643B] text-white rounded-full p-3 hover:bg-green-900 cursor-pointer shadow-md">
      {icon}
    </div>
  );
}
