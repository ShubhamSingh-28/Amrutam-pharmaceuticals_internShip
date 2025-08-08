const MobileAppPromo = () => {
  return (
    <div className="bg-[#FFF7E2] px-4 sm:px-8 lg:px-22 py-12 lg:py-24 flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-20 border-t border-gray-300">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#32653F] mb-4 leading-snug">
          Download Amrutam Ayurveda App Now
        </h2>
        <p className="w-full sm:w-4/5 text-slate-600 mb-6 leading-6 text-base mx-auto lg:mx-0">
          The Amrutam Ayurveda App is your one-stop app for all things Ayurveda!
          Apart from mimicking the website, the app has added benefits
        </p>

        {/* Benefits */}
        <div className="w-full sm:w-4/5 grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 mx-auto lg:mx-0">
          {[
            "Access To Prescriptions",
            "Track Health Efficiently",
            "Direct Chat With Doctors",
            "In-App Reminders For Consultations",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 shadow-sm bg-white"
            >
              <img src="/assets/chat.svg" alt="chatIcon" className="w-5 h-5" />
              <p className="text-green-800 font-normal text-sm">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-start gap-4">
          <img
            src="/assets/playstore.png"
            alt="Google Play"
            className="w-32 sm:w-36 cursor-pointer"
          />
          <img
            src="/assets/appstore.png"
            alt="App Store"
            className="w-32 sm:w-36 cursor-pointer"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center justify-center mx-auto mt-20 mb-12 sm:mt-14 sm:mb-16 lg:mt-0 lg:mb-0">
        <div className="rounded-full p-6">
          <img
            src="/assets/rightImg2.svg"
            alt="App Preview"
            className="w-40 sm:w-52 md:w-60 lg:w-62 -mt-24 sm:-mt-36 md:-mt-44 lg:-mt-44"
          />

          <img
            src="/assets/topArrow.svg"
            alt="Arrow"
            className="w-12 sm:w-16 absolute -top-16 sm:-top-20 -left-10 sm:-left-15"
          />

          <img
            src="/assets/bottomArrow.svg"
            alt="Arrow"
            className="w-10 sm:w-14 absolute -bottom-20 right-16 sm:right-24"
          />

          <img
            src="/assets/rightImg1.svg"
            alt="Engagement Time"
            className="absolute -top-6 sm:top-0 -left-18 sm:-left-45 w-28 sm:w-42"
          />

          <img
            src="/assets/rightImg3.svg"
            alt="Downloads"
            className="absolute -bottom-24 sm:-bottom-36 -left-6 sm:-left-10 w-28 sm:w-40"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileAppPromo;
