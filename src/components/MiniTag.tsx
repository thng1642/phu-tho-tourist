import '../App.css'

export default function MiniTag() {
    return(
        <article className="flex items-center gap-3 w-[314px] h-[102px] rounded-[4px] pr-3 bg-white shadow-mini-tag">
            <div className='w-[104px] h-[102px] shrink-0'>
                <img className='w-full h-full object-cover rounded-l-[4px]' src="https://images.unsplash.com/photo-1714907135093-e60f0a730574?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anh" />
            </div>
            <div className='flex flex-col items-start gap-2'>
                <h4 className="header-mini-tag">Thông báo đấu giá giữ xe tại CVHH Đầm Sen</h4>
                <div className="mini-tag-info">
                        <div className="flex items-center gap-2 fill-[#858585]">
                            10N lượt xem 
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#858585"/>
                            </svg> 
                            20/02/2022
                        </div>
                    </div>
            </div>
        </article>
    )
}