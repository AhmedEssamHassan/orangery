import "./App.css";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App flex h-full min-h-screen animate-fadeIn relative">
      <Menu />
      <div className="flex-col items-center justify-center hidden sm:hidden md:hidden lg:flex w-full max-w-[70%] select-none border border-solid border-transparent">
        <div className="flex flex-col items-center fixed">
          <div className="mb-1.5 text-center">
            <img
              alt=""
              height="100"
              className="object-contain max-w-full h-[100px]"
              srcset="https://media.finedinemenu.com/fit-in/filters:strip_exif()/filters:format(webp)/640x320/W2nizmY83/75d5396c-5c1f-4ecc-9243-3aa2fff2aa03.jpeg 1x, https://media.finedinemenu.com/fit-in/filters:strip_exif()/filters:format(webp)/1280x640/W2nizmY83/75d5396c-5c1f-4ecc-9243-3aa2fff2aa03.jpeg 2x, https://media.finedinemenu.com/fit-in/filters:strip_exif()/filters:format(webp)/1920x960/W2nizmY83/75d5396c-5c1f-4ecc-9243-3aa2fff2aa03.jpeg 3x"
              src="https://media.finedinemenu.com/filters:strip_exif()/filters:format(webp)/150x0/W2nizmY83/75d5396c-5c1f-4ecc-9243-3aa2fff2aa03.jpeg"
            />
          </div>
          <div className="w-full h-[2px] bg-[#000000b4] max-w-[400px] my-2.5"></div>
          <p className="font-semibold text-[22px] leading-[30px] text-primary">
            The Orangery Al Liwan
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
