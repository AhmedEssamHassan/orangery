import React, { useRef, useState, useEffect } from "react";
import categories from "../data";
import CategoryHeader from "./categoryHeader";
import ProductItem from "./productItem";
import CategoryTab from "./categoryTab";
import Aside from "../aside";
import Navbar from "../navbar";
import MenuHeader from "./menuHeader";
import Search from "./search";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [isMenuBarVisible, setIsMenuBarVisible] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(true);
  const menuBarRef = useRef(null);
  const menuRef = useRef(null);
  const sectionsRefs = useRef({});
  const isClickingCategory = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuRef.current) {
        if (menuRef.current.scrollTop > 100) {
          setIsMenuBarVisible(true);
        } else {
          setIsMenuBarVisible(false);
        }
      }
    };

    const menu = menuRef.current;
    if (menu) {
      menu.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (menu) {
        menu.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

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

  const toggleAside = () => {
    setIsAsideOpen((prev) => !prev);
  };

  return (
    <div
      id="menu"
      ref={menuRef}
      className="w-full xs:max-w-full lg:max-w-[30%] h-screen overflow-scroll lg:relative flex flex-col justify-start flex-1 md:border-r md:border-solid md:border-r-[#0000004D] lg:border-r lg:border-solid lg:border-r-[#0000004D]"
    >
      <Aside isOpen={isAsideOpen} toggleAside={toggleAside} />
      <Navbar toggleAside={toggleAside} />
      {/* menu header */}
      <MenuHeader />
      {/* search bar */}
      <Search />
      {/* Menu Bar */}
      {/* slider */}
      <div
        id="category-top"
        className=" flex gap-2 items-center p-4 w-full overflow-x-auto min-h-[130px] overflow-clip"
      >
        {categories.map((category) => (
          <button
            className="flex flex-col gap-2 items-center focus:outline-none"
            key={category.id}
            id={category.id}
            onClick={() => handleCategoryClick(category.id)}
          >
            <img
              alt=""
              src={category.headerData.img}
              className="h-[78px] mt-5 object-cover rounded-md max-w-[105px]"
            />
            <h4 className=" text-sm  font-bold text-primary break-all line-clamp-1">
              {category.label}
            </h4>
          </button>
        ))}
      </div>
      {/*  */}
      <div
        id="menu-bar"
        className={`w-full xs:max-w-full lg:max-w-[30%] flex items-stretch fixed top-0 shadow gap-2 px-4 bg-white z-50 p-4 overflow-x-auto overflow-y-hidden transition-opacity duration-300 ${
          isMenuBarVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        ref={menuBarRef}
      >
        {categories.map((category) => (
          <CategoryTab
            key={category.id}
            activeCategory={activeCategory}
            handleCategoryClick={handleCategoryClick}
            category={category}
          />
        ))}
      </div>
      {/* Menu Items */}
      <div className="mt-5 p-4">
        {categories.map((item) => {
          return (
            <div
              ref={(el) => (sectionsRefs.current[item.id] = el)}
              data-category={item.id}
              key={item.id}
            >
              <CategoryHeader item={item.headerData} />
              {item.items.map((data) => (
                <ProductItem key={data.id} data={data} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
