import { Star, GraduationCap, Link } from "lucide-react";

const DoctorCard = ({ name, title, experience, tag, image, rating }) => {
  return (
    <div className="bg-[#fdf2d6] rounded-3xl w-[280px] flex flex-col items-center pt-6 shadow-md">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
          <span>{rating}</span>
          <Star size={14} className="text-yellow-400" />
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{title}</p>

        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-700">
          <GraduationCap size={16} />
          <span>{experience} years of experience</span>
        </div>

        <div className="bg-[#eee9d1] text-green-800 text-sm flex items-center justify-center gap-2 px-4 py-1 mt-3 rounded-full w-fit mx-auto">
          <Link size={14} />
          <span>{tag}</span>
        </div>
      </div>

      <button className="mt-6 bg-[#3A653A] hover:bg-green-900 text-white py-4 px-6 rounded-b-3xl w-full">
        Book a session
      </button>
    </div>
  );
};

export default DoctorCard;
