import React from "react";
import { Phone } from "lucide-react";

const InstantFreeCall = () => {
  return (
    <div className="bg-[#2e2e2e] text-white text-sm flex flex-col sm:flex-row sm:justify-between sm:items-center items-start gap-4 px-4 py-4 md:py-3 md:px-6 lg:flex-row lg:justify-center lg:gap-12">
      <span className="text-center sm:text-left">
        Your first 5 minutes instant call is free.
      </span>
      <button className="bg-[#3A653A] hover:bg-green-800 px-4 py-2 rounded-xl flex items-center gap-2 text-xs sm:text-sm">
        <Phone size={16} />
        <span>Try Instant Free Call Now</span>
      </button>
    </div>
  );
};

export default InstantFreeCall;
