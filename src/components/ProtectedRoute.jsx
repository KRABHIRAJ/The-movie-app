import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const user = useSelector((state) => state.user.user);
    return Object.keys(user).length > 0 ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoute