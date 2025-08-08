import React, { useState } from "react";
import {
  Phone,
  Bell,
  IndianRupee,
  Leaf,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const NavLink = ({ text, active }) => (
  <div
    className={`cursor-pointer hover:underline ${
      active ? "border-b-2 border-green-700 pb-1" : ""
    }`}
  >
    {text}
  </div>
);

const IconWithBadge = ({ icon, count }) => (
  <div className="relative bg-[#dfe5db] rounded-full w-10 h-10 flex items-center justify-center">
    {icon}
    {count && (
      <span className="absolute -top-1 -right-1 bg-green-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {count}
      </span>
    )}
  </div>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Bar Container */}
      <div className="bg-[#FFF7E2] px-6 py-2 flex flex-col md:gap-1 gap-3">
        {/* Logo on its own line */}
        <div className="text-[26px] tracking-tight font-[Oswald] font-medium text-[#32653F] text-center">
          A M R U T A M
        </div>

        {/* Row: Left Contact / Right Icons */}
        <div className="flex justify-between items-center">
          {/* Left - Phone number */}
          <div className="hidden md:flex items-center text-green-900 gap-2">
            <Phone size={20} />
            <span className="font-normal text-lg">+91 9826352321</span>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={handleToggleMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Right Icons (Desktop) */}
          <div className="hidden md:flex w-[200px] justify-end items-center gap-4">
            <IconWithBadge icon={<IndianRupee size={14} />} count={2} />
            <IconWithBadge icon={<ShoppingCart size={14} />} count={1} />
            <IconWithBadge icon={<Bell size={14} />} />
            <IconWithBadge icon={<Leaf size={14} />} />
            <div className="text-xl">
              <IoIosArrowDown />
            </div>
          </div>

          {/* Right Icons (Mobile) */}
          <div className="md:hidden flex items-center gap-3">
            <Leaf size={20} color="#32653F" />
            <ShoppingCart size={20} color="#32653F" />
            <button className="bg-green-800 text-white px-4 py-1 rounded-full text-sm">
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar (Desktop only) */}
      <div className="bg-[#FFF7E2] relative hidden md:flex justify-center items-center px-6 py-3">
        <nav className="flex gap-6 text-green-900 font-medium text-lg">
          <NavLink text="Home" />
          <NavLink text="Find Doctors" />
          <NavLink text="Lab Tests" />
          <Link to="/">
            <NavLink text="Shop" />
          </Link>
          <Link to="/forum">
            <NavLink text="Forum" />
          </Link>
          <NavLink text="About Us" />
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF7E2] flex flex-col gap-4 px-6 py-4 text-green-900 font-medium">
          <div onClick={closeMenu}>
            <NavLink text="Home" />
          </div>
          <div onClick={closeMenu}>
            <NavLink text="Find Doctors" />
          </div>
          <div onClick={closeMenu}>
            <NavLink text="Lab Tests" />
          </div>
          <Link to="/" onClick={closeMenu}>
            <NavLink text="Shop" />
          </Link>
          <Link to="/forum" onClick={closeMenu}>
            <NavLink text="Forum" />
          </Link>
          <div onClick={closeMenu}>
            <NavLink text="About Us" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
