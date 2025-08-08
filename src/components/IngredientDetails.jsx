import { useParams, useNavigate } from "react-router-dom";
import Header from "./Header";
import MobileAppPromo from "./MobileAppPromo";
import Footer from "./Footer";
import { FaPlus } from "react-icons/fa";

const mockData = {
  gokhru: {
    name: "Gokhru",
    image: "/assets/Ingredient.svg",
    description:
      "Also known as Tribulus, it's used to prevent infections and manage diabetes. It's known for its potential to boost testosterone levels and improve reproductive health.",
    products: [
      {
        name: "Amrutam Kuntal Care Herbal Shampoo",
        image: "/assets/summerCollectionImg2.png",
        price: "₹649.00",
      },
    ],
  },
  shatavar: {
    name: "Shatavar",
    image: "/assets/Ingredient.svg",
    description:
      "Naturally enhances brain and relieves pain. It's an adaptogenic herb traditionally used to support the female reproductive system.",
    products: [
      {
        name: "Amrutam Shatavari Capsules",
        image: "/assets/summerCollectionImg2.png",
        price: "₹549.00",
      },
    ],
  },
};

const Product = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-6">
      <img
        src="/assets/summerCollectionImg2.png"
        alt="product"
        className="w-full sm:w-[200px] h-auto"
      />
      <div className="flex flex-col relative flex-1">
        <div className="flex flex-col gap-2 sm:gap-6">
          <h1 className="text-base sm:text-lg font-medium">
            Amrutam Kuntal Care Herbal Shampoo | Healthy, Natural...
          </h1>
          <p className="text-sm sm:text-base">₹649.00</p>
        </div>
        <div className="text-white absolute bottom-0 right-0 bg-[#3A653A] w-8 h-8 rounded flex items-center justify-center text-lg mx-2 sm:mx-5">
          <FaPlus />
        </div>
      </div>
    </div>
  );
};

export default function IngredientDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const ingredient = mockData[name];

  if (!ingredient) return <div>Ingredient not found</div>;

  return (
    <div className="flex flex-col bg-[#FFF7E5]">
      <Header />

      <div className="flex flex-col px-4 sm:px-6 md:px-10 lg:px-20">
        <button
          onClick={() => navigate(-1)}
          className="my-6 sm:my-8 px-4 py-2 flex justify-center items-center border shadow border-green-900 text-green-800 rounded w-fit text-sm sm:text-base"
        >
          ← Back
        </button>

        <div className="flex flex-col lg:flex-row justify-between w-full gap-10 lg:gap-40">
          {/* Left section */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <img
              src={ingredient.image}
              alt={ingredient.name}
              className="w-full h-auto max-h-[400px] border border-gray-400 rounded-xl p-4 object-contain"
            />
            <h2 className="text-xl sm:text-2xl font-bold mt-4">
              {ingredient.name}
            </h2>
            <p className="text-sm sm:text-base mt-2 text-gray-700">
              {ingredient.description}
            </p>
          </div>

          {/* Right section */}
          <div className="w-full lg:w-1/2 flex flex-col mt-6 lg:mt-0">
            <h1 className="text-lg sm:text-xl mb-6 sm:mb-10">
              Products with{" "}
              <span className="font-bold">"{ingredient.name}"</span> as primary
              ingredient
            </h1>
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>

      <MobileAppPromo />
      <Footer />
    </div>
  );
}
