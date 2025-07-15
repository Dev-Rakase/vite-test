import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="w-full bg-[#FCFCFC]">
      <Navbar />
      <Outlet />
    </div>
  );
}
