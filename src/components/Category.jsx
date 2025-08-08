const categories = [
  {
    label: "All",
    icon: <img src="/assets/All.svg" alt="All" className="w-14 h-14" />,
  },
  {
    label: "Hair",
    icon: <img src="/assets/Hair.svg" alt="Hair" className="w-14 h-14" />,
  },
  {
    label: "Skin",
    icon: <img src="/assets/Skin.svg" alt="Skin" className="w-14 h-14" />,
  },
  {
    label: "Digestion",
    icon: (
      <img src="/assets/Digestion.svg" alt="Digestion" className="w-14 h-14" />
    ),
  },
  {
    label: "Bones",
    icon: <img src="/assets/Bones.svg" alt="Bones" className="w-9 h-9" />,
  },
  {
    label: "Immunity",
    icon: (
      <img src="/assets/Immunity.svg" alt="Immunity" className="w-16 h-16" />
    ),
  },
  {
    label: "More",
    icon: <img src="/assets/More.svg" alt="More" className="w-7 h-7" />,
  },
];

const Category = () => {
  return (
    <section className="bg-[#FFF7E2] py-6">
      <div className="flex justify-center items-center gap-6 flex-wrap">
        {categories.map((category, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-[#D8E6DD] border-4 border-white flex items-center justify-center shadow">
              {category.icon}
            </div>
            <p className="text-sm font-medium text-[#2C2C2C]">
              {category.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
