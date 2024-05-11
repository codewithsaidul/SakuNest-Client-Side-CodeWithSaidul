import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            index: true,
            element: <Home/>
        }, 
        {
          path: '/about', 
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    },
  ]);



  export default router;