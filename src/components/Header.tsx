import Logo from "./Logo"

export default function Header() {
    
    return(
        <nav className="flex items-center justify-center bg-[#002F5CCC] relative w-screen h-[7.5rem] border-b-white border-b backdrop-blur-[7.5px]">
            <ul className="uppercase flex items-center justify-end gap-20 flex-row font-[Philosopher] text-white font-bold leading-normal text-center text-[20px]">
                <li>trang chủ</li>
                <li>bài viết</li>
                <Logo />
                <li>tài liệu</li>
                <li>tuyển dụng</li>
            </ul>
        </nav>
    )
}