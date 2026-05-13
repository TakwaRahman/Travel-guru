import { createContext, useEffect, useState } from "react";
import app from '../firebase/Firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {


    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)


    const signInUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser => {
            setLoading(false)
            setUser(currentUser)
        }));

        return () => unSubscribe()
    }, [])


    const authData = {
        user,
        signInUser,
        createUser,
        loading,
        logOut
    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;