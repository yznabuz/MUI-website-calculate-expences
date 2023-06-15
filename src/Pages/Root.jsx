import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";

export default function Root() {
  return (
    <div>
      <Header />
      <SideBar />

      <Outlet />
    </div>
  );
}
