import React, { createContext, ReactNode, useEffect, useState } from "react";


interface AuthContextType {
    login: (token: string) => void
    logout: () => void
    token: string | null
}

export const authContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));


    useEffect(() => {
        localStorage.setItem("token", token || "")

    }, [token])

    const login = (token:string) => { setToken(token) }
    const logout = () => { setToken(null); localStorage.removeItem("token") }

    return (
        <authContext.Provider value={{ token, login, logout }}>
            {children}
        </ authContext.Provider>
    )
}

