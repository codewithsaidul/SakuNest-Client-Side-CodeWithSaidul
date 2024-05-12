import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import RoomDetails from "../pages/RoomDetails";
import Rooms from "../pages/Rooms";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            index: true,
            element: <Home/>,
            loader: () => fetch('./rooms.json')
        }, 
        {
            path: '/rooms',
            element: <Rooms/>,
            loader: () => fetch(`./rooms.json`)
        }, 
        {
            path: '/rooms/:id',
            element: <RoomDetails/>,
            loader: () => fetch(`./rooms.json`)
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