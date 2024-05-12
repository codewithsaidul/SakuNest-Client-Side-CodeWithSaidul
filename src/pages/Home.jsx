import Banner from "../components/Banner"
import ContactForm from "../components/ContactForm"
import MyMaps from "../components/MyMaps"
import Newsletter from "../components/Newsletter"
import ReviewSlider from "../components/ReviewSlider"



const Home = () => {
  return (
    <div>
        <div>
            <Banner/>
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