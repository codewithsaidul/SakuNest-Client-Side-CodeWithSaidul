import { useLoaderData, useNavigate } from "react-router-dom"
import BannerBG from '../../public/banerBG.jpg'
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


const Booking = () => {

    const [startDate, setStartDate] = useState(new Date());


    const { user } = useAuth()
    const booking = useLoaderData();


    const navigate = useNavigate()

    const handleBooking = async (e) => {
        e.preventDefault();

        const form = e.target;
        const roomName = form.roomName.value;
        const email = form.email.value;
        const price = form.price.value;
        const bookingDate = new Date(startDate).toLocaleString()
        const roomId = booking._id;
        const status = "Active";

        const bookings = { roomName, email, price, bookingDate, roomId, status }

        try {
            Swal.fire({
                title: roomName,
                text: booking.description.slice(0, 116),
                footer: `Room Price Per Night $${price}`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Confirm booking"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/bookings`, bookings);

                    if (data.insertedId) {
                        Swal.fire({
                            title: "Success!",
                            text: "Your Booking Was Successfull.",
                            icon: "success"
                        });
                        navigate('/myBookings')
                    }
                }
            });

        } catch (err) {
            toast.error("Something Went Wrong")
        }
    }

    return (
        <div>


            <div className="application">
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta name="title" content="Your Room Booking Website" />
                    <meta name="description" content="Find the perfect accommodation for your next adventure! Explore a wide range of rooms, suites, and apartments with our easy-to-use booking platform." />
                    <title>SakuNest || Booking</title>
                </Helmet>
            </div>

            <div className="hero h-96 mb-20" style={{ backgroundImage: `url(${BannerBG})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 w-full text-2xl sm:text-4xl md:text-6xl md:w-[700px] font-bold mx-auto">Book  A Room
                        </h1>

                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center my-20">
                <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Booking : {booking.roomName}</h2>

                    <form onSubmit={handleBooking}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Room Name</label>
                                <input id="username" type="text" name="roomName" defaultValue={booking.roomName} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Email Address</label>
                                <input id="emailAddress" type="email" name="email" defaultValue={user?.email} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Price</label>
                                <input id="password" type="text" name="price" defaultValue={booking.pricePerNight} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>


                            <div>
                                <label className="text-gray-700 dark:text-gray-200">Password</label>
                                <div className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
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

export default Booking