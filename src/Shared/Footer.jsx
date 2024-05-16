import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"



const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-primary-content">
            <aside>
                <img className="w-14 h-14" src="/logo.png" alt="" />
                <h1 className="text-2xl min-[400px]:text-4xl font-bold">
                Stay Connected with <span className="text-primary font-title">SakuNest</span>
                </h1>
                <p>Join Our Community for Exclusive Deals, Travel Tips, and Updates. Your Comfortable Stay Starts Here.</p>
                
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-white p-4 bg-transparent border border-primary hover:bg-primary duration-1000 hover:duration-1000 rounded-full" href="https://facebook.com/codewithsaidull" target="_blank">
                        <FaFacebook size={24}/>
                    </a>
                    <a className="text-white p-4 bg-transparent border border-primary hover:bg-primary duration-1000 hover:duration-1000 rounded-full" href="https://instagram.com/dm__saidul" target="_blank">
                        <FaInstagram size={24}/>
                    </a>
                    <a className="text-white p-4 bg-transparent border border-primary hover:bg-primary duration-1000 hover:duration-1000 rounded-full" href="https://linkedin.com/in/codewithsaidul" target="_blank">
                        <FaLinkedin size={24}/>
                    </a>
                </div>
            </nav>

            <p className="flex flex-col sm:flex-row sm:items-center sm:justify-center text-base">Copyright &copy;  2024 - All right reserved <span className="text-xl font-bold text-primary font-title">CodeWithSaidul</span></p>
        </footer>
    )
}

export default Footer