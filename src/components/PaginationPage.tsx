export default function PaginationPage() {
    return (
        <div className='flex justify-center'>
            <div className='py-2 px-1 bg-[#ffffffb3] w-fit flex shrink-0 items-center justify-center gap-3 rounded-[99px] '>
                <div className='w-8 h-8 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M13.5 15L7.5 10L13.5 5" fill="#A3A3A3" />
                        <path d="M13.5 15L7.5 10L13.5 5L13.5 15Z" stroke="#A3A3A3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className='h-8 flex gap-2 text-base text-white font-[Roboto]'>
                    <div className="h-full bg-[#0054A6] w-8 flex items-center justify-center rounded">1</div>
                    <div className="h-full w-8 hover:rounded hover:cursor-pointer hover:border-[#0054A6] hover:border-[1px] flex items-center justify-center text-[#4D4D4D]">2</div>
                    <div className="h-full w-8 hover:rounded hover:cursor-pointer hover:border-[#0054A6] hover:border-[1px] flex items-center justify-center text-[#4D4D4D]">3</div>
                    <div className="h-full w-8 hover:rounded hover:cursor-pointer hover:border-[#0054A6] hover:border-[1px] flex items-center justify-center text-[#4D4D4D]">...</div>
                    <div className="h-full w-8 hover:rounded hover:cursor-pointer hover:border-[#0054A6] hover:border-[1px] flex items-center justify-center text-[#4D4D4D]">10</div>
                </div>
                <div className='w-8 h-8 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M7.5 15L13.5 10L7.5 5" fill="#4D4D4D" />
                        <path d="M7.5 15L13.5 10L7.5 5L7.5 15Z" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}