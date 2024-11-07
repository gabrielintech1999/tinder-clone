import { Outlet } from "react-router-dom";
import redTinderLogo from "./assets/color-logo-tinder.png";

export default function RootLayout() {
  return (
    <div>
      <header className=" text-white flex justify-between items-center p-2 absolute top-0 left-0 w-full z-10 fi">
        <div>
          <img src={redTinderLogo} alt="tinder logo" className="w-28" />
        </div>

        <div>
          <button className="py-2 px-4 rounded bg-white text-red-600 font-bold">
            Log in
          </button>
        </div>
      </header>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
