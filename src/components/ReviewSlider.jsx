import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
// import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';




const ReviewSlider = () => {

    const [reviews, setReviews] = useState([]) || [];


    useEffect(() => {
        getReviews();
    }, [])


    const getReviews = async () => {
        try {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/review`);
            setReviews(data)
        } catch {
            toast.error("Something Went Wrong")
        }
    }


    return (
        <div className='my-20'>
            <div className='px-4 sm:px-8 md:px-12 lg:px-16'>

                <div>
                    <h2 className='text-3xl text-primary font-title font-bold text-center mb-16'>What Client Say</h2>
                </div>

                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
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
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >

                    {/* Slider 1 */}
                    {
                        reviews.map(review =>
                            <SwiperSlide key={review?._id}>
                                <div className='py-5 px-7 shadow-custom bg-base-200 h-fit rounded-lg'>
                                    <div className='p-10 text-center'>
                                        <p className='text-base text-gray-600 font-normal'>{review?.review}</p>
                                        <div className='flex justify-center items-center mt-5'>
                                            <figure>
                                                <img className='w-20 h-20 rounded-full mr-5' src={review?.photo} alt="user image" />
                                            </figure>
                                            <h3 className='text-2xl text-primary font-title font-semibold'>{review?.name}</h3>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>)
                    }


                </Swiper>
            </div>
        </div>
    )
}

export default ReviewSlider