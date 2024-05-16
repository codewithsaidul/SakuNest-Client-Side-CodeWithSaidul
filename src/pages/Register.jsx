import { Link, useLocation, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import axios from "axios";


const Register = () => {


    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state || '/'
    const { createUser, user, setUser } = useAuth()

    const handleNewUser = async e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        form.reset()

        try {
            const result = await createUser(email, password)
            await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
                email: result?.user?.email
            },
                {
                    withCredentials: true
                })

            updateProfile(result.user, {
                displayName: name,
                photoURL: photo
            })
            setUser({ ...user, displayName: name, photoURL: photo })
            toast.success("Account Created Successfully!")
            navigate(from, { replace: true })
           
        } catch {
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
                    <title>SakuNest || Register</title>
                </Helmet>
            </div>

            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form onSubmit={handleNewUser} className="w-full max-w-md shadow-md p-5 rounded-lg">


                        <div className="flex items-center justify-center mt-6">
                            <img className="w-auto h-7 sm:h-8 mr-5" src="https://merakiui.com/images/logo.svg" alt="" />

                            <h2 className="w-1/3 pb-1 font-medium font-title text-xl text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                                sign up
                            </h2>
                        </div>

                        {/* User Name */}
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                        </div>


                        {/* Photo URL */}
                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </span>

                            <input type="text" name="photo" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Photo URL" />
                        </div>


                        {/* Email */}
                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                        </div>


                        {/* Password */}
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type="password" name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                        </div>



                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                                Sign Up
                            </button>

                            <div className="mt-6 text-center ">
                                <Link to='/signIn'>
                                    <p className="text-sm text-primary hover:underline dark:text-yellow-500">
                                        Already have an account?
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Register