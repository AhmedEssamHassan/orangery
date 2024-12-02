import React from "react";

function CategoryTab({ category, activeCategory, handleCategoryClick }) {
  return (
    <button
      key={category.id}
      id={category.id}
      onClick={() => handleCategoryClick(category.id)}
      className={`
        text-sm whitespace-nowrap font-semibold px-4 py-2 rounded border border-solid transition-[background] duration-500
         ${
           activeCategory === category.id
             ? "bg-primary text-white border-l-neutral-200"
             : "bg-white text-primary hover:bg-primary hover:text-white border-primary"
         }
        `}
    >
      {category.label}
    </button>
  );
}

export default CategoryTab;
