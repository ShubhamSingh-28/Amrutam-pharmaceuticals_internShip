import React from "react";

const reviews = [
  {
    id: 1,
    name: "Sabarinath J",
    date: "20 January 2023",
    comment:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    rating: 5,
    initials: "SJ",
  },
  {
    id: 2,
    name: "Sabarinath J",
    date: "20 January 2023",
    comment:
      "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    rating: 5,
    initials: "SJ",
  },
];

const Rating = () => {
  return (
    <div className="bg-[#FFF7E2] px-4 md:px-12 py-12 w-full">
      <div className="w-full mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8 md:mb-10">
          Reviews and Ratings
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div className="bg-[#FFEAD1] p-6 rounded-xl w-full md:w-1/3 flex gap-4 md:gap-5 items-center justify-center md:justify-start">
            <div className="text-4xl font-bold mb-1">5.0</div>
            <div>
              <div className="text-[#F79725] text-xl mb-2">{"★".repeat(5)}</div>
              <p className="text-gray-600 text-sm md:text-base">
                Based on 20 reviews
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto justify-center md:justify-end text-[#32653f]">
            <button className="border border-[#ccc] px-6 py-3 rounded-lg shadow-sm hover:shadow transition">
              See More Reviews
            </button>
            <button className="border border-[#ccc] px-6 py-3 rounded-lg shadow-sm hover:shadow transition">
              Write a review
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#FFEAD1] relative p-4 rounded-xl flex flex-col sm:flex-row items-start gap-4"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center font-bold text-black text-sm">
                {review.initials}
              </div>

              <div className="flex-1">
                <p className="text-base text-black mb-2">{review.comment}</p>
                <div className="text-sm text-gray-700 flex flex-wrap items-center gap-2">
                  <span>{review.name}</span>
                  <span className="text-xl leading-none">•</span>
                  <span>{review.date}</span>
                  <span className="text-xl leading-none">•</span>
                  <span className="text-[#F79725] text-base">
                    {"★".repeat(review.rating)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
