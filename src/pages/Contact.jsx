import ContactBanner from "../components/ContactBanner"
import ContactLocation from "../components/ContactLocation"


const Contact = () => {
  return (
    <div>
         <div>
            <ContactBanner/>
         </div>

         <div className="my-20">
            <ContactLocation/>
         </div>
    </div>
  )
}

export default Contact