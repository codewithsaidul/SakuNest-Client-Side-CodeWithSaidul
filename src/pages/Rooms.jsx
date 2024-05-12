import { useLoaderData } from 'react-router-dom'
import BannerBG from '../../public/banerBG.jpg'
import RoomCard from '../components/RoomCard'

const Rooms = () => {

    const rooms = useLoaderData()


    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url(${BannerBG})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 w-full text-3xl sm:text-5xl md:text-8xl md:w-[700px] font-bold mx-auto">All Rooms
                        </h1>

                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 px-4 sm:px-8 md:px-12 lg:px-16 mx-auto'>
                {
                    rooms.map(room => <RoomCard key={room.id} room={room}/>)
                }
            </div>
        </div>
    )
}

export default Rooms