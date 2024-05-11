import { Link } from 'react-router-dom'
import NotFound from '../assets/notFound.jpg'

const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div>
            <figure>
                <img src={NotFound} className='h-[500px]' alt="not found image" />
            </figure>

            <Link to='/' className='flex justify-center mt-14'>
                <button className='py-3 px-8 bg-primary text-center rounded-full text-xl font-title text-white font-medium'>Go Back To Home</button>
            </Link>
        </div>
    </div>
  )
}

export default ErrorPage