
export default function ServicesCard() {
    return(
        <article className="relative w-[362px] rounded-xl font-[Roboto] bg-white shadow-news-card shrink-0">
            <div className="w-full h-[197px] mb-6">
                <img className="object-cover rounded-t-xl w-full h-full" src="https://images.unsplash.com/photo-1696698335759-b34d7b5639ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />
            </div>
            <div className="text-center flex flex-col gap-3 mb-10 px-4">
                <h3 className="text-[20px] text-[#0054A6] font-bold">Vui chơi giải trí</h3>
                <p className="line-clamp-3 text-[16px] leading-[131.25%]">Với 2 khu giải trí nổi tiếng TP.HCM là Công viên văn hóa Đầm Sen, và khu du lịch sinh thái Vàm Sát (H.Cần Giờ) Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, accusamus?</p>
            </div>
        </article>
    )
}