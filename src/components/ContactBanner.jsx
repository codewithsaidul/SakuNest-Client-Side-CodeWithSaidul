import BannerBG from '../../public/banerBG.jpg'

const ContactBanner = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: `url(${BannerBG})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 w-full text-3xl sm:text-5xl md:text-8xl md:w-[700px] font-bold mx-auto">Contact US
                        </h1>

                        <h3 className="mb-5 w-full text-xl font-title sm:text-3xl md:text-4xl md:w-[700px] font-bold mx-auto">Get In Touch
                        </h3>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactBanner