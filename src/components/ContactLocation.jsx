import ContactForm from "./ContactForm"
import MyMaps from "./MyMaps"


const ContactLocation = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            <div>
                <ContactForm/>
            </div>
            <div className="px-0 lg:px-16 w-full lg:w-[50%]">
                <MyMaps/>
            </div>
        </div>
    </div>
  )
}

export default ContactLocation