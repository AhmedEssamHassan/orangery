import React, { useRef, useState, useEffect } from "react";
import categories from "../data";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const menuBarRef = useRef(null);
  const menuRef = useRef(null);
  const sectionsRefs = useRef({});
  const isClickingCategory = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickingCategory.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute("data-category");
            setActiveCategory(category);

            const menuBar = menuBarRef.current;
            const activeTab = document.getElementById(category);
            if (menuBar && activeTab) {
              menuBar.scrollLeft =
                activeTab.offsetLeft -
                menuBar.offsetWidth / 2 +
                activeTab.offsetWidth / 2;
            }
          }
        });
      },
      {
        root: menuRef.current,
        threshold: 0.6,
      }
    );

    const sections = Object.values(sectionsRefs.current);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleCategoryClick = (categoryId) => {
    isClickingCategory.current = true;
    setActiveCategory(categoryId);

    const sectionRef = sectionsRefs.current[categoryId];
    if (sectionRef && menuRef.current) {
      const menuBarHeight = menuBarRef.current?.offsetHeight || 0;
      const sectionTop = sectionRef.offsetTop - menuBarHeight;
      menuRef.current.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      const menuBar = menuBarRef.current;
      const activeTab = document.getElementById(categoryId);
      if (menuBar && activeTab) {
        menuBar.scrollLeft =
          activeTab.offsetLeft -
          menuBar.offsetWidth / 2 +
          activeTab.offsetWidth / 2;
      }
    }

    setTimeout(() => {
      isClickingCategory.current = false;
    }, 500);
  };

  return (
    <div
      id="menu"
      ref={menuRef}
      className="w-full xs:max-w-full lg:max-w-[30%] h-screen overflow-scroll lg:relative flex flex-col justify-start flex-1 md:border-r md:border-solid md:border-r-[#0000004D] lg:border-r lg:border-solid lg:border-r-[#0000004D]"
    >
      {/* Menu Bar */}
      <div
        id="menu-bar"
        className="flex fixed top-0 w-full xs:max-w-full lg:max-w-[30%] z-50 bg-white shadow-md gap-4 p-4 overflow-x-auto scrollbar-hide"
        ref={menuBarRef}
      >
        {categories.map((category) => (
          <div
            key={category.id}
            id={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`px-4 py-2 rounded-full cursor-pointer text-sm ${
              activeCategory === category.id
                ? "bg-orange-400 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-orange-300 hover:text-white"
            }`}
          >
            {category.label}
          </div>
        ))}
      </div>

      {/* Menu Items */}
      <div className="mt-20 p-4">
        {categories.map((category) => (
          <div
            key={category.id}
            data-category={category.id}
            className="menu-section mb-10"
            ref={(el) => (sectionsRefs.current[category.id] = el)}
          >
            {/* Header Section */}
            <div className="mb-4">
              {category.headerData.image && (
                <img
                  src={category.headerData.image}
                  alt={category.headerData.title}
                  className="w-full h-auto mb-4 rounded-lg"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">
                {category.headerData.title}
              </h2>
              <p className="text-gray-500 text-sm">
                {category.headerData.hint}
              </p>
            </div>

            {/* Items Section */}
            {category.items.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                <span className="block mt-2 font-semibold text-gray-700">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
