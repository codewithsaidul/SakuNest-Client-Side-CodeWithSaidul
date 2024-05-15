
import { Link, useLoaderData } from "react-router-dom"

import BannerBG from '../../public/banerBG.jpg'
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";

const RoomDetails = () => {


  const room = useLoaderData();



  return (


    <div>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="title" content="Your Room Booking Website" />
          <meta name="description" content="Find the perfect accommodation for your next adventure! Explore a wide range of rooms, suites, and apartments with our easy-to-use booking platform." />
          <title>SakuNest || Update Booking</title>
        </Helmet>
      </div>

      <div className="hero h-96 mb-20" style={{ backgroundImage: `url(${BannerBG})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 w-full text-3xl sm:text-5xl md:text-8xl md:w-[700px] font-bold mx-auto">{room.roomName}
            </h1>

          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 mx-auto my-10">


        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
          <div className="w-full lg:w-1/2">

            <figure>
              <img src={room.image} className="w-full h-96 rounded-xl" alt="" />
            </figure>

          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">
              <div>
                <h2 className="flex flex-col text-3xl text-primary font-title font-bold">{room.roomName} <span className="text-xl text-gray-400 font-medium">Room Feature</span></h2>
              </div>

              <div className="flex flex-col">
                <h2 className="text-4xl text-black font-bold">From : $<span className="text-primary font-title">{room.pricePerNight}</span></h2>
                <p>Per Night</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
              <h2 className="text-xl font-medium text-gray-400">
                Room Size : <span className="text-2xl text-primary font-title font-semibold">{room.roomSize}</span>
              </h2>
              <h2 className="text-xl font-medium text-gray-400 flex gap-5 items-center">
                Availability : <span className="text-2xl text-primary font-semibold">{room.availability ? <p>Avilable</p> : <p>Unavilable</p>}</span>
              </h2>
            </div>

            <div>
              <p className="mt-3 text-base text-gray-300">{room.description}</p>
            </div>

            <div className="mt-10">

              {
                room.availability
                  ? <Link to={`/booking/${room._id}`} className="py-3 px-7 rounded-full bg-primary text-white font-title text-2xl">Book Now</Link>
                  : <Link to={`/review/${room._id}`} className="py-3 px-7 rounded-full bg-primary text-white font-title text- 2xl">Give A Review</Link>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails