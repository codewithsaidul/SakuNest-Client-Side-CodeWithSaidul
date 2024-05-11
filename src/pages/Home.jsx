import Banner from "../components/Banner"
import ContactForm from "../components/ContactForm"

import MyMaps from "../components/MyMaps"



const Home = () => {
  return (
    <div>
        <div>
            <Banner/>
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