import React from "react";

const Aside = ({ isOpen, toggleAside }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleAside}
      ></div>

      <div
        className={`flex flex-col fixed top-0 left-0 h-screen w-full xs:max-w-full lg:max-w-[30%] bg-white shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <button onClick={toggleAside} className="text-gray-700 text-xl">
            ✕
          </button>
        </div>

        <div className="flex flex-col justify-between flex-grow">
          <div className="w-full flex flex-col gap-y-8">
            <div className="w-full flex items-center justify-center text-center">
              <img
                alt=""
                className="object-contain w-full max-w-[210px] h-[118px] aspect-video"
                src="https://media.finedinemenu.com/fit-in/filters:strip_exif()/filters:format(webp)/640x320/filters:upscale()/W2nizmY83/75d5396c-5c1f-4ecc-9243-3aa2fff2aa03.jpeg"
              />
            </div>
            <div className="w-full flex flex-col px-6 gap-y-6">
              <button
                type="button"
                className="text-start text-lg font-semibold text-primary"
              >
                Language (EN)
              </button>
              <a href="tel:+973 166 389 19">
                <button
                  type="button"
                  className="text-start text-lg font-semibold text-primary"
                >
                  Call The Orangery Al Liwan
                </button>
              </a>
              <div className="w-full flex justify-between items-center">
                <div className="w-full flex h-px bg-black/10"></div>
                <div className="w-full flex h-px bg-black/10"></div>
              </div>
              <button
                type="button"
                className="text-start text-lg font-semibold text-primary"
              >
                <div className="w-full flex items-center justify-center gap-x-2">
                  <span>
                    <svg
                      stroke="#7b646c"
                      fill="#7b646c"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="text-primary h-6 w-6 transition-[transform]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
                      <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
                    </svg>
                  </span>
                  <span className="text-lg font-semibold text-primary">
                    Login
                  </span>
                </div>
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <div
              id="social-media-icons"
              className="w-full flex flex-wrap items-center justify-center mx-auto p-2"
            >
              <button
                id="instagram"
                type="button"
                className="socialMediaIcons___StyledButton2-sc-15uenjk-2 gmmBEg w-[40px] h-[40px] m-2 flex items-center justify-center rounded-full border border-solid hocus:bg-highlight_color-100"
              >
                <div className="socialMediaIcons___StyledDiv-sc-15uenjk-3 fwXLUi">
                  <svg
                    stroke="#7b646c"
                    fill="#7b646c"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </div>
              </button>
              <button
                id="website"
                type="button"
                className="socialMediaIcons___StyledButton2-sc-15uenjk-2 gmmBEg w-[40px] h-[40px] m-2 flex items-center justify-center rounded-full border border-solid hocus:bg-highlight_color-100"
              >
                <div className="socialMediaIcons___StyledDiv-sc-15uenjk-3 fwXLUi">
                  <svg
                    stroke="#7b646c"
                    fill="#7b646c"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="20px"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aside;
