import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Pages/Root";
import Home from "./Pages/Home/Home.jsx";
import Notfound from "./Pages/Notfound";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
