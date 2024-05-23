export default function FeedCard() {
    return(
        <article className="relative w-[265px] pb-[10px] rounded-lg flex flex-col gap-4 font-[Roboto] bg-white shadow-news-card shrink-0">
            {/* Avatar */}
            <div className="w-full h-[146px]">
                <img className="object-cover rounded-t-xl w-full h-full" src="https://images.unsplash.com/photo-1715093458373-83b4e8194203?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
            </div>
            <section className="flex flex-col items-start gap-2 px-3 shrink-0">
                {/* Main content */}
                <div>
                    <div className="capitalize flex items-center gap-1 h-4 text-[14px]">
                        admin
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                            <circle cx="4" cy="4.5" r="4" fill="#03A600"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-[#0054A6] text-[16px] font-bold leading-[normal] h-[38px] overflow-ellipsis line-clamp-2">
                            Thông báo kết quả lựa chọn nhà thầu 2 màn hình Led P4 Outdoor Fullcolor
                        </h3>
                    </div>
                </div>
                {/* Footer news card */}
                <div className="flex flex-col items-start gap-2">
                    <div className="flex items-start gap-1">
                        <div className="type-content">Sự kiện</div>
                        <div className="type-content">Thông báo</div>
                        <div className="type-content">Tin tức</div>
                    </div>
                    <div className="text-[#858585] text-[14px] font-[Roboto] font-normal leading-[normal]">
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
        </article>
    )
}