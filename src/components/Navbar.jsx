import { Link, NavLink } from "react-router-dom"


const Navbar = () => {

    // Nav Menu for Desktop or Larger Screen
    const navLinks = <>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary text-xl font-bold font-title border-t-4 border-primary duration-300' : 'text-gray-500 text-xl font-bold font-title border-0 duration-300'}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-primary text-xl font-bold font-title border-t-4 border-primary duration-300' : 'text-gray-500 text-xl font-medium border-0 duration-300'}>About Us</NavLink>
        </li>
        <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-primary text-xl duration-300 font-bold font-title border-t-4 border-primary' : 'text-gray-500 text-xl font-medium border-0 duration-300'}>Contact Us</NavLink>
        </li>
    </>

    // Nav Menu for Mobile & tablet
    const navLinksMobile = <>
        <li>
            <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary text-xl font-bold font-title border-b-4 border-primary duration-300' : 'text-gray-500 text-xl font-bold font-title border-0 duration-300'}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'text-primary text-xl font-bold font-title border-b-4 border-primary duration-300' : 'text-gray-500 text-xl font-medium border-0 duration-300'}>About Us</NavLink>
        </li>
        <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-primary text-xl duration-300 font-bold font-title border-b-4 border-primary' : 'text-gray-500 text-xl font-medium border-0 duration-300'}>Contact Us</NavLink>
        </li>
    </>

    return (
        <div className="bg-base-100 shadow-md">
            <div className="navbar w-full px-4 sm:px-8 md:px-12 lg:px-20 mx-auto">

                <div className="navbar-start">
                    

                    <a className="text-2xl sm:text-3xl  font-bold font-title text-primary">SakuNest</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link>
                        <button className="py-3 px-6 bg-primary text-white text-xl rounded-[50px_100px_50px_10px]">Sign IN</button>
                    </Link>
                    


                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                        <ul tabIndex={0} className="flex flex-col items-center space-y-5 right-0 dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinksMobile}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar