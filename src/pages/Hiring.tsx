import HiringCard from "../components/HiringCard";
import PaginationPage from "../components/PaginationPage";
import PolygonHeader from "../components/PolygonHeader";
import fieldIcon from '../assets/field.svg'
import themvIcon from '../assets/thenv.svg'
import locationIcon from '../assets/location.svg'

export default function Hiring() {
    return (
        <section className="w-full flex flex-col items-center gap-12">
            <PolygonHeader content={"Tuyển dụng"} />
            <section className="grid grid-cols-[362px,1134px] gap-6">
                <div className="h-[936px] shadow-filter rounded-xl backdrop-blur-[7.5px] py-6 px-5 bg-[#ffffffb3]">
                    {/* Searching */}
                    <div className="w-full h-10"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="322" height="2" viewBox="0 0 322 2" fill="none">
                        <path d="M0 1H322" stroke="white" />
                    </svg>
                    {/* Titles */}
                    <div>
                        <div >
                            <div className="flex gap-2">
                                <img src={fieldIcon} alt="icon field" />
                                <span>Lĩnh vực</span>
                            </div>
                        </div>
                    </div>
                    {/* From of work */}
                    <div>
                        <div className="flex gap-2">
                            <img src={themvIcon} alt="icon" />
                            <span>Hình thức làm việc</span>
                        </div>
                    </div>
                    {/* Workplace */}
                    <div>
                        <div className="flex gap-2">
                            <img src={locationIcon} alt="icon location" />
                            <span>Nơi làm việc</span> 
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