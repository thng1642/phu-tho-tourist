import { useEffect, useRef, useState } from "react"


function SearchBox() {
    const ref = useRef<HTMLInputElement>(null)
    const isClosedRef = useRef(false)
    const dropdownRef = useRef(null)
    const [open, setOpen] = useState(false)
    const [historySearch, setHistorySearch] = useState(["Công viên văn hóa Đầm Sen", "KDL Suối Tiên", "KDL Hầm Hô", "KDL tâm linh Chùa Ông Núi"])

    const setUpDropdown = (e: MouseEvent) => {
        // console.log(dropdownRef.current)
        console.log((e.target as HTMLElement))
        // if (isClosedRef.current) {
        //     // removing value
        // } else {
        //     console.log("Other!!!!")
        // }
        if (e.target === ref.current) {
            
            console.log("Not close dropdown")
        }
        else {
            console.log("Closes dropdown!")
            setOpen(false)
        }
    }
    useEffect(() => {
        console.log("Re-render setup dropdown!")
        document.addEventListener('click', setUpDropdown, true)
        return () => document.removeEventListener('click', setUpDropdown);
    }, [])
    return (
        <div className='relative'>
            <div className='w-[314px] flex items-center bg-white rounded-md gap-[10px] px-4 relative'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17.2959 17.3333L21.2959 21.3333" stroke="#0054A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.2959 11.3333C19.2959 15.7516 15.7142 19.3333 11.2959 19.3333C6.87762 19.3333 3.2959 15.7516 3.2959 11.3333C3.2959 6.91497 6.87762 3.33325 11.2959 3.33325C15.7142 3.33325 19.2959 6.91497 19.2959 11.3333Z" stroke="#0054A6" stroke-width="2" />
                </svg>
                <input type="text"  id="" placeholder='Tìm kiếm'
                    ref={ref} value={""} name={"searching"}
                    className='text-search-box py-[10px] w-full pr-8 focus:outline-none'
                    onClick={() => setOpen(true)}
                />
                {/* Dropdown search */}
                {
                    open ? <div className='absolute bg-white shadow-dropdown-search rounded-md w-full z-[1] top-[calc(100%_+_8px)] left-0 px-[7px] py-3' ref={dropdownRef}>
                        <h3 className='px-2 text-[14px] font-semibold text-[##4D4D4D]'>Tìm kiếm gần đây:</h3>
                        <div>
                            {
                                historySearch.map((item, index) => {
                                    return (
                                        <div key={index} className='p-2 flex justify-between items-center cursor-pointer hover:bg-[#F0F0F0] hover:rounded-md' >
                                            <span className='text-[14px] font-[Roboto] text-[#666666]'>{item}</span>
                                            <div className="relative z-10"
                                                onClick={()=>{
                                                    isClosedRef.current = true
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M8 16L16 8M16 16L8 8" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="close-btn"/>
                                                </svg>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> : null
                }

            </div>
        </div>
    )
}
export default SearchBox