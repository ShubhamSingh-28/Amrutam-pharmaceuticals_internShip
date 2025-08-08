import React, { useState } from "react";
import InstantFreeCall from "./InstantFreeCall";
import Navbar from "./Navbar";
import ForumUserFeedback from "./ForumUserFeedback";

import { FaSearch } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { RxDoubleArrowDown } from "react-icons/rx";
import { FaClock, FaHeart, FaCommentDots } from "react-icons/fa";

const Forum = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowMenu(false);
    switch (option) {
      case "Recent":
        break;
      case "Most Liked":
        break;
      case "Most Commented":
        break;
      case "Oldest":
        break;
      default:
        break;
    }
  };

  const optionIconMap = {
    Recent: <FaClock />,
    "Most Liked": <FaHeart />,
    "Most Commented": <FaCommentDots />,
    Oldest: <FaClock />,
  };

  return (
    <div>
      <InstantFreeCall />
      <Navbar />

      <div className="w-full mb-6">
        <img
          src="/assets/ForumHeaderBg.png"
          alt="background-image"
          className="mx-auto w-full h-auto object-cover min-h-[100px] sm:min-h-[120px] md:min-h-[120px] lg:min-h-[200px]"
        />
      </div>

      <div className="max-w-2xl mx-auto p-8 my-14 bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row border-b border-gray-300 mb-4">
          <button className="w-full sm:flex-1 text-center py-2 font-semibold text-green-800 border-b-2 border-green-800">
            Questions
          </button>
          <button className="w-full sm:flex-1 text-center py-2 text-gray-400">
            Thoughts
          </button>
        </div>

        {/* Search and Menu */}
        <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 my-10 relative">
          <div className="w-full border border-gray-300 flex items-center rounded-lg px-4 py-2">
            <FaSearch />
            <input
              type="text"
              placeholder="Search here..."
              value="Hair Fall"
              className="w-full px-4 py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Menu Button and Dropdown */}
          <div className="relative self-end md:self-auto">
            <div
              className="border border-gray-300 flex justify-center items-center rounded-lg px-4 py-3 text-2xl cursor-pointer"
              onClick={toggleMenu}
            >
              {selectedOption === "Recent" && (
                <FaClock className="text-green-800" />
              )}
              {selectedOption === "Most Liked" && (
                <FaHeart className="text-green-800" />
              )}
              {selectedOption === "Most Commented" && (
                <FaCommentDots className="text-green-800" />
              )}
              {selectedOption === "Oldest" && (
                <FaClock className="text-green-800 rotate-180" />
              )}
              {!selectedOption && <RiMenuLine />}
            </div>
            {showMenu && (
              <div className="absolute right-0 top-14 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                {["Recent", "Most Liked", "Most Commented", "Oldest"].map(
                  (option) => (
                    <div
                      key={option}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                      onClick={() => handleOptionClick(option)}
                    >
                      {optionIconMap[option]}
                      <span>{option}</span>
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <img
              src="/assets/forumUserImg.svg"
              alt="Priya Singh"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-sm text-[#3B643A]">
              Priya Singh
            </span>
          </div>
          <button className="bg-[#3B643A] text-white px-5 py-2 rounded-lg text-sm self-start sm:self-auto">
            Ask Question
          </button>
        </div>

        <ForumUserFeedback />
        <ForumUserFeedback />
        <ForumUserFeedback />

        <div className="flex justify-center items-center text-xl font-bold gap-3">
          <h1>Load More</h1>
          <RxDoubleArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Forum;
