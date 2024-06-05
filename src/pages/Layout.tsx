import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
    return (
        <>
            {/* <div className="w-full h-[1080px] -z-10 sticky top-0"> */}
                <video src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/-b581-45d9-98eb-64676259fd20.mp4?alt=media&token=59d08e73-305d-4461-9930-478cbca936e7" 
                    loop muted autoPlay className="-z-10 sticky top-0 w-full h-[1080px] object-cover" />
            {/* </div> */}
            <Header />
            <div className="relative top-[-912px]">
                <Outlet />
            </div>
        </>
    )
} 