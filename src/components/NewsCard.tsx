import './style/newsCard.css'

export default function NewsCard() {

    return(
        <a href='#' className="relative w-[362px] h-[542px] rounded-xl font-[Roboto] bg-white shadow-news-card shrink-0 card-news-container">
            {/* Avatar */}
            <div className="w-full h-[197px] overflow-hidden block card-news-img relative">
                <div className='absolute w-full h-full top-0'>
                    <span className='font-semibold text-[20px] text-white'>Click để xem</span>
                </div>
                <img className="object-cover rounded-t-xl w-full h-full" src="https://images.unsplash.com/photo-1715093458373-83b4e8194203?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
            </div>
            {/* Filter */}
            <div className="filter-news-card"></div>
            <section className="px-4 mt-6 flex flex-col h-[293px] justify-between items-start shrink-0">
                {/* Main content */}
                <div>
                    <div className="capitalize flex items-center gap-1">
                        admin
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                            <circle cx="4" cy="4.5" r="4" fill="#03A600"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-[#0054A6] text-[20px] font-bold">
                            Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor
                        </h3>
                    </div>
                    <div id="news-card-content" className="news-card-info">
                        <p className="line-clamp-4">Công ty Cổ phần Dịch vụ Du lịch Phú Thọ thông báo đến các nhà thầu tham gia chào hàng cạnh tranh Gói thầu: Cung cấp, lắp đặt 02 màn hinh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, doloremque.</p>
                    </div>
                </div>
                {/* Footer news card */}
                <div className="flex flex-col items-start gap-2">
                    <div className="flex items-start gap-1">
                        <div className="type-content">Sự kiện</div>
                        <div className="type-content">Thông báo</div>
                        <div className="type-content">Tin tức</div>
                    </div>
                    <div className="news-card-info">
                        <div className="flex items-center gap-2 fill-[#858585]">
                            10N lượt xem 
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#858585"/>
                            </svg> 
                            20/02/2022
                        </div>
                    </div>
                </div>
            </section>
        </a>
    )
}