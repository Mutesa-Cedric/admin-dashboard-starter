import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { showAddUserModalState } from "../../atoms";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import AddUser from "../modals/AddUser";

export default function DashboardLayout() {
    const showAddUser = useRecoilValue(showAddUserModalState);

    return (
        <div className="w-full ">
            <Navbar />
            <div className="mt-[8vh] flex">
                <Sidebar />
                <div className="ml-[15vw] w-full pt-4 pl-4">
                    <Outlet />
                </div>
            </div>
            {showAddUser && <AddUser />}
        </div>
    )
}
