import { createContext, useEffect, useState } from "react"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ( { children }) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const Auth = getAuth(app);


  const googleProvider = new GoogleAuthProvider()

  // Create a New User Using Email & Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password)
}


// Sign In a Existing User 
const loggedIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(Auth, email, password)
}


// Sign In Existing by Google

const googleSignIn = () => {
  setLoading(true);
  return signInWithPopup(Auth, googleProvider)
}



  // Logout a Logged in User
  const loggedOut = () => {
    setLoading(true);
    return signOut(Auth)
  }



  useEffect (() => {
    const unSubscribe = onAuthStateChanged(Auth, currentUser => {
        setLoading(false);
        setUser(currentUser)
    })

    return () => {
      unSubscribe()
    }
  }, [Auth])


    const authInfo = { user, createUser, setUser, loading, loggedIn, googleSignIn, loggedOut}

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider