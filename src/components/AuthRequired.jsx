import { Outlet, Navigate, useLocation } from "react-router-dom"

export default function AuthRequired() {
    const authenticated = false
    const location = useLocation()
    if (!authenticated) {
        return (
            // replace is used clear logout after logging in
            <Navigate 
                to="/login" 
                state={{message: "You must log in first",
                from:location.pathname
                }} 
                replace
            />)
    }
    return <Outlet />
}