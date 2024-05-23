import NewsCard from "../components/NewsCard";
import ServicesCard from "../components/ServicesCard";

export default function Home(){
    return(
        <main className="flex flex-col relative z-20 items-center backdrop-blur-[7.5px]">
            {/* About me */}
            <article className="w-[1520px] flex bg-white items-center pt-[46px] pr-[81px] pb-[56px] pl-[54px] gap-[72px]">
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
                    <div className="w-fit px-7 h-[44px] py-0 flex justify-center items-center gap-[10px] shrink-0 bg-[#0054A6] rounded-md">
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
            <section className="w-[1520px] bg-[#4e95dbb3] flex flex-col items-center relative">
                {/* Logo */}
                <div className="absolute top-0 right-0 w-[100px] h-[50px] bg-black z-10">
                    
                </div>
                <div className="font-[Roboto] inline-flex flex-col items-center gap-4 mt-10">
                    <p className="uppercase text-white text-center text-[20px] font-semibold leading-[normal]">chia sẽ thông tin</p>
                    <h3 className="text-[#003F7D] text-center text-[44px] font-bold font-[Philosopher] leading-[normal]" >Bài viết mới</h3>
                    <div className="w-[130px] h-[6px] rounded-[100px] bg-[#003F7D]"></div>
                    <p className="text-center text-[20px] font-normal text-[#F0F0F0] leading-[normal]">Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</p>
                </div>
                <div className="inline-flex items-start gap-6 mt-[37px]">
                    <NewsCard />
                    <NewsCard />
                    <NewsCard />
                </div>
                {/* Button */}
                <div className="w-fit px-7 h-[44px] py-0 flex justify-center items-center gap-[10px] shrink-0 bg-[#0054A6] rounded-md mt-8 mb-[68px]">
                    <span className="text-white font-[Roboto] text-[18px] font-semibold">Xem thêm bài viết</span>
                </div>
            </section>
            <section className="w-[1520px] mb-20 flex justify-center flex-col items-center gap-8 py-10">
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
    )
}