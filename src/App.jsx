import "./App.css";
import Menu from "./components/menu";

function App() {
  return (
    <div className="App flex h-full min-h-screen animate-fadeIn relative">
      <Menu />
      <div className="flex-col items-center justify-center hidden sm:hidden md:hidden lg:flex w-full max-w-[70%] select-none border border-solid border-transparent">
        Home
      </div>
    </div>
  );
}

export default App;
