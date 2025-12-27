import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../components/context/AuthContext";

import Header from "../header/Header";
import HeaderSmall from "../headersmall/index";
import Footer from "../footer/Footer";

const ProtectedRoute = () => {
    const { user, loading, logout } = useAuth();
    const location = useLocation();

    if (loading) return null; // or loader

    if (!user) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    // return user ? <Outlet /> : <Navigate to="/login" replace />;
    return (
        <>
            <HeaderSmall />
            <Header user={user} logout={logout} />
            <Outlet />
            <Footer />
        </>
    )
};

export default ProtectedRoute;
