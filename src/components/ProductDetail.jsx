import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Category from "./Category";
import MobileAppPromo from "./MobileAppPromo";
import productData from "./productData";
import Rating from "./Rating";
import ProductHighlight from "./ProductHighlight";
import SummerCollection from "./SummerCollection";
import MeetOurExperts from "./MeetOurExperts";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productData.find((item) => item.id === Number(id));

  const productSectionRef = useRef(null);

  const [selectedSize, setSelectedSize] = useState(product?.size[0]);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 0));

  useEffect(() => {
    if (productSectionRef.current) {
      productSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  if (!product) {
    return (
      <div className="bg-[#FFF7E2] min-h-screen text-center py-20">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </div>
    );
  }

  const productImages = [
    "/assets/summerCollectionImg1.png",
    "/assets/summerCollectionImg1.png",
    "/assets/summerCollectionImg1.png",
  ];

  return (
    <div className="bg-[#FFF7E2]">
      <Header />
      <Category />

      {/* Main Product Section */}
      <div
        className="w-full mx-auto px-4 sm:px-6 md:px-10 py-10 flex flex-col md:flex-row gap-8"
        ref={productSectionRef}
      >
        <div className="flex flex-col md:w-1/2 w-full gap-6 items-center md:items-start">
          <img
            src={product.image}
            alt={product.title}
            className="rounded-md w-full max-w-md h-auto md:h-[550px] object-contain"
          />

          <div className="flex gap-4 overflow-x-auto pb-4">
            {productImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Product ${idx}`}
                className="w-28 h-28 md:w-40 md:h-40 rounded-xl object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="flex-1 w-full">
          <h1 className="text-lg sm:text-xl font-medium mb-2">
            {product.title}
          </h1>

          <div className="text-[#F79725] mb-1 text-2xl sm:text-3xl">
            {"★".repeat(Math.floor(product.rating))}{" "}
            <span className="text-sm sm:text-base text-gray-500 font-semibold">
              ({product.reviews})
            </span>
          </div>

          <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-5">
            ₹{product.price}.00
          </p>

          {/* Size Selection */}
          <div className="flex flex-wrap gap-2 mt-4">
            {product.size.map((size, index) => (
              <button
                key={index}
                onClick={() => setSelectedSize(size)}
                className={`py-2 px-4 rounded-lg text-sm sm:text-base transition-all ${
                  selectedSize === size
                    ? "bg-[#EBF9F4] border border-green-700 text-black"
                    : "bg-[#efefef] text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Quantity & Add to Cart */}
          <div className="w-full flex flex-col sm:flex-row items-center gap-4 my-8">
            <div className="w-full sm:w-1/2 flex justify-around items-center border rounded-lg px-4 py-2">
              <button
                onClick={decrement}
                className="text-2xl font-light text-center"
              >
                –
              </button>
              <span className="mx-4 w-8 text-base text-center">{quantity}</span>
              <button
                onClick={increment}
                className="text-2xl font-light text-center"
              >
                +
              </button>
            </div>

            <button className="w-full sm:w-1/2 bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
              Add to cart
            </button>
          </div>

          {/* Product Description */}
          <p className="text-gray-700 leading-relaxed my-8 text-sm sm:text-base">
            {product.description}
          </p>

          <ProductHighlight />
        </div>
      </div>

      <Rating />

      <div className="flex flex-col justify-center items-center mt-10 px-4 md:px-0 text-center">
        <h1 className="text-xl md:text-2xl font-semibold">
          People has also bought
        </h1>
        <SummerCollection />
      </div>

      <MeetOurExperts />
      <MobileAppPromo />
      <Footer />
    </div>
  );
}
