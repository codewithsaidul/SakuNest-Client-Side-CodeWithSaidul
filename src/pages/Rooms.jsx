import { useLoaderData } from 'react-router-dom'
import BannerBG from '../../public/banerBG.jpg'
import RoomCard from '../components/RoomCard'
import ReviewSlider from '../components/ReviewSlider'
import { Helmet } from 'react-helmet'

const Rooms = () => {

    const rooms = useLoaderData()


    return (
        <div>
            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="title" content="Your Room Booking Website" />
                    <meta name="description" content="Find the perfect accommodation for your next adventure! Explore a wide range of rooms, suites, and apartments with our easy-to-use booking platform." />
                    <title>SakuNest || Rooms</title>
                </Helmet>
            </div>

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
                    rooms.map(room => <RoomCard key={room._id} room={room} />)
                }
            </div>


            <ReviewSlider />
        </div>
    )
}

export default Rooms