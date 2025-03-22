import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages/homePage";
import { About } from "@/pages/about";
import { Services } from "@/pages/services";
import { Blog } from "@/pages/blog";
import { Faq } from "@/pages/faq";
import { Login } from "@/pages/auth/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
