import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

export default function DashboardLayout() {
    return (
        <div className="w-full min-h-screen ">
            <Navbar />
            <div className="mt-[8vh] flex">
                <Sidebar />
                <div className="ml-[15vw] w-full pt-4 pl-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
