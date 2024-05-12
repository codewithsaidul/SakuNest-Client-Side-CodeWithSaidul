import { IoIosSend } from 'react-icons/io'
import NewsletterIMg from '../../public/banerBG.jpg'

const Newsletter = () => {
  return (
    <div className='px-4 sm:px-8 md:px-12 lg:px-16 my-20'>
        <div className='flex flex-col lg:flex-row items-center gap-10'>
            <div className='w-full lg:w-1/2'>
                <h2 className='text-xl sm:text-2xl md:text-4xl text-center mb-5 text-primary font-title font-semibold'>SakuNest Insider: Your Gateway to Exclusive Offers and Travel Insights</h2>
                <p className='text-base text-center font-normal text-gray-300 mb-5'>Subscribe to SakuNest for the Latest Updates on Exciting Destinations, Insider Tips, and Special Deals. Don&apos;t Miss Out on Your Next Perfect Stay!</p>
                <div className='py-2 px-4 flex justify-between items-center border rounded-full'>
                    <input type="email" placeholder='Type Your Email' className='w-full outline-none py-3 px-1' />
                    <IoIosSend size={24} className='text-primary font-bold' />
                </div>
            </div>
            <figure className='w-full lg:w-1/2'>
                <img src={NewsletterIMg} className='rounded-3xl' alt="" />
            </figure>
        </div>
    </div>
  )
}

export default Newsletter