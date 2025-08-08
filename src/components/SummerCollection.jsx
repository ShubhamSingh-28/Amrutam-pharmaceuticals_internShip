import { FaStar, FaPlus } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import products from "./productData";

const SummerCollection = () => {
  return (
    <section className="bg-[#FFF7E2] px-4 sm:px-6 md:px-16 pt-10 pb-28 w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-6 text-center md:text-left">
        Summer Collection
      </h2>

      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-hide">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="w-[260px] md:w-[320px] bg-white rounded-2xl shadow-sm p-4 flex-shrink-0 hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="rounded-xl w-full h-60 md:h-90 object-cover"
            />
            <h3 className="text-md font-medium mt-4">
              {product.title.length > 60
                ? product.title.slice(0, 60) + "..."
                : product.title}
            </h3>
            <div className="text-gray-700 text-sm mt-1">
              {product.price} • {product.volume}
            </div>
            <div className="flex">
              <div className="flex items-center mt-1 text-sm text-[#FF9900]">
                {Array.from({ length: product.rating }, (_, i) => (
                  <FaStar key={i} className="mr-1" />
                ))}
                <span className="text-gray-700 ml-1">({product.reviews})</span>
              </div>
              <button
                type="button"
                className="mt-3 ml-auto bg-[#3A643B] p-2 rounded-lg text-white text-sm"
                onClick={(e) => e.preventDefault()}
              >
                <FaPlus />
              </button>
            </div>
          </Link>
        ))}

        <div className="hidden md:flex items-center justify-center">
          <button className="min-w-[56px] h-[56px] rounded-full border border-gray-300 bg-white shadow-md">
            <MdArrowForwardIos size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SummerCollection;
