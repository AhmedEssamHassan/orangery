import React from "react";
import { FaSliders } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

function Search() {
  return (
    <div className="px-6 flex items-center gap-3 w-full">
      <div className="relative w-full">
        <input
          className="w-full h-10 rounded-full border-[#7b646c38] border px-9 focus:border-primary outline-none  placeholder:text-primary placeholder:text-[15px] caret-primary "
          placeholder="Search"
        />
        <span className="absolute left-3 top-3">
          <IoSearchOutline color="#7b646c80" size={18} />
        </span>
      </div>
      <span>
        <FaSliders color="#7b646c" size={18} />
      </span>
    </div>
  );
}

export default Search;
