import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            index: true,
            element: <Home/>
        }, 
        {
          path: '/about', 
          element: <About/>
        }
      ]
    },
  ]);



  export default router;