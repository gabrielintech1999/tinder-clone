import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header className="border-b-gray-300 border text-white flex justify-between items-center p-4">
        <div>Logo</div>

        <div>
          <button className="border py-2 px-4 rounded bg-white text-red-600 font-bold">
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
