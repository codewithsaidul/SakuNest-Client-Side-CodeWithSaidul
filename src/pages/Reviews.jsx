import { useLoaderData } from 'react-router-dom'
import BannerBG from '../../public/banerBG.jpg'
import useAuth from '../hooks/useAuth'
// import DatePicker from "react-datepicker";
import axios from 'axios'

import "react-datepicker/dist/react-datepicker.css";
// import { useState } from 'react';
import toast from 'react-hot-toast';

const Reviews = () => {

    // const [startDate, setStartDate] = useState(new Date());

    const { user } = useAuth()

    const room = useLoaderData();

    const handleReview = async e => {
        e.preventDefault();

        const form = e.target;
        const roomName = room.roomName
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const time = Date.now();
        const review = form.comment.value;
        const rating  = form.rating.value
        

       

        form.reset()

        const userReview = {
            roomName, name, email, photo, time, review, rating
        }

        


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, userReview);
            
            if(data.insertedId) return toast.success("Reviews Given Successfull!")
        } catch  {
            toast.error("Reviews Given Unsuccessfull")
        }
        
    }

    

    return (
        <div>
            <div className="hero h-96 mb-20" style={{ backgroundImage: `url(${BannerBG})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 w-full text-3xl sm:text-5xl md:text-8xl md:w-[700px] font-bold mx-auto">{room.roomName}
                        </h1>

                    </div>
                </div>
            </div>


            {/* Review Form */}
            <div className="flex justify-center items-center my-20">
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Review : {room.roomName}</h2>

                    <form onSubmit={handleReview}>
                        <div className="grid grid-cols-12 gap-6 mt-4 sm:grid-cols-2">
                            <div className='col-span-12 md:col-span-6'>
                                <label className="text-gray-700 dark:text-gray-200">Username</label>
                                <input id="username" name='name' value={user?.displayName} type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div className='col-span-12 md:col-span-6'>
                                <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                                <input id="emailAddress" type="email" name='email' value={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>


                            <div className='col-span-12 md:col-span-6'>
                                <label className="text-gray-700 dark:text-gray-200">Photo</label>
                                <input  type="text" name='photo' value={user?.photoURL} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>


                            <div className='col-span-12 md:col-span-6'>
                                <label className="text-gray-700 dark:text-gray-200">Photo</label>
                                <input type="number" name='rating' required min="1" max="5"  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>



                            <div className='col-span-12'>
                                <label className="text-gray-700 dark:text-gray-200">Comment</label>
                                <textarea name="comment" required className="block resize-none w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                            </div>


                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Reviews