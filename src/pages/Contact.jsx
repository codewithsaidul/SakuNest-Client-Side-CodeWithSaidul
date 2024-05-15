import { Helmet } from "react-helmet"
import ContactBanner from "../components/ContactBanner"
import ContactForm from "../components/ContactForm"

import MyMaps from "../components/MyMaps"


const Contact = () => {
    return (
        <div>
             <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="title" content="Your Room Booking Website" />
                    <meta name="description" content="Find the perfect accommodation for your next adventure! Explore a wide range of rooms, suites, and apartments with our easy-to-use booking platform." />
                    <title>SakuNest || Contact</title>
                </Helmet>
            </div>
            <div>
                <ContactBanner />
            </div>

            <div className="my-20">
                <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                    <div>
                        <ContactForm />
                    </div>
                    <div className="px-0 lg:px-16 w-full lg:w-[50%]">
                        <MyMaps />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact