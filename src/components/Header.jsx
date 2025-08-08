import { ShoppingCart, Search } from "lucide-react";
import InstantFreeCall from "./InstantFreeCall";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full">
      <InstantFreeCall />
      <Navbar />

      {/* Search Section */}
      <section
        className="relative bg-cover bg-no-repeat py-6 px-4 min-h-[180px]"
        style={{
          backgroundImage: `url(/assets/header-bg.png)`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center text-[#2C2C2C]">
          <h2 className="text-4xl font-bold mb-8">Store</h2>

          <div className="flex justify-center items-center gap-4">
            {/* Search Box */}
            <div className="flex items-center w-full max-w-xl bg-white rounded-md px-4 py-2 shadow">
              <Search className="text-black" size={20} />
              <input
                type="text"
                placeholder="Search for Kuntal Care"
                className="w-full outline-none px-3 text-black"
              />
            </div>

            {/* Cart Icon */}
            <button className="p-3 rounded-lg bg-white shadow">
              <ShoppingCart className="text-black" size={20} />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
