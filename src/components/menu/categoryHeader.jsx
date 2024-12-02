import React from "react";

const CategoryHeader = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-start gap-1 w-full">
      <div className="w-full">
        <img
          src={item.img}
          alt="category"
          width="300"
          height="200"
          className="rounded-lg w-full object-cover aspect-[3/1] "
          draggable="false"
        />
      </div>
      <p className="text-center text-primary text-xl font-bold my-1 ">
        {item.title}
      </p>
      <div className="w-full flex items-center border border-solid  rounded  text-sm p-2  bg-[#F0EFF0] text-[#7b646c80] border-[rgb(123 100 108 / 30%)]">
        {item.hint}{" "}
      </div>
    </div>
  );
};

export default CategoryHeader;
