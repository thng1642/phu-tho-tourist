import { useRef } from "react";
import Footer from "../components/Footer";
import NewsCard from "../components/NewsCard";
import ServicesCard from "../components/ServicesCard";

export default function Home() {
    const frameAbout = useRef<HTMLElement>(null)
    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-6 mb-[42px]">
                    <h2 className="font-[Philosopher] text-white text-[30px] uppercase text-center font-bold leading-[36px]">công ty cổ phần dịch vụ phú thọ</h2>
                    <h3 className="font-['Helvetica_Neue'] text-[#99FFFF] text-[44px] uppercase font-bold tracking-[1.76px] text-center h3-shadow">phuthotourist</h3>
                    <i className="text-white block text-center font-normal leading-[36px] text-[24px]">Ngày thành lập 01/01/2019</i>
                </div>
                <div className="inline-flex mb-9">
                    <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/Rectangle%20(1).png?alt=media&token=c84f9b85-798c-4ddf-98dc-a7bdf24f3e69" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/img%20(1).png?alt=media&token=0e648c0f-60c6-4e70-8f94-7afcd37436e2" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/img.png?alt=media&token=cef56a56-790b-49c2-a562-14a07b7c89f9" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/Rectangle.png?alt=media&token=89e86254-6000-4371-8926-0c11fe604cfe" alt="" />
                    <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/Rectangle%20(2).png?alt=media&token=a136d81e-c227-4b4c-9ae5-dbd45f91cca8" alt="" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none" className="hover:animate-bounce hover:cursor-pointer mb-[154px]"
                    onClick={() => {
                        frameAbout.current?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}
                >
                    <path d="M24.5 12L13 22L1.5 12" stroke="#F0F0F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24.5 2L13 12L1.5 2" stroke="#F0F0F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            {/* Landing home */}
            <main className="flex flex-col relative items-center backdrop-blur-[7.5px] w-[1520px] mx-auto mb-20">
                {/* About me */}
                <article ref={frameAbout} className="w-full rounded-t-3xl flex bg-white items-center pt-[46px] pr-[81px] pb-[56px] pl-[54px] gap-[72px]">
                    <div className="flex flex-col gap-8">
                        <div className="font-[Roboto] inline-flex flex-col items-left gap-4">
                            <p className="uppercase text-[#4D4D4D] text-left text-[20px] font-semibold leading-[normal]">Về chúng tôi</p>
                            <h3 className="text-[#003F7D] text-left text-[44px] font-bold font-[Philosopher] leading-[normal]">Chúng tôi cung cấp dịch vụ du lịch đáp ứng mọi nhu cầu của bạn!</h3>
                            <div className="w-[154px] h-[6px] rounded-[100px] bg-[#003F7D]"></div>
                        </div>
                        <div className="relative pl-[19px] font-[Roboto] text-[20px] font-normal text-[#333] leading-[normal] vector-about-we">
                            Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist), là một đơn vị thành viên của Saigontourist. Phuthotourist được biết đến với các sản phẩm du lịch nổi tiếng tại TP.HCM (Quận 11) như:
                            <ul className="list-inside list-disc">
                                <li>Công viên Văn hóa Đầm Sen</li>
                                <li>Khu du lịch sinh thái Vàm Sát</li>
                                <li>Khách sạn Ngọc Lan</li>
                                <li>Khách sạn Phú Thọ</li>
                                <li>Trung tâm chăm sóc sức khỏe & giải trí Đầm Sen (Damsen Plaza)</li>
                                <li>Nhà hàng Thủy Tạ Đầm Sen</li>
                                <li>Cà phê Vườn Đá</li>
                                <li>Trung tâm Dịch vụ Du lịch Đầm Sen (Damsen Travel)</li>
                                <li>Liên kết với Công viên nước Đầm Sen (Đầm Sen Water Park)</li>
                            </ul>
                        </div>
                        <div className="w-fit px-7 h-[44px] py-0 flex justify-center items-center gap-[10px] shrink-0 bg-[#0054A6] rounded-md btn">
                            <span className="text-white font-[Roboto] text-[18px] font-semibold">Xem chi tiết</span>
                        </div>
                    </div>
                    {/* Decoration images */}
                    <div className="w-[619px] h-[599px] shrink-0 relative">
                        <div className="w-[487px] h-[311px] shrink-0 rounded-[26.712px] border-[5px] border-white bg-[url('https://images.unsplash.com/photo-1678483874487-a4d6f8ceffe9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover shadow-deco-img z-10">
                            {/* <img src="https://images.unsplash.com/photo-1678483874487-a4d6f8ceffe9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anh 1" /> */}
                        </div>
                        <div className="w-[552px] h-[340px] rounded-[26.712px] bg-[url('https://images.unsplash.com/photo-1536086845112-89de23aa4772?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-cover shadow-deco-img border-[5px] border-white absolute z-20 left-[67px] top-[259px]">
                            {/* <img src="https://images.unsplash.com/photo-1536086845112-89de23aa4772?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anh 2" /> */}
                        </div>
                    </div>
                </article>
                {/* Sharing information */}
                <section className="w-full bg-[#4e95dbb3] flex flex-col items-center relative">
                    {/* Logo */}
                    <div className="items-start opacity-[.15] -z-10 inline-flex flex-col w-[954px] h-[608px] absolute right-0 -translate-y-[calc(608px_-_50%)] justify-center">
                        <svg className="right-0 top-[50%] absolute" xmlns="http://www.w3.org/2000/svg" width="550" height="466" viewBox="0 0 550 466" fill="none">
                            <path d="M609.559 160.542C609.559 328.861 473.109 465.31 304.79 465.31C136.471 465.31 0.0214844 328.861 0.0214844 160.542C0.0214844 -7.77727 136.471 -144.227 304.79 -144.227C473.109 -144.227 609.559 -7.77727 609.559 160.542Z" fill="#0054A6" />
                        </svg>
                        {/* Stroke */}
                        <svg className="top-1/2 right-0 absolute" xmlns="http://www.w3.org/2000/svg" width="550" height="466" viewBox="0 0 550 466" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M304.79 451.613C465.544 451.613 595.861 321.296 595.861 160.542C595.861 -0.212357 465.544 -130.529 304.79 -130.529C144.036 -130.529 13.7189 -0.212357 13.7189 160.542C13.7189 321.296 144.036 451.613 304.79 451.613ZM304.79 465.31C473.109 465.31 609.559 328.861 609.559 160.542C609.559 -7.77727 473.109 -144.227 304.79 -144.227C136.471 -144.227 0.0214844 -7.77727 0.0214844 160.542C0.0214844 328.861 136.471 465.31 304.79 465.31Z" fill="white" />
                        </svg>
                        {/* Vector */}
                        <svg className="top-1/2 -translate-y-[calc(65%_-_209px)] right-0 absolute" xmlns="http://www.w3.org/2000/svg" width="729" height="209" viewBox="0 0 729 209" fill="none">
                            <path d="M346.638 3.4917L3.77344 186.353L297.113 94.9223L613.311 205.401L959.985 22.5397L662.835 117.78L346.638 3.4917Z" fill="white" stroke="#0054A6" stroke-width="6.84873" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="font-[Roboto] inline-flex flex-col items-center gap-4 mt-10">
                        <p className="uppercase text-white text-center text-[20px] font-semibold leading-[23px]">chia sẽ thông tin</p>
                        <h3 className="text-[#003F7D] text-center text-[44px] font-bold font-[Philosopher] leading-[29px]" >Bài viết mới</h3>
                        <div className="w-[130px] h-[6px] rounded-[100px] bg-[#003F7D]"></div>
                        <p className="text-center text-[20px] font-normal text-[#F0F0F0] leading-[23px]">Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</p>
                    </div>
                    <div className="inline-flex items-start gap-6 mt-[37px]">
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                    {/* Button */}
                    <div className="w-fit px-7 h-[44px] py-0 flex justify-center items-center gap-[10px] shrink-0 bg-[#0054A6] rounded-md mt-8 mb-[68px] btn">
                        <span className="text-white font-[Roboto] text-[18px] font-semibold">Xem thêm bài viết</span>
                    </div>
                </section>
                <section className="w-full bg-[#ffffffcc] rounded-b-3xl flex justify-center flex-col items-center gap-8 p-10">
                    <div className="font-[Roboto] inline-flex flex-col items-center gap-4">
                        <p className="uppercase text-[#4D4D4D] text-center text-[20px] font-semibold ">Lĩnh vực hoạt động</p>
                        <h3 className="text-[#003F7D] text-center text-[44px] font-bold font-[Philosopher]" >Các dịch vụ trọng tâm</h3>
                        <div className="w-[130px] h-[6px] rounded-[100px] bg-[#003F7D]"></div>
                        <p className="text-center text-[20px] font-normal text-[#4D4D4D]">3 dịch vụ trọng tâm của Phuthotourist là vui chơi giải trí, nhà hàng - khách sạn, và dịch vụ lữ hành</p>
                    </div>
                    <div className="flex justify-center gap-6">
                        <ServicesCard />
                        <ServicesCard />
                        <ServicesCard />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}