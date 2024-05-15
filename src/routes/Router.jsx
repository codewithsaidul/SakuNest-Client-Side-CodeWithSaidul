import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import RoomDetails from "../pages/RoomDetails";
import Rooms from "../pages/Rooms";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Booking from "../pages/Booking";
import Reviews from "../pages/Reviews";
import MyBookings from "../pages/MyBookings";
import UpdateBooking from "../pages/UpdateBooking";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
            index: true,
            element: <Home/>,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/rooms`)
        }, 
        {
            path: '/rooms',
            element: <Rooms/>,
            loader: () => fetch(`${import.meta.env.VITE_API_URL}/rooms`)
        }, 
        {
            path: '/rooms/:id',
            element: <RoomDetails/>,
            loader: ( { params }) => fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`)
        }, 
        {
            path: '/booking/:id',
            element: <Booking/>,
            loader: ( { params }) => fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`)
        },
        {
            path: '/update/:id',
            element: <UpdateBooking/>,
            loader: ( { params }) => fetch(`${import.meta.env.VITE_API_URL}/booking/${params.id}`)
        },
        {
          path: '/about', 
          element: <About/>
        },
        {
          path: '/myBookings', 
          element: <MyBookings/>,
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/signIn',
          element: <Login/>
        },
        {
          path: '/register',
          element: <Register/>
        },
        {
          path: '/review/:id',
          element: <Reviews/>,
          loader: ( { params }) => fetch(`${import.meta.env.VITE_API_URL}/rooms/${params.id}`)
        },
        
      ]
    },
  ]);



  export default router;