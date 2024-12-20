import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Banner from "../shared/Banner";


const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="flex-grow">
            <Outlet/>
            </div>
            <div >
            <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;