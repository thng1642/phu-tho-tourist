import fieldIcon from '../assets/field.svg';
import locationIcon from '../assets/location.svg';
import themvIcon from '../assets/thenv.svg';
import HiringCard from "../components/HiringCard";
import PaginationPage from "../components/PaginationPage";
import PolygonHeader from "../components/PolygonHeader";
import SearchBox from "../components/SearchBox";

type Props = {
    value: string,
    isFocus: boolean,
}
const Chip = (props: Props) => {
    // useEffect(() => {
    //     if (props.isFocus)
    // }, [])
    return (
        <div className={"rounded-full text-[#4D4D4D] text-[14px] font-[Roboto] font-normal w-fit h-10 px-3 flex items-center hover:cursor-pointer " + `${props.isFocus ? "bg-[#0054A6] text-white" : "bg-white hover:border hover:border-[#0054A6] hover:text-[#0054A6]"}`}>
            <span>{props.value}</span>
        </div>
    )
}
const dummy = ['Hướng dẫn viên', 'Kinh doanh', 'Kĩ sư xây dựng', 'Nhân viên kế toán', 'Nhân viên kĩ thuật', 'Nhân viên phục vụ']
export default function Hiring() {
    return (
        <section className="w-full flex flex-col items-center gap-12">
            <PolygonHeader content={"Tuyển dụng"} />
            <section className="grid grid-cols-[362px,1134px] gap-6">
                <div className="h-[936px] shadow-filter rounded-xl backdrop-blur-[7.5px] py-6 px-5 bg-[#ffffffb3]">
                    {/* Searching */}
                    <div className="w-full pb-6">
                        <SearchBox />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="322" height="2" viewBox="0 0 322 2" fill="none">
                        <path d="M0 1H322" stroke="white" />
                    </svg>
                    <div className="py-6">
                        {/* Titles */}
                        <div >
                            <div className="flex gap-2 title-hiring">
                                <img src={fieldIcon} alt="icon field" />
                                <span>Lĩnh vực</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {
                                    dummy.map((value, index) => {
                                        if (index === 0) return <Chip value={value} isFocus={true} key={index} />
                                        return (
                                            <Chip value={value} isFocus={false} key={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* From of work */}
                        <div>
                            <div className="flex gap-2 title-hiring">
                                <img src={themvIcon} alt="icon" />
                                <span>Hình thức làm việc</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {
                                    dummy.map((value, index) => {
                                        if (index === 0) return <Chip value={value} isFocus={true} key={index} />
                                        return (
                                            <Chip value={value} isFocus={false} key={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        {/* Workplace */}
                        <div>
                            <div className="flex gap-2 title-hiring">
                                <img src={locationIcon} alt="icon location" />
                                <span>Nơi làm việc</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {
                                    dummy.map((value, index) => {
                                        if (index === 0) return <Chip value={value} isFocus={true} key={index} />
                                        return (
                                            <Chip value={value} isFocus={false} key={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='h-[256px] inline-block absolute bottom-0 right-0 opacity-[0.15]'>
                            <svg className='absolute top-0 right-0' xmlns="http://www.w3.org/2000/svg" width="253" height="256" viewBox="0 0 253 256" fill="none">
                                <path d="M282.097 141.374C282.097 219.122 219.07 282.148 141.323 282.148C63.5751 282.148 0.54834 219.122 0.54834 141.374C0.54834 63.6266 63.5751 0.599854 141.323 0.599854C219.07 0.599854 282.097 63.6266 282.097 141.374Z" fill="#0054A6" />
                            </svg>
                            {/* Stroke */}
                            <svg className='absolute top-0 right-0' xmlns="http://www.w3.org/2000/svg" width="253" height="256" viewBox="0 0 253 256" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M141.323 275.821C215.576 275.821 275.77 215.627 275.77 141.374C275.77 67.1209 215.576 6.92679 141.323 6.92679C67.0694 6.92679 6.87527 67.1209 6.87527 141.374C6.87527 215.627 67.0694 275.821 141.323 275.821ZM141.323 282.148C219.07 282.148 282.097 219.122 282.097 141.374C282.097 63.6266 219.07 0.599854 141.323 0.599854C63.5751 0.599854 0.54834 63.6266 0.54834 141.374C0.54834 219.122 63.5751 282.148 141.323 282.148Z" fill="white" />
                            </svg>
                            {/* Vector */}
                            <svg className='z-10 top-[44%] absolute right-0' xmlns="http://www.w3.org/2000/svg" width="335" height="97" viewBox="0 0 335 97" fill="none">
                                <path d="M159.971 1.62256L1.6001 86.0871L137.095 43.8549L283.149 94.8855L443.279 10.421L306.024 54.4129L159.971 1.62256Z" fill="white" stroke="#0054A6" stroke-width="3.16347" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-wrap justify-between gap-y-6 mb-8">
                        <HiringCard />
                        <HiringCard />
                        <HiringCard />
                        <HiringCard />
                        <HiringCard />
                        <HiringCard />
                        <HiringCard />
                        <HiringCard />
                        <HiringCard />
                    </div>
                    {/* Navigation page */}
                    <PaginationPage />
                </div>
            </section>
        </section>
    )
}