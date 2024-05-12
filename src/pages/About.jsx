import { FaBath, FaCity, FaToilet, FaWifi } from 'react-icons/fa'
import BannerBG from '../../public/banerBG.jpg'
import { IoBed } from 'react-icons/io5'
import { IoMdLaptop } from 'react-icons/io'
import About1 from '../assets/room1.jpg'
import About2 from '../assets/room2.jpg'

const About = () => {
  return (
    <div>
      <div className="hero h-96" style={{ backgroundImage: `url(${BannerBG})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 w-full text-3xl sm:text-5xl md:text-8xl md:w-[700px] font-bold mx-auto">About US
            </h1>

          </div>
        </div>
      </div>

      <div className='py-20 pb-32 px-4 sm:px-8 md:px-12 lg:px-16 bg-[#e0e0e0]'>
        {/* Room Facilities  */}
        <div>
          <div className='mb-10'>
            <h2 className='text-3xl md:text-6xl mb-5 text-primary font-bold font-title text-center'>Wide Range of Facilities</h2>
            <p className='text-base text-gray-600 font-medium text-center'>Choose from a wide range of exclusive rooms, hotels, and apartments.</p>
          </div>


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>

            {/* Facility 1 */}
            <div className='shadow-outerShadow p-5 rounded-3xl'>
              <div className='mx-auto shadow-outerShadow p-5 w-20 h-20 text-primary flex justify-center items-center rounded-full duration-1000 hover:duration-1000 transition hover:shadow-innerShadow' >

                <IoBed size={30} />
              </div>

              <div className='mt-7 text-center'>
                <h3 className='text-2xl text-primary font-title font-semibold mb-3'>Comfortable Bedding</h3>
                <p className='text-base text-gray-500 font-normal'>Indulge in a restful night&apos;s sleep on our plush mattresses and premium linens. Our comfortable bedding ensures you wake up refreshed and ready to take on the day.</p>
              </div>
            </div>


            {/* Facility 2 */}
            <div className='shadow-outerShadow p-5 rounded-3xl'>
              <div className='mx-auto shadow-outerShadow p-5 w-20 h-20 text-primary flex justify-center items-center rounded-full duration-1000 hover:duration-1000 transition hover:shadow-innerShadow' >

                <FaBath size={30} />
              </div>

              <div className='mt-7 text-center'>
                <h3 className='text-2xl text-primary font-title font-semibold mb-3'>Modern Ensuite Bathroom</h3>
                <p className='text-base text-gray-500 font-normal'>Freshen up in style in our modern ensuite bathrooms. Equipped with sleek fixtures and luxurious amenities, our bathrooms offer a relaxing space to unwind and rejuvenate.</p>
              </div>
            </div>


            {/* Facility 3 */}
            <div className='shadow-outerShadow p-5 rounded-3xl'>
              <div className='mx-auto shadow-outerShadow p-5 w-20 h-20 text-primary flex justify-center items-center rounded-full duration-1000 hover:duration-1000 transition hover:shadow-innerShadow' >

                <FaWifi size={30} />
              </div>

              <div className='mt-7 text-center'>
                <h3 className='text-2xl text-primary font-title font-semibold mb-3'>High-Speed Wi-Fi</h3>
                <p className='text-base text-gray-500 font-normal'>Stay connected with our high-speed Wi-Fi access. Whether you&apos;re catching up on work or streaming your favorite shows, our reliable internet connection keeps you connected throughout your stay.</p>
              </div>
            </div>



            {/* Facility 4 */}
            <div className='shadow-outerShadow p-5 rounded-3xl'>
              <div className='mx-auto shadow-outerShadow p-5 w-20 h-20 text-primary flex justify-center items-center rounded-full duration-1000 hover:duration-1000 transition hover:shadow-innerShadow' >

                <IoMdLaptop size={30} />
              </div>

              <div className='mt-7 text-center'>
                <h3 className='text-2xl text-primary font-title font-semibold mb-3'>In-Room Entertainment</h3>
                <p className='text-base text-gray-500 font-normal'>Enjoy entertainment at your fingertips with our in-room amenities. Stream your favorite movies and shows on our flat-screen TVs or unwind with a selection of channels for your viewing pleasure.</p>
              </div>
            </div>


            {/* Facility 5 */}
            <div className='shadow-outerShadow p-5 rounded-3xl'>
              <div className='mx-auto shadow-outerShadow p-5 w-20 h-20 text-primary flex justify-center items-center rounded-full duration-1000 hover:duration-1000 transition hover:shadow-innerShadow' >

                <FaToilet size={30} />
              </div>

              <div className='mt-7 text-center'>
                <h3 className='text-2xl text-primary font-title font-semibold mb-3'>Complimentary Toiletries</h3>
                <p className='text-base text-gray-500 font-normal'>Freshen up with ease using our complimentary toiletries. Stocked with essential amenities such as shampoo, conditioner, and body wash, our toiletry kits ensure you have everything you need for a comfortable stay.</p>
              </div>
            </div>


            {/* Facility 5 */}
            <div className='shadow-outerShadow p-5 rounded-3xl'>
              <div className='mx-auto shadow-outerShadow p-5 w-20 h-20 text-primary flex justify-center items-center rounded-full duration-1000 hover:duration-1000 transition hover:shadow-innerShadow' >

                <FaCity size={30} />
              </div>

              <div className='mt-7 text-center'>
                <h3 className='text-2xl text-primary font-title font-semibold mb-3'>Convenient Room Service</h3>
                <p className='text-base text-gray-500 font-normal'>Indulge in delicious meals from the comfort of your room with our convenient room service options. Whether it&apos;s breakfast in bed or a late-night snack, our menu offers a variety of tempting choices delivered straight to your door.</p>
              </div>
            </div>



          </div>



          <div className='flex flex-col lg:flex-row items-center gap-10 my-20'>
            <div className='lg:w-1/2 text-center lg:text-start'>
              <h3 className='text-2xl sm:text-3xl md:text-5xl text-black font-title font-bold mb-3'>Offering a series of comfortable and lavish hotels Rooms</h3>
              <p className='text-gray-500 font-medium mb-6'>All our hotels are fabulous, they are destinations unto themselves. We have crossed the globe to bring you only the best.</p>
              <button className='text-white bg-primary py-3 px-7 rounded-full'>Book Now</button>
            </div>

            <div className='lg:w-1/2'>
              <figure className='flex gap-10 md:gap-5 lg:gap-10'>
                <img src={About1} className='w-[45%] rounded-lg md:w-1/2' alt="" />
                <img src={About2} className='w-[45%] rounded-lg md:w-1/2' alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About