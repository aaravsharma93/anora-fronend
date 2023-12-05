import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    auth: false,
    setAuth: () => { },
    user: null,
    loginOpen: false,
    signUpOpen: false,
    setLoginOpen: () => { },
    setSignOpen: () => { }
})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
    children,
    user,
    loginOpen,
    signupOpen,
    setLoginOpen,
    setSignupOpen
}) => {

    const [auth, setAuth] = useState(false)

    const logout = () => {
        localStorage.removeItem("anoraAuth")
        setAuth(null)
    }
    
    useEffect(async () => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem("anoraAuth")
            if (token) {
                setAuth(token);
            }
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                auth: auth,
                setAuth: setAuth,
                logout: logout,
                user: user,
                loginOpen: loginOpen,
                signUpOpen: signupOpen,
                setLoginOpen: setLoginOpen,
                setSignOpen: setSignupOpen
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}