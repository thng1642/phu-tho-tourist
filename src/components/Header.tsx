import Logo from "./Logo"

export default function Header() {
    
    return(
        <header className="bg-[url('https://images.unsplash.com/photo-1621427205454-f353b26c4210?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat w-full h-[1080px] bg-cover ">
            <nav className="flex items-center justify-center bg-[#002F5CCC] w-full h-[7.5rem] border-b-white border-b backdrop-blur-[7.5px] ">
                <ul className="uppercase flex items-center justify-end gap-20 flex-row font-[Philosopher] text-white font-bold leading-normal text-center text-[20px]">
                    <li>trang chủ</li>
                    <li>bài viết</li>
                    <Logo />
                    <li>tài liệu</li>
                    <li>tuyển dụng</li>
                </ul>
            </nav>
        </header>
    )
}