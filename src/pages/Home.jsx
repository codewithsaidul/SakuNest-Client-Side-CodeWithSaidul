import { useLoaderData } from "react-router-dom"
import Banner from "../components/Banner"
import ContactForm from "../components/ContactForm"
import MyMaps from "../components/MyMaps"
import Newsletter from "../components/Newsletter"
import ReviewSlider from "../components/ReviewSlider"
import FeaturedRooms from "../components/FeaturedRooms"
import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"
import Modal from "../components/Modal"



const Home = () => {


  const [showModal, setShowModal] = useState(false)

  const rooms = useLoaderData() || [];

  const featuredRooms = rooms.filter(room => room.specialOffers !== '');


  useEffect(() => {
    setShowModal(true)
  }, [])

  return (
    <div>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="title" content="Your Room Booking Website" />
          <meta name="description" content="Find the perfect accommodation for your next adventure! Explore a wide range of rooms, suites, and apartments with our easy-to-use booking platform." />
          <title>SakuNest || Home</title>
        </Helmet>
      </div>

    <div>
      {
        showModal && <Modal setShowModal={setShowModal} />
      }
    </div>

      <div>
        <Banner />
        <div className="my-20 px-4 sm:px-8 md:px-12 lg:px-16 mx-auto">
          <h2 className="text-5xl text-center text-primary font-title font-black">Featured Rooms</h2>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
            {
              featuredRooms.map(room => <FeaturedRooms key={room._id} room={room} />)
            }
          </div>
        </div>
        <Newsletter />
        <ReviewSlider />
      </div>

      <div className="my-20">
        <div>
          <ContactForm />
        </div>
        <MyMaps />
      </div>
    </div>
  )
}

export default Home