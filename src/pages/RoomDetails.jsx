
import { Link, useLoaderData, useParams } from "react-router-dom"

import BannerBG from '../../public/banerBG.jpg'
import "react-datepicker/dist/react-datepicker.css";

const RoomDetails = () => {


  const rooms = useLoaderData();

  const { id } = useParams();
  const roomId = parseInt(id)


  const room = rooms.filter(room => room.id === roomId);

  return (


    <div>
      <div className="hero h-96 mb-20" style={{ backgroundImage: `url(${BannerBG})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 w-full text-3xl sm:text-5xl md:text-8xl md:w-[700px] font-bold mx-auto">{room[0].roomName}
            </h1>

          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-12 lg:px-16 mx-auto my-10">


        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
          <div className="w-full lg:w-1/2">

            <figure>
              <img src={room[0].image} className="w-full h-96 rounded-xl" alt="" />
            </figure>

          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">
              <div>
                <h2 className="flex flex-col text-3xl text-primary font-title font-bold">{room[0].roomName} <span className="text-xl text-gray-400 font-medium">Room Feature</span></h2>
              </div>

              <div className="flex flex-col">
                <h2 className="text-4xl text-black font-bold">From : $<span className="text-primary font-title">{room[0].pricePerNight}</span></h2>
                <p>Per Night</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
              <h2 className="text-xl font-medium text-gray-400">
                Room Size : <span className="text-2xl text-primary font-title font-semibold">{room[0].roomSize}</span>
              </h2>
              <h2 className="text-xl font-medium text-gray-400">
                Availability : <span className="text-2xl text-primary font-semibold">{room[0].availability}</span>
              </h2>
            </div>

            <div>
              <p className="mt-3 text-base text-gray-300">{room[0].description}</p>
            </div>

            <div className="mt-10">
              <Link to={`booking/${room[0].id}`} className="py-3 px-7 rounded-full bg-primary text-white font-title text-2xl">Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails