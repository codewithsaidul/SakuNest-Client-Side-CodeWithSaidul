import axios from "axios";
import useAuth from "../hooks/useAuth"
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import moment from "moment";


const MyBookings = () => {

    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]) || [];

    useEffect(() => {
        getMyBookings()
    }, [user?.email])

    const getMyBookings = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/bookings/${user?.email}`);
        setMyBookings(data)
    }


    const handleBookingCancel = async(id, bookTime, status) => {
        
        try {

           
            const bookingTime = moment(bookTime);
            const currentTime = moment()
            const difference = currentTime.diff(bookingTime, 'minute')
            
            
            if ( difference >= 24) {

                await axios.patch(`${import.meta.env.VITE_API_URL}/bookRoom/${id}`, { status})
                
                toast.success("Booking Cancelled Successfull!")
                // Refresh UI
                getMyBookings()
            } else {
                toast.error("You Cann't Cancel a Booking If Less Then 24 Hours Are Remaining ")
            }
        
        } catch  {
            toast.error("Something Went Wrog")
        }
    }

    return (
        <div>
            <div className="px-4 sm:px-8 md:px-12 lg:px-16  mx-auto my-20">
                <section className="container px-4 mx-auto">
                    <div className="flex items-center gap-x-3">
                        <h2 className="text-lg font-medium text-gray-800 dark:text-white">My Bookings</h2>

                        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{myBookings.length}</span>
                    </div>

                    <div className="flex flex-col mt-6">
                        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                        <thead className="bg-gray-50 dark:bg-gray-800">
                                            <tr>
                                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                    <div className="flex items-center gap-x-3">
                                                        <span>Room Name</span>
                                                    </div>
                                                </th>


                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Email address</th>

                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Price</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Date</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Status</th>
                                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Action</th>


                                            </tr>
                                        </thead>


                                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                                            {
                                                myBookings.map(booking =>
                                                    <tr key={booking._id}>
                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            <div className="inline-flex items-center gap-x-3">

                                                                <div className="flex items-center gap-x-2">
                                                                    <div>
                                                                        <h2 className="font-medium text-gray-800 dark:text-white ">{booking.roomName}</h2>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                                <h2 className="text-sm font-normal text-emerald-500">{booking.email}</h2>
                                                            </div>
                                                        </td>


                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">${booking.price}</td>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{new Date(booking.bookingDate).toLocaleDateString()}</td>
                                                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                            <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${booking.status === "Active" && "bg-blue-100/60 text-blue-500"} ${booking.status === "Cancelled" && "bg-red-100/60 text-red-500"}`}>
                                                                <span className={`h-1.5 w-1.5 rounded-full ${booking.status === "Active" && "bg-blue-500"} ${booking.status === "Cancelled" && "bg-red-500"}`}></span>
                                                                <h2 className="text-base font-normal">{booking.status}</h2>
                                                            </div>
                                                        </td>
                                                        
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center gap-x-6">
                                                                <button onClick={() => handleBookingCancel(booking._id, booking.bookingDate, "Cancelled")} disabled={booking.status === "Cancelled"} className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                                        <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                                    </svg>
                                                                </button>

                                                                <button disabled={booking.status === "Cancelled"} className="disabled:cursor-not-allowed text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>)
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>
        </div>
    )
}

export default MyBookings