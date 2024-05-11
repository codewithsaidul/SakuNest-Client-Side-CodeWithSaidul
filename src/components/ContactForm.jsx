

const ContactForm = () => {
  return (
    <div>
        <div className="text-center">
            <h2 className="text-3xl font-title font-semibold">Leave Us Your Info</h2>
            <p>And We Will Get Back To You.</p>
        </div>

        <div className="my-12 px-5 md:px-8 lg:px-16 w-full ">
            <form className="py-10 px-5 md:px-10 shadow-xl w-full grid grid-cols-12 gap-x-5 gap-y-10 lg:gap-x-10 rounded-3xl">

                {/* Full Name */}
                <div className="flex flex-col col-span-12 md:col-span-6">
                    <label className="text-2xl text-primary font-title font-medium">Full Name*</label>
                    <input type="text" className="py-3 px-5 mt-3 md:px-10 w-full border text-gray-400 rounded-full outline-primary " placeholder="Enter Full Name" required />
                </div>

                {/* Email */}
                <div className="flex flex-col col-span-12 md:col-span-6">
                    <label className="text-2xl text-primary font-title font-medium">Email*</label>
                    <input type="email" className="py-3 px-5 mt-3 md:px-10 w-full border text-gray-400 rounded-full outline-primary " placeholder="Enter Email" required />
                </div>


                <div className="flex flex-col col-span-12">
                    <label className="text-2xl text-primary font-title font-medium">Subject*</label>
                    <input type="text" className="py-3 px-5 mt-3 md:px-10 w-full border text-gray-400 rounded-full outline-primary " placeholder="Enter Subject" required />
                </div>
                <div className="flex flex-col col-span-12">
                    <label className="text-2xl text-primary font-title font-medium">Message*</label>
                    <textarea placeholder="Message" required className="w-full h-fit text-gray-400 border outline-primary py-3 px-5 mt-3 rounded-lg resize-none"></textarea>
                </div>

                <input type="submit" value="Send Message" className="col-span-12 py-3 px-6 bg-primary rounded-full text-xl font-title text-white" />
            </form>
        </div> 
    </div>
  )
}

export default ContactForm