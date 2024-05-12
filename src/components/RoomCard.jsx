import { Link } from "react-router-dom"


const RoomCard = ({room}) => {
  return (
    <div>
        <div className="py-8 px-5 shadow-lg rounded-2xl">
                <figure>
                    <img src={room.image} className="h-80 rounded-3xl" alt="room image" />
                </figure>

                <div>
                    <h2 className="text-lg text-gray-300 font-medium  mt-7">{room.description}</h2>
                    <Link to={`/rooms/${room.id}`}>
                        <button className="text-white text-lg font-title bg-primary py-3 px-7 rounded-full mt-5">Book Now</button>
                    </Link>
                </div>
            </div>
    </div>
  )
}

export default RoomCard