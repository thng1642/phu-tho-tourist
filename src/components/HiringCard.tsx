import logo from '../assets/Frame.svg'

export default function HiringCard() {
    return (
        <div className='relative font-[Roboto] bg-white rounded-xl w-[361px] h-[296px] pt-[22px] pb-5'>
            <div className='flex items-center h-9 gap-3 ml-6 mb-3'>
                {/* <Frame /> */}
                <img src={logo} alt="" className="object-fill h-9" />
                <div>
                    <h3 className="header-card-hiring text-[#003F7D] leading-[100%] text-[20px]">Nhân viên thiết kế đồ họa</h3>
                    <p className="header-card-more leading-[20px] text-[#3376B8]">Nhân viên chính thức</p>
                </div>
            </div>
            <div className="flex flex-col gap-2 left-[72px] relative mb-4">
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14.4788 5.45983C13.6901 2.15447 10.6628 0.666336 8.00367 0.666336H7.99616C5.34451 0.666336 2.30976 2.14731 1.52103 5.45268C0.642154 9.14438 3.01587 12.2709 5.16423 14.2384C5.92571 14.9404 6.94391 15.3329 8.00367 15.333C9.02527 15.333 10.0469 14.9681 10.8356 14.2384C12.984 12.2709 15.3577 9.15154 14.4788 5.45983ZM8.00367 9.04422C7.69294 9.04422 7.38525 8.98593 7.09817 8.87267C6.81109 8.75942 6.55024 8.59341 6.33052 8.38414C6.11079 8.17487 5.9365 7.92643 5.81759 7.653C5.69867 7.37958 5.63747 7.08652 5.63747 6.79056C5.63747 6.49461 5.69867 6.20155 5.81759 5.92813C5.9365 5.6547 6.11079 5.40626 6.33052 5.19699C6.55024 4.98772 6.81109 4.82171 7.09817 4.70845C7.38525 4.5952 7.69294 4.53691 8.00367 4.53691C8.63123 4.53691 9.23308 4.77434 9.67683 5.19699C10.1206 5.61963 10.3699 6.19286 10.3699 6.79056C10.3699 7.38827 10.1206 7.9615 9.67683 8.38414C9.23308 8.80678 8.63123 9.04422 8.00367 9.04422Z" fill="#A3A3A3" />
                    </svg>
                    <span className="more-info text-[#666666]">CVVH Đầm Sen</span>
                </div>
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.99992 1.33333C4.32659 1.33333 1.33325 4.32666 1.33325 8C1.33325 11.6733 4.32659 14.6667 7.99992 14.6667C11.6733 14.6667 14.6666 11.6733 14.6666 8C14.6666 4.32666 11.6733 1.33333 7.99992 1.33333ZM10.8999 10.38C10.8665 10.4368 10.8222 10.4864 10.7695 10.526C10.7168 10.5655 10.6567 10.5941 10.5928 10.6103C10.5289 10.6264 10.4625 10.6297 10.3973 10.6199C10.3322 10.6101 10.2696 10.5875 10.2133 10.5533L8.14659 9.31999C7.63325 9.01333 7.25325 8.33999 7.25325 7.74666V5.01333C7.25325 4.74 7.47992 4.51333 7.75325 4.51333C8.02659 4.51333 8.25325 4.74 8.25325 5.01333V7.74666C8.25325 7.98666 8.45325 8.33999 8.65992 8.45999L10.7266 9.69333C10.9666 9.83333 11.0466 10.14 10.8999 10.38Z" fill="#A3A3A3" />
                    </svg>
                    <span className="more-info text-[#666666]">2 tuần trước</span>
                </div>
            </div>
            <div className='rounded-[46px] font-[Roboto] text-[14px] font-normal bg-[#E6F7E6] text-[#03A600] px-3 py-2 absolute top-[84px] right-5'>Đang tuyển</div>
            <div className='mb-4 flex flex-col gap-2 ml-[21px]'>
                <h4 className='text-[#0054A6] text-[16px] font-semibold leading-[normal]'>Mô tả công việc:</h4>
                <p className='text-[#666666] text-[13px] font-normal leading-[17px] line-clamp-4 w-[320px]'>Trung tâm dịch vụ du lịch Đầm Sen cần tuyển 2 Nhân viên kinh doanh lữ hành. Yêu cầu: Tốt nghiệp CĐ, ĐH chuyên ngành Du lich, QT kinh doanh, Marketing. Am hiểu tâm lý</p>
            </div>
            <div className='btn mx-5 rounded-[99px] bg-[#0054A6] text-white text-[16px] leading-[normal] font-semibold flex justify-center items-center h-11'>
                Xem chi tiết
            </div>
        </div>
    )
}