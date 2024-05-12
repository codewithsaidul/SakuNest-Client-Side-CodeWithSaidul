import { Link } from "react-router-dom"


const RoomCard = ({room}) => {
  return (
    <div>
        <div className="py-8 px-5 shadow-lg rounded-2xl">
                <Link to={`/rooms/${room.id}`}>
                    <img src={room.image} className="h-80 rounded-3xl" alt="room image" />
                </Link>

                <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
                    <h2 className="text-2xl text-primary font-title font-medium">{room.roomName}</h2>
                    <p className="text-xl text-gray-300 font-medium">Reviews : <span className="text-primary font-title">45</span></p>
                </div>
            </div>
    </div>
  )
}

export default RoomCard