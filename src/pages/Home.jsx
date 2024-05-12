import { useLoaderData } from "react-router-dom"
import Banner from "../components/Banner"
import ContactForm from "../components/ContactForm"
import MyMaps from "../components/MyMaps"
import Newsletter from "../components/Newsletter"
import ReviewSlider from "../components/ReviewSlider"
import FeaturedRooms from "../components/FeaturedRooms"



const Home = () => {


  const rooms = useLoaderData() || [];
  

  const featuredRooms = rooms.filter(room => room.specialOffers !== '');


  return (
    <div>
        <div>
            <Banner/>
            <div className="my-20 px-4 sm:px-8 md:px-12 lg:px-16 mx-auto">
              <h2 className="text-5xl text-center text-primary font-title font-black">Featured Rooms</h2>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                {
                  featuredRooms.map(room => <FeaturedRooms key={room.id} room={room}/>)
                }
              </div>
            </div>
            <Newsletter/>
            <ReviewSlider/>
        </div>

        <div className="my-20">
          <div>
            <ContactForm/>
          </div>
          <MyMaps/>
        </div>
    </div>
  )
}

export default Home