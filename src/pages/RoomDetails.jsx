import { useLoaderData, useParams } from "react-router-dom"


const RoomDetails = () => {

    const rooms = useLoaderData() || [];
    
    const {id} = useParams();
    const roomId = parseInt(id)
    

    const room = rooms.filter(room => room.id === roomId);
    console.log(room)

  return (
    <div>RoomDetails</div>
  )
}

export default RoomDetails