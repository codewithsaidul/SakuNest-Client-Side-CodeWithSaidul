
import BannerBG from '../../public/banerBG.jpg'
import { IoCloseSharp } from 'react-icons/io5'

const Modal = ({ setShowModal }) => {

    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center z-50">
            <div className="card sm:w-[45%] bg-base-100 shadow-xl">
                <figure><img src={BannerBG} alt="Shoes" /></figure>
                <div className="p-5">

                    <p>Treat yourself to a weekend escape! Book a Friday and Saturday night stay and get <span className='text-primary text-2xl font-title'>10%</span> off your entire booking.</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => setShowModal(false)} className='absolute top-3 right-3 text-white p-1 bg-primary rounded-full'>
                            <IoCloseSharp size={30} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal