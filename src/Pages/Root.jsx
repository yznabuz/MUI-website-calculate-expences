import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header>Header</header>
      <Outlet />
    </div>
  );
}
