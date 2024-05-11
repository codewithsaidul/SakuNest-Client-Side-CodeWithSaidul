import BannerBG from '../../public/banerBG.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[calc(100vh-116px)]" style={{ backgroundImage: `url(${BannerBG})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 w-full text-2xl font-title sm:text-4xl md:text-6xl md:w-[700px] font-bold mx-auto">Discover Your Perfect Stay with <span className='text-primary'>SakuNest</span>
                        </h1>
                        <p className="mb-5 text-base sm:text-xl w-full text-gray-300 font-medium md:w-[700px] mx-auto">Find the Ideal Accommodation for Your Next Adventure. Explore a Wide Range of Rooms, Apartments, and Villas. Book Now for Unforgettable Experiences!</p>
                        <button className="py-3 px-7 bg-transparent border rounded-full text-2xl font-semibold hover:bg-primary hover:border-primary text-white duration-500 hover:duration-500">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner