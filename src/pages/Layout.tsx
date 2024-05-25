import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
    return (
        <>
            <div className="bg-[url('https://images.unsplash.com/photo-1621427205454-f353b26c4210?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat w-full h-[1080px] bg-cover -z-10 sticky top-0"></div>
            <Header />
            <div className="relative top-[-912px]">
                <Outlet />
            </div>
        </>
    )
}