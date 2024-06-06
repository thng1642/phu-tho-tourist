import frameBig from "../assets/frameBig.svg"
import Footer from "../components/Footer";
import "../components/style/hiring.css"

const jobs = {
    'Vị trí': "Nhân viên thiết kế đồ họa",
    'Số lượng': "2 người",
    "Nơi làm việc": 'Công viên văn hóa Đầm Sen',
    "Địa chỉ làm việc": "3 Hòa Bình, Phường 3, Quận 11, TP.HCM",
    "Mô tả công việc": [
        "Thiết kế hình ảnh, brochure, banner, poster, pano, backdrop sân khấu, các loại vé mời … và các ấn phẩm phục vụ sự kiện, truyền thông của công viên.",
        "Chụp hình, quay phim, dựng video đơn giản.", "Lên phác thảo, trao đổi ý tưởng với quản lý và hoàn thiện thiết kế.",
        "Các chi tiết về công việc được trao đổi tại buổi phỏng vấn."
    ],
    "Ngày làm việc": "...",
    "Giờ làm việc": "Giời hành chính",
    "Quyền lợi": [
        'Được ký hợp đồng lao động, tham gia đầy đủ chế độ BHXH.',
        'Thưởng tháng 13, 14, các ngày lễ, tết trong năm.',
        'Được phục vụ bữa ăn trưa tại nơi làm việc.',
        'Được trang bị đồng phục, khám sức khỏe định kỳ hàng năm.',
        'Được tham gia Bảo hiểm tai nạn 24/24.',
        'Nghỉ phép: 12 ngày phép / năm, công tác 5 năm thêm 1 ngày.',
        'Hỗ trợ ốm đau, ma chay, sinh con. Tham gia Ngày hội Gia đình, Ngày hội Tuổi thơ, hoạt động văn thể mỹ hàng năm.'
    ],
    "Yêu cầu": [
        'Tốt nghiệp từ Cao đẳng chuyên ngành Mỹ thuật, Đồ họa....',
        'Sử dụng thành thạo các phần mềm thiết kế (Photoshop, Corel, Illustrator…).',
        'Có khả năng quay và dựng video hấp dẫn người xem.',
        'Sử dụng thành thạo máy ảnh, máy quay, flycam...',
        'Có khiếu thẩm mỹ, sáng tạo, chủ động trong công việc.',
        'Có thể làm việc cuối tuần, lễ tết theo đặc thù kinh doanh Công viên Giải trí.'
    ],
    "Độ tuổi": '22 - 27 tuổi',
    "Trình độ": 'Cao đẳng',
    "Hồ sơ gồm": [
        "Ứng viên vui lòng gửi CV đến email: tuyendung@damsenpark.vn.",
        "Hoặc nộp hồ sơ trực tiếp tại Trụ sở Văn phòng Công ty: 15 đường số 2, cư xá Lữ Gia, P. 15, Quận 11. (ĐT: 028 38 650 921  - Phòng Nhân sự)."
    ]
}
export default function DetailsHiring() {

    const tableHeader = Object.keys(jobs)
    console.log(tableHeader);
    const tableData = Object.values(jobs)
    console.log(tableData)
    return (
        <>
        <section className="relative w-[1520px] bg-[#ffffffcc] shadow-details mx-auto font-[Roboto] pt-[48px] backdrop-blur-[7.5px] rounded-[20px] mb-20">
            {/* Header */}
            <div className="relative flex gap-8 max-w-[1166px] mx-auto mb-8">
                <div className="absolute bg-[#E6F7E6] px-6 py-4 rounded-full top-0 right-0">
                    <span className="text-[18px] font-semibold text-[#03A600]">Đang tuyển</span>
                </div>
                <img src={frameBig} alt="frame" className="h-[100px] object-cover" />
                <div className="flex flex-col gap-4">
                    <h3 className="heading-1">Nhân viên thiết kế đồ họa</h3>
                    <h4 className="heading-4">Nhân viên chính thức</h4>
                    <div className="flex gap-6">
                        <div className="flex gap-1 explication items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M21.7183 8.19024C20.5352 3.2322 15.9944 1 12.0056 1H11.9944C8.01689 1 3.46477 3.22146 2.28167 8.17951C0.963353 13.7171 4.52393 18.4068 7.74647 21.358C8.88869 22.411 10.416 22.9998 12.0056 23C13.538 23 15.0704 22.4527 16.2535 21.358C19.4761 18.4068 23.0366 13.7278 21.7183 8.19024ZM12.0056 13.5668C11.5395 13.5668 11.078 13.4794 10.6474 13.3095C10.2168 13.1396 9.82548 12.8906 9.4959 12.5767C9.16631 12.2628 8.90487 11.8901 8.7265 11.48C8.54813 11.0699 8.45633 10.6303 8.45633 10.1863C8.45633 9.74241 8.54813 9.30282 8.7265 8.89269C8.90487 8.48255 9.16631 8.10988 9.4959 7.79598C9.82548 7.48207 10.2168 7.23306 10.6474 7.06318C11.078 6.89329 11.5395 6.80585 12.0056 6.80585C12.947 6.80585 13.8497 7.16201 14.5154 7.79598C15.181 8.42994 15.5549 9.28978 15.5549 10.1863C15.5549 11.0829 15.181 11.9427 14.5154 12.5767C13.8497 13.2107 12.947 13.5668 12.0056 13.5668Z" fill="#A3A3A3" />
                            </svg>
                            <span>CVVH Đầm Sen</span>
                        </div>
                        <div className="flex gap-1 explication items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.35 15.57C16.2999 15.6552 16.2334 15.7296 16.1544 15.7889C16.0753 15.8482 15.9852 15.8912 15.8894 15.9154C15.7935 15.9396 15.6939 15.9445 15.5961 15.9299C15.4984 15.9152 15.4045 15.8812 15.32 15.83L12.22 13.98C11.45 13.52 10.88 12.51 10.88 11.62V7.52C10.88 7.11 11.22 6.77 11.63 6.77C12.04 6.77 12.38 7.11 12.38 7.52V11.62C12.38 11.98 12.68 12.51 12.99 12.69L16.09 14.54C16.45 14.75 16.57 15.21 16.35 15.57Z" fill="#A3A3A3" />
                            </svg>
                            <span>2 tuần trước</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Image */}
            <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds" alt="" className="w-[1166px] h-[687px] object-cover mx-auto mb-8" />
            <div className="max-w-[1166px] mx-auto flex-col flex gap-8">
                <div>
                    <p className="heading-2">Chi tiết tin tuyển dụng</p>
                </div>
                {/* Details jobs */}
                <table id="details-jobs-table">
                    {
                    tableHeader.map((value, index) => (
                        <tr key={index}>
                            <th>{value}</th>
                            <td className="table-data">
                                {
                                    (tableData[index] instanceof Array) ?
                                        <ul className="list-disc list-outside ml-[1em]">
                                            {
                                                tableData[index].map((data, i) => (
                                                    <li className="" key={i}>
                                                        {data}
                                                    </li>
                                                ))
                                            }
                                        </ul> : tableData[index]
                                }
                            </td>
                        </tr>
                    ))
                    }
                </table>
                <div>
                    <p className="heading-2 mb-3">Ứng tuyển Online</p>
                    <div className="flex gap-20 mb-8">
                        {/* Basic info */}
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <label className="label-input">Họ tên</label>
                                <div className="w-[437px] bg-white h-10 flex items-center text-[16px] pl-4 rounded-lg">
                                    <input className="focus:outline-none w-full" type="text" name="" id="" placeholder="Nguyễn Văn A" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="label-input">Năm sinh</label>
                                <div className="w-[437px] bg-white h-10 flex items-center text-[16px] pl-4 rounded-lg">
                                    <input className="focus:outline-none w-full" type="text" name="" id="" placeholder="12-12-2000" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="label-input">Nơi ở hiện nay</label>
                                <div className="w-[437px] bg-white h-10 flex items-center text-[16px] pl-4 rounded-lg">
                                    <input className="focus:outline-none w-full" type="text" name="" id="" placeholder="12-12-2000" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="label-input">Email</label>
                                <div className="w-[437px] bg-white h-10 flex items-center text-[16px] pl-4 rounded-lg">
                                    <input className="focus:outline-none w-full" type="text" name="" id="" placeholder="Nguyenvana@gmail.com" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="label-input">Trình độ</label>
                                <div className="w-[437px] bg-white h-10 flex items-center text-[16px] pl-4 rounded-lg">
                                    <input className="focus:outline-none w-full" type="text" name="" id="" placeholder="Đại học" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 h-[69px] items-start">
                                <legend className="label-input">Bạn có sẵn sàng đi công tác dài ngày</legend>
                                <div className="flex gap-7">
                                    <div className="flex gap-4 h-9 items-center">
                                        <input type="radio" id="contactChoice1" name="working" value="yes" />
                                        <label htmlFor="contactChoice1">Có</label>
                                    </div>
                                    <div className="flex gap-4 h-9 items-center">
                                        <input type="radio" id="contactChoice2" name="working" value="no" />
                                        <label className="label-radio" htmlFor="contactChoice2">Tùy thời điểm</label>
                                    </div>
                                    <div className="flex gap-4 h-9 items-center">
                                        <input type="radio" id="contactChoice3" name="working" value="" />
                                        <label className="label-radio" htmlFor="contactChoice3">Không</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* More info */}
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2 h-[69px] items-start">
                                <legend className="label-input">Giới tính</legend>
                                <div className="flex gap-7">
                                    <div className="flex gap-4 h-9  items-center">
                                        <input type="radio" id="" name="sex" value="male" />
                                        <label className="label-radio" htmlFor="">Nam</label>
                                    </div>
                                    <div className="flex gap-4 h-9 items-center">
                                        <input type="radio" id="" name="sex" value="female" />
                                        <label className="label-radio" htmlFor="">Nữ</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="label-input">Nơi sinh</label>
                                <div className="w-[437px] bg-white h-10 flex items-center text-[16px] pl-4 rounded-lg">
                                    <input className="focus:outline-none w-full" type="text" name="" id="" placeholder="Nhơn Phong, An Nhơn, Bình Định" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="label-input">Điện thoại</label>
                                <div className="w-[437px] h-10 flex items-center gap-4 text-[16px]">
                                    <div className="w-[74px] bg-white rounded-lg font-['Helvetica_Neue'] text-[16px] font-medium leading-9 text-[#666666] flex gap-1 items-center px-3">
                                        <img src="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/vietnam.png?alt=media&token=46e4518e-12cf-4b75-805d-e3c0611e06c2" className="w-[18px] h-[18px] object-cover" alt="quốc kỳ" />
                                        <span>+84</span>
                                    </div>
                                    <div className="w-full bg-white h-10 flex items-center text-[16px] pl-4 rounded-lg">
                                        <input className="focus:outline-none w-full" type="text" name="" id="" placeholder="0123456789" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="label-input">Facebook cá nhân</label>
                                <div className="w-[437px] bg-white h-10 flex items-center text-[16px] pl-4 rounded-lg">
                                    <input className="focus:outline-none w-full" type="text" name="" id="" placeholder="Nhơn Phong, An Nhơn, Bình Định" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="label-input">Đính kèm CV</label>
                                <div className="w-[437px] bg-white h-10 flex items-center text-[16px] pl-4 rounded-lg justify-between">
                                    <input type="file" name="" id="" hidden />
                                    {/* https://dev.to/faddalibrahim/how-to-create-a-custom-file-upload-button-using-html-css-and-javascript-1c03 */}
                                    <span className="text-[16px] text-[#A3A3A3]">Không có tập tin được chọn</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-[10px]">
                                        <path d="M11.5 22C9.96667 22 8.66667 21.4667 7.6 20.4C6.53333 19.3333 6 18.0333 6 16.5V6C6 4.9 6.39167 3.95833 7.175 3.175C7.95833 2.39167 8.9 2 10 2C11.1 2 12.0417 2.39167 12.825 3.175C13.6083 3.95833 14 4.9 14 6V15.5C14 16.2 13.7583 16.7917 13.275 17.275C12.7917 17.7583 12.2 18 11.5 18C10.8 18 10.2083 17.7583 9.725 17.275C9.24167 16.7917 9 16.2 9 15.5V6H10.5V15.5C10.5 15.7833 10.596 16.021 10.788 16.213C10.98 16.405 11.2173 16.5007 11.5 16.5C11.7833 16.5 12.021 16.404 12.213 16.212C12.405 16.02 12.5007 15.7827 12.5 15.5V6C12.5 5.3 12.2583 4.70833 11.775 4.225C11.2917 3.74167 10.7 3.5 10 3.5C9.3 3.5 8.70833 3.74167 8.225 4.225C7.74167 4.70833 7.5 5.3 7.5 6V16.5C7.5 17.6 7.89167 18.5417 8.675 19.325C9.45833 20.1083 10.4 20.5 11.5 20.5C12.6 20.5 13.5417 20.1083 14.325 19.325C15.1083 18.5417 15.5 17.6 15.5 16.5V6H17V16.5C17 18.0333 16.4667 19.3333 15.4 20.4C14.3333 21.4667 13.0333 22 11.5 22Z" fill="#0054A6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 h-[69px] items-start">
                                <legend className="label-input">Bạn có sẵn sàng làm thêm giờ</legend>
                                <div className="flex gap-7">
                                    <div className="flex gap-4 h-9 items-center">
                                        <input type="radio" id="contactChoice1" name="overtime" value="yes" />
                                        <label className="label-radio" htmlFor="contactChoice1">Có</label>
                                    </div>
                                    <div className="flex gap-4 h-9 items-center">
                                        <input type="radio" id="contactChoice2" name="overtime" value="no" />
                                        <label className="label-radio" htmlFor="contactChoice2">Tùy thời điểm</label>
                                    </div>
                                    <div className="flex gap-4 h-9 items-center">
                                        <input type="radio" id="contactChoice3" name="overtime" value="" />
                                        <label className="label-radio" htmlFor="contactChoice3">Không</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[954px] flex flex-col gap-3">
                        <div>
                            <p className="label-input mb-2">Những nơi đã từng làm việc trước đây <span className="font-normal">(ghi rõ vị trí)</span></p>
                            <textarea name="his" className="pt-[10px] pl-4 w-full rounded-lg h-[151px] focus:outline-none" placeholder="Những nơi đã từng làm việc trước đây" id=""></textarea>
                        </div>
                        <div>
                            <p className="label-input mb-2">Kinh nghiệm bản thân</p>
                            <textarea name="experences" className="pt-[10px] pl-4 w-full rounded-lg h-[151px] focus:outline-none" placeholder="Kinh nghiệm bản thân" id=""></textarea>
                        </div>
                        <div className="flex justify-end w-full mb-[42px]">
                            <div className="btn px-7 h-11 w-fit rounded-md flex items-center bg-[#0054A6] text-white font-semibold text-[18px]"><span>Gửi ngay</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}