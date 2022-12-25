// C - create  P -Provide C - consume
import { createContext, useState } from 'react'

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(true)

    const handleLogin = () => setIsAuth(true)
    const handleLogout = () => setIsAuth(false)

    return (
        <AuthContext.Provider value={{ isAuth, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider