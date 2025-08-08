import DoctorCard from "./DoctorCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const doctors = [
  {
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: 25,
    tag: "Skin Specialist",
    rating: 4.5,
    image: "/assets/doctorImg.svg",
  },
  {
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: 25,
    tag: "Skin Specialist",
    rating: 4.5,
    image: "/assets/doctorImg.svg",
  },
  {
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: 25,
    tag: "Skin Specialist",
    rating: 4.5,
    image: "/assets/doctorImg.svg",
  },
];

export default function MeetOurExperts() {
  return (
    <section className="text-center py-10 bg-[#FEFEFF] px-4 sm:px-6 md:px-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
        Meet our Experts
      </h2>

      <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center justify-center gap-6 sm:gap-8 md:gap-10 overflow-x-auto sm:overflow-visible no-scrollbar">
        {doctors.map((doc, i) => (
          <DoctorCard key={i} {...doc} />
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-6">
        <span className="w-3 h-3 rounded-full bg-green-800" />
        <span className="w-3 h-3 rounded-full bg-gray-300" />
        <span className="w-3 h-3 rounded-full bg-gray-300" />
      </div>

      <button className="flex justify-center items-center py-3 sm:py-4 px-4 sm:px-6 bg-[#F1F5F2] border border-[#3A653A] rounded-lg mx-auto mt-8 sm:mt-10 font-semibold sm:font-bold text-[#3A653A] text-base sm:text-xl">
        Find more experts <MdOutlineKeyboardArrowRight className="ml-1" />
      </button>
    </section>
  );
}
