import ContactBanner from "../components/ContactBanner"
import ContactForm from "../components/ContactForm"

import MyMaps from "../components/MyMaps"


const Contact = () => {
    return (
        <div>
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