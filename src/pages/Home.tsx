import NewsCard from "../components/NewsCard";

export default function Home(){
    return(
        <main className="px-[200px] backdrop-blur-[7.5px]">
            <section className="bg-[#4e95dbb3] flex flex-col items-center relative">
                {/* Logo */}
                <div className="absolute top-0 right-0 w-[100px] h-[50px] bg-black z-10">
                    
                </div>
                <div className="font-[Roboto] inline-flex flex-col items-center gap-4 mt-10">
                    <p className="uppercase text-white text-center text-[20px] font-semibold ">chia sẽ thông tin</p>
                    <h3 className="text-[#003F7D] text-center text-[44px] font-bold font-[Philosopher]" >Bài viết mới</h3>
                    <div className="w-[130px] h-[6px] rounded-[100px] bg-[#003F7D]"></div>
                    <p className="text-center text-[20px] font-normal text-[#F0F0F0]">Hãy cùng chúng tôi chia sẻ những bài viết mới với các thông tin về những sản phẩm du lịch</p>
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
        </main>
    )
}