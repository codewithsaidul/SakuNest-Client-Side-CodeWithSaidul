import { HashLoader } from "react-spinners"
import useAuth from "../hooks/useAuth"
import { Navigate, useLocation } from "react-router-dom"


const PriveteRoute = ({ children }) => {

    const { user, loading } = useAuth()

    const location = useLocation()

    if (loading) {
        <div className="flex justify-center items-center min-h-[calc(100vh-70px)]">
            <HashLoader
                color="#36d7b7"
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }

    if (user) return children
    return <Navigate to='/signIn' state={location.pathname} replace={true} />
}

export default PriveteRoute