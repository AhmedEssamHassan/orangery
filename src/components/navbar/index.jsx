import React from "react";

function Navbar({ toggleAside }) {
  return (
    <div className="h-12 w-full py-3 px-4 flex items-center justify-between gap-3 top-0 inset-x-0 shadow-[0_3px_3px_0_rgba(0,_0,_0,_0.1)] bg-[#7B646C]">
      <div className="min-w-[60px] h-6">
        <button type="button">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="min-w-[24px] min-h-[24px] cursor-pointer text-white transition-[transform] duration-300 active:-translate-x-1.5"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
      </div>
      <span className="text-white text-base font-bold text-center text-ellipsis whitespace-nowrap overflow-hidden">
        The Orangery Al Liwan
      </span>
      <div className="min-w-[60px] h-6 flex justify-end gap-x-3">
        <button type="button" onClick={toggleAside}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="min-w-[24px] min-h-[24px] text-white"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
