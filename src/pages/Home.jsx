import Banner from "../components/Banner"

import MyMaps from "../components/MyMaps"


const Home = () => {
  return (
    <div>
        <div>
            <Banner/>
        </div>

        <div className="my-20">
          <MyMaps/>
        </div>
    </div>
  )
}

export default Home