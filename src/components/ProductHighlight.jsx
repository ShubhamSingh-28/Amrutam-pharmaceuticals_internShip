import React from "react";
import { Link } from "react-router-dom";

const highlights = [
  "Helps with Dry, Frizzy Hair",
  "Relaxes the scalp, improves hair health",
  "Makes the hair smooth and shiny",
  "Reduces hairfall, repairs damaged hair",
];

const ingredients = [
  {
    name: "Shatavar",
    description: "Naturally enhances brain and relieves pain",
    image: "/assets/Ingredient.svg",
  },
  {
    name: "Shatavar",
    description: "Naturally enhances brain and relieves pain",
    image: "/assets/Ingredient.svg",
  },
  {
    name: "Shatavar",
    description: "Naturally enhances brain and relieves pain",
    image: "/assets/Ingredient.svg",
  },
  {
    name: "Shatavar",
    description: "Naturally enhances brain and relieves pain",
    image: "/assets/Ingredient.svg",
  },
];

const ProductHighlight = () => {
  return (
    <div className="bg-[#FFF7E5] py-4 px-4 sm:px-6 md:px-10">
      <div className="mt-10">
        <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
          <img
            src="/assets/bowl-icon.gif"
            alt="icon"
            className="w-8 sm:w-10 h-8 sm:h-10"
          />
          Product Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {highlights.map((text, idx) => (
            <div
              key={idx}
              className="bg-[#FFE7CA] flex justify-end items-end text-sm rounded-xl p-3 font-medium"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
          <h2 className="text-lg sm:text-xl font-bold flex items-center gap-2">
            <img
              src="/assets/bowl-icon.gif"
              alt="icon"
              className="w-8 sm:w-10 h-8 sm:h-10"
            />
            Key Ingredients
          </h2>
          <Link
            to="/all-ingredients"
            className="text-green-800 font-semibold text-sm"
          >
            View All Ingredients
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ingredients.map((item, idx) => (
            <Link
              to={`/ingredient/${item.name.toLowerCase()}`}
              key={idx}
              className="bg-[#FFE7CA] p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded"
                />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-700">{item.description}</p>
                </div>
              </div>
              <span className="text-green-800 text-xl hidden sm:block">›</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-10">
        <h4 className="text-lg sm:text-xl font-bold">How to use</h4>
        <p className="bg-[#FFE7CA] my-3 p-4 rounded-xl text-slate-800 text-sm font-normal">
          Mix one or two tablespoons of Herbal Child Care Malt with milk or
          100-200ml warm water and then consume twice a day or consult our
          Ayurvedic Expert to find the right Ayurvedic recipe for you.
        </p>
      </div>

      <div className="pt-10">
        <h4 className="text-lg sm:text-xl font-bold">General Instructions</h4>
        <p className="bg-[#FFE7CA] my-3 p-4 rounded-xl text-slate-800 text-sm font-normal">
          Store in a cool and dry place away from direct sunlight. Not advisable
          for diabetic patients.
        </p>
      </div>

      <div className="pt-10">
        <h4 className="text-lg sm:text-xl font-bold">
          Commonly Asked Questions
        </h4>

        <div className="bg-[#FFE7CA] my-3 p-4 rounded-xl flex flex-col gap-2">
          <h3 className="font-bold text-sm sm:text-base text-center sm:text-left">
            Who should be using Amrutam Child Care Malt | Herbal Supplement for
            Child Care
          </h3>
          <p className="text-slate-800 text-sm font-normal text-center sm:text-left">
            This product is ideal for growing babies and kids to nurture their
            health in a holistic manner.
          </p>
        </div>

        <div className="bg-[#FFE7CA] my-3 p-4 rounded-xl flex flex-col gap-2">
          <h3 className="font-bold text-sm sm:text-base text-center sm:text-left">
            Why choose Amrutam Child Care Malt | Herbal Supplement for Child
            Care
          </h3>
          <p className="text-slate-800 text-sm font-normal text-center sm:text-left">
            Amrutam's Child Care Malt helps improve immunity and is useful in
            enhancing vitality and vigor in children.
            <br />
            This 100% natural Ayurvedic jam is extremely effective in fighting
            chronic diseases. Giving your little one Amrutam's Child Care Malt
            daily will help them improve their appetite and digestion. <br />
            It is useful in treating anemia, general debility and maintaining a
            healthy weight. <br />
            100% Natural and Ayurvedic <br />
            PETA certified cruelty-free <br />
            Hand-picked and ethically sourced ingredients <br />
            AYUSH certified and US FDA approved
          </p>
        </div>

        <div className="py-6 relative">
          <h3 className="font-semibold text-center sm:text-left">
            Trust the voice
          </h3>
          <div className="relative mt-4">
            <img
              src="/assets/video-thumbnail.png"
              alt="video-thumbnail"
              className="rounded-lg w-full"
            />
            <img
              src="/assets/pause-icon.png"
              alt="pause-icon"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHighlight;
