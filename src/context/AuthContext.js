import React, { useContext, useEffect, useState } from "react"
import { auth } from "../utils/AuthFirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

//const auth = getAuth();
const AuthContext = React.createContext();

export function useAuth () {
    return useContext(AuthContext)
}

export function AuthProvider ({children}) {
    const [currentUser, setCurrentUser] = useState()

    function createAccount (auth, email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect (()=> {
        const unsuscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsuscribe
    }, [])
    

    const value = {
        currentUser,
        createAccount
    }

    return(
        <>
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
        </>
    )
}