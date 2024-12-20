import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Banner from "../shared/Banner";
import HotJobs from "../pages/Home/HotJobs";


const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="flex-grow">
                
            <Outlet/>
            </div>

            <div className="">
            <HotJobs></HotJobs>
            </div>
            <div >
            <Footer></Footer>
            </div>
        </div>
    );
};

export default HomeLayout;