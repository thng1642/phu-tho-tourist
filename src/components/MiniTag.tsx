import '../App.css'
type Props = {
    id: number,
    title: string,
    views: string,
    dateAt: string,
    img2: string
}
export default function MiniTag(props: Props) {
    return(
        <article className="hover:cursor-pointer flex items-center gap-3 w-[314px] h-[102px] rounded-[4px] pr-3 bg-white shadow-mini-tag">
            <div className='w-[104px] h-[102px] shrink-0'>
                <img className='w-full h-full object-cover rounded-l-[4px]' src={props.img2} alt="anh" />
            </div>
            <div className='flex flex-col items-start gap-2'>
                <h4 className="header-mini-tag hover:text-[#0054A6]">{props.title}</h4>
                <div className="mini-tag-info">
                        <div className="flex items-center gap-2 fill-[#858585]">
                            {props.views}
                            <svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
                                <circle cx="1.5" cy="1.5" r="1.5" fill="#858585"/>
                            </svg> 
                            {props.dateAt}
                        </div>
                    </div>
            </div>
        </article>
    )
}