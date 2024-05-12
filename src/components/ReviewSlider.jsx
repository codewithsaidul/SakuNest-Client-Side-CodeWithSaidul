import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import user1 from '../assets/user/user1.jpg'
import user2 from '../assets/user/user2.jpg'
import user3 from '../assets/user/user4.jpg'
import user4 from '../assets/user/user3.jpg'
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const ReviewSlider = () => {
    return (
        <div className='my-20'>
            <div className='px-4 sm:px-8 md:px-12 lg:px-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}

                    loop={true}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    
                    {/* Slider 1 */}
                    <SwiperSlide>
                        <div className='py-5 px-7 shadow-custom bg-base-200 h-fit'>
                            <div className='p-10 text-center'>
                                <p className='text-base text-gray-600 font-normal'>My stay at the Cityscape Haven was truly remarkable. From the moment I entered the room, I was greeted with warmth and comfort. The cozy ambiance coupled with the breathtaking views of the city skyline made for an unforgettable experience. </p>
                                <div className='flex justify-center items-center mt-5'>
                                    <figure>
                                        <img className='w-20 h-20 rounded-full mr-5' src={user1} alt="" />
                                    </figure>
                                    <h3 className='text-2xl text-primary font-title font-semibold'>Jhon Doe</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slider 2 */}
                    <SwiperSlide>
                        <div className='py-5 px-7 shadow-custom bg-base-200 h-fit'>
                            <div className='p-10 text-center'>
                                <p className='text-base text-gray-600 font-normal'>I recently had the pleasure of staying at the Garden Terrace Retreat, and it exceeded all my expectations. The room was spacious and beautifully decorated, with a charming garden terrace that provided a tranquil retreat from the bustling city life. </p>
                                <div className='flex justify-center items-center mt-5'>
                                    <figure>
                                        <img className='w-20 h-20 rounded-full mr-5' src={user2} alt="" />
                                    </figure>
                                    <h3 className='text-2xl text-primary font-title font-semibold'>Alicy Helly</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    {/* Slider 3 */}
                    <SwiperSlide>
                        <div className='py-5 px-7 shadow-custom bg-base-200 h-fit'>
                            <div className='p-10 text-center'>
                                <p className='text-base text-gray-600 font-normal'>I recently had the pleasure of staying at the Garden Terrace Retreat, and it exceeded all my expectations. The room was spacious and beautifully decorated, with a charming garden terrace that provided a tranquil retreat from the bustling city life. </p>
                                <div className='flex justify-center items-center mt-5'>
                                    <figure>
                                        <img className='w-20 h-20 rounded-full mr-5' src={user3} alt="" />
                                    </figure>
                                    <h3 className='text-2xl text-primary font-title font-semibold'>David Johnson</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                    {/* Slider 4 */}
                    <SwiperSlide>
                        <div className='py-5 px-7 shadow-custom bg-base-200 h-fit'>
                            <div className='p-10 text-center'>
                                <p className='text-base text-gray-600 font-normal'>My stay at the Ocean Vista Suite was simply magical. From the moment I stepped onto the ocean-view balcony, I was mesmerized by the breathtaking vistas that stretched out before me. </p>
                                <div className='flex justify-center items-center mt-5'>
                                    <figure>
                                        <img className='w-20 h-20 rounded-full mr-5' src={user4} alt="" />
                                    </figure>
                                    <h3 className='text-2xl text-primary font-title font-semibold'>Emily Brown</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default ReviewSlider