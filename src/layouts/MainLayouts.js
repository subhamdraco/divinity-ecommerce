import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import HeaderSmall from "../components/headersmall/index";
import Footer from "../components/footer/Footer";
import { useAuth } from "../components/context/AuthContext";
   

export default function MainLayout() {
  const { user, logout, loading } = useAuth();
  return (
    <>
      <HeaderSmall user={user} logout={logout}/>
      <Header user={user} logout={logout}/>
      <Outlet />
      <Footer />
    </>
  );
}
