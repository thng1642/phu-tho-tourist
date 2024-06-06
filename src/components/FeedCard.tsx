import '../components/style/newsCard.css'
type Props = {
    id: number,
    title: string,
    author: string,
    dateAt: string,
    views: string,
    types: string[],
    img3: string
}
export default function FeedCard(props: Props) {
    return (
        <article className="relative w-[265px] pb-[10px] rounded-lg flex flex-col gap-4 font-[Roboto] bg-white shadow-news-card shrink-0 cursor-pointer z-20 card-news-container">
            {/* Avatar */}
            <div className="w-full h-[146px] block overflow-hidden card-news-img relative">
                <div className='absolute w-full h-full top-0'>
                    <span className='font-semibold text-[20px] text-white'>Click để xem</span>
                </div>
                <img className="object-cover rounded-t-xl w-full h-full" src={props.img3} alt="avatar" />
            </div>
            <section className="flex flex-col items-start gap-2 px-3 shrink-0">
                {/* Main content */}
                <div>
                    <div className="capitalize flex items-center gap-1 h-4 text-[14px] mb-2">
                        {props.author}
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                            <circle cx="4" cy="4.5" r="4" fill="#03A600" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-[#0054A6] text-[16px] font-bold leading-[normal] h-[38px] overflow-ellipsis line-clamp-2">
                            {props.title}
                        </h3>
                    </div>
                </div>
                {/* Footer news card */}
                <div className="flex flex-col items-start gap-2">
                    <div className="flex items-start gap-1">
                    {
                        props.types.map((value, index) => (
                            <div key={index} className="type-content">{value}</div>
                        ))
                        }
                    </div>
                    <div className="text-[#858585] text-[14px] font-[Roboto] font-normal leading-[normal]">
                        <div className="flex items-center gap-2 fill-[#858585]">
                            {props.views}
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#858585" />
                            </svg>
                            {props.dateAt}
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}