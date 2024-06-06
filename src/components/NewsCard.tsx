import { useNavigate } from 'react-router-dom'
import './style/newsCard.css'
type Props = {
    id: number,
    title: string,
    author: string,
    dateAt: string,
    views: string,
    description: string,
    types: string[],
    img1: string
}
export default function NewsCard( props: Props) {
    const nav = useNavigate()
    return(
        <a href='#' className="relative w-[362px] h-[542px] rounded-xl font-[Roboto] bg-white shadow-news-card shrink-0 card-news-container"
            onClick={(e)=>{
                e.preventDefault()
                nav(`feeds/${props.id}`)
            }}
        >
            {/* Avatar */}
            <div className="w-full h-[197px] overflow-hidden block card-news-img relative">
                <div className='absolute w-full h-full top-0'>
                    <span className='font-semibold text-[20px] text-white'>Click để xem</span>
                </div>
                <img className="object-cover rounded-t-xl w-full h-full" src={props.img1 } alt="avatar" />
            </div>
            {/* Filter */}
            <div className="filter-news-card"></div>
            <section className="px-4 mt-6 flex flex-col h-[293px] justify-between items-start shrink-0">
                {/* Main content */}
                <div>
                    <div className="capitalize flex items-center gap-1">
                        {props.author}
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                            <circle cx="4" cy="4.5" r="4" fill="#03A600"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-[#0054A6] text-[20px] font-bold">
                            {props.title}
                        </h3>
                    </div>
                    <div id="news-card-content" className="news-card-info">
                        <p className="line-clamp-4">{props.description}</p>
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
                    <div className="news-card-info">
                        <div className="flex items-center gap-2 fill-[#858585]">
                            {props.views}
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#858585"/>
                            </svg> 
                            {props.dateAt}
                        </div>
                    </div>
                </div>
            </section>
        </a>
    )
}