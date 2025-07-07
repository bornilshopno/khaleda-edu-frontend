import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;