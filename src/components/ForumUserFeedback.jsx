import React from "react";
import { FaHeart, FaRegCommentDots, FaBookmark } from "react-icons/fa";

const ForumUserFeedback = () => {
  return (
    <div className="px-4 py-8 my-8 border-t-2 border-gray-300">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
        <div className="flex items-center gap-4">
          <img
            src="/assets/admin-logo.svg"
            alt="Anonymous"
            className="w-12 h-12"
          />
          <div className="text-sm text-gray-600">
            <p>Anonymous</p>
            <p>5 days ago</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-black self-end sm:self-auto">
          ⋮
        </button>
      </div>

      <h3 className="font-medium text-base mt-2">
        Question: Can Ayurveda help with stress and mental health issues?
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Explores the potential benefits of traditional Ayurvedic practices in
        managing stress and improving mental well-being, examining holistic
        approaches like herbal remedies, meditation, and lifestyle adjustments.
      </p>

      <div className="text-xs text-gray-500 mb-2 flex flex-wrap justify-between">
        Replies • 10 reply{" "}
        <span className="text-green-700 cursor-pointer ml-4">
          View All 9 Replies
        </span>
      </div>

      <div className="bg-green-50 rounded-lg p-3 mb-3 w-full md:w-11/12 lg:w-3/4 ml-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-1 gap-2">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="Dr. Mathew Adams"
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-medium text-sm">Dr. Mathew Adams</p>
              <p className="text-xs text-gray-500">5 days ago</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 self-end sm:self-auto">
            ⋮
          </button>
        </div>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">Ans.</span> Ayurveda offers holistic
          approaches like herbal remedies, lifestyle adjustments, and relaxation
          techniques to alleviate stress and support mental well-being. It
          emphasizes personalized care and natural methods to address the root
          causes of mental health challenges, promoting balance and harmony in
          mind and body.
        </p>

        <div className="flex gap-4 mt-3 text-sm text-green-700 items-center flex-wrap">
          <span className="flex items-center gap-1">
            <FaHeart /> 2
          </span>
          <span className="flex items-center gap-1">
            <FaRegCommentDots /> 2
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-6 text-gray-600 text-sm pt-2 border-t border-gray-200 mt-4 w-full md:w-11/12 lg:w-3/4 ml-auto">
        <span className="flex items-center gap-1">
          <FaHeart className="text-green-700" /> 23 Likes
        </span>
        <span className="flex items-center gap-1">
          <FaRegCommentDots className="text-green-700" /> 10 Reply
        </span>
        <span className="flex items-center gap-1">
          <FaBookmark className="text-green-700" /> 3 Saves
        </span>
      </div>
    </div>
  );
};

export default ForumUserFeedback;
