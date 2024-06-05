import { NavLink, useLocation } from "react-router-dom"
import Logo from "./Logo"

export default function Header() {
    const url = useLocation().pathname
    console.log(url)
    return(
        <header className="z-10 top-0 w-full fixed">
            <nav className="flex items-center justify-center bg-[#002F5CCC] w-full h-[7.5rem] border-b-white border-b backdrop-blur-[7.5px] ">
                <ul className="uppercase flex items-center justify-end gap-20 flex-row font-[Philosopher] text-white font-bold leading-normal text-center text-[20px]">
                    <li className="toggle-hover"><NavLink className={({isActive, isPending}) => {
                        return isPending ? "pending" : isActive ? "toggle-focus" : ""
                    }} to={'/'}>trang chủ</NavLink></li>
                    <li className="toggle-hover"><NavLink className= {({isActive, isPending}) => {
                        return isPending ? "pending" : isActive ? "toggle-focus" : ""
                    }} to={'/feeds'}>bài viết</NavLink></li>
                    <Logo />
                    <li className="toggle-hover"><NavLink className={({isActive, isPending}) => {
                        return isPending ? "pending" : isActive ? "toggle-focus" : ""
                    }} to={'/docs'}>tài liệu</NavLink></li>
                    <li className="toggle-hover"><NavLink className={({isActive, isPending}) => {
                        return isPending ? "pending" : isActive ? "toggle-focus" : ""
                    }} to={'/tuyendung'}>tuyển dụng</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}