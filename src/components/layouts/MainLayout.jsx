import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="px-2 md:px-4 lg:px-10">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;