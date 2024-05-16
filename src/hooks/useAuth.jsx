import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
const useAuth = () => {

    const AuthInfo = useContext(AuthContext)

  return AuthInfo 
}

export default useAuth