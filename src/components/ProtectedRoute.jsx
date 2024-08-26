
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
    const location = useLocation();
    const user = useSelector((state) => state.user.user);
    const isAuthenticated = Object.keys(user).length > 0;

    useEffect(() => {
        localStorage.setItem('redirectAfterLogin', location.pathname)
    });

   
   
    

    return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute