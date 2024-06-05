import FeedCard from "../components/FeedCard";

export default function DetailsFeed() {
    return (
        <section className="w-[1348px] mx-auto p-12 shadow-details bg-[#ffffffcc] rounded-[20px] backdrop-blur-[7.5px] flex flex-col gap-12">
            <div className="font-[Roboto]">
                <p className="text-[48px] font-bold text-[#0054A6] leading-[80px]">Kết quả đấu giá giữ xe tại CVVH Đầm Sen 2022</p>
                <span className="text-[16px] leading-[21px] font-normal text-[#666666]">by tuyendung in on Tháng Năm 21, 2020</span>
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1716918658730-1aa57f9d4e5c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="anh"
                    className="rounded w-full h-[668px] object-cover"
                />
                <div className="text-[18px] font-[Roboto] font-normal leading-[27px] text-[#333] mb-8">
                    Công ty Cổ phần Dịch vụ Du lịch Phú Thọ xin thông báo đến các đơn vị tham gia đấu giá cạnh tranh hạng mục “Hợp tác giữ xe 02 – 04 bánh tại Công viên văn hóa Đầm Sen (Số 03 Hòa Bình, Phường 03, Quận 11, TP.HCM), kết quả như sau. <br/>
                    <ul className="list-disc list-inside">
                        <li>Tên hạng mục đấu giá: Hợp tác giữ xe 02 -04 bánh.</li>
                        <li>Giá khởi điểm được duyệt: 241.667.000 đồng/tháng (đã bao gồm thuế GTGT).</li>
                        <li>Bên mời đấu giá: Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Địa chỉ: Số 15 đường số 2 cư xá Lữ Gia, Phường 15, Quận 11, TP.HCM).</li>
                        <li>Địa điểm thực hiện: Công viên văn hóa Đầm Sen.</li>
                        <li>Hình thức lựa chọn đơn vị: Đấu giá cạnh tranh</li>
                    </ul>
                    <br />
                    Kết quả lựa chọn đơn vị:
                    <ul className="list-disc list-inside">
                        <li>Công ty TNHH Thương mại Dịch vụ Hai Tám Sáu (Mã số doanh nghiệp: 0313270903 - Địa chỉ: 247/8B Hoàng Hoa Thám, Phường 05, Quận Phú Nhuận, TP.HCM)</li>
                        <li> Giá tham gia: 13.500.000.000 đồng (đã gồm thuế GTGT)</li>
                        <li>Xếp hạng hồ sơ: Hạng 1+ Giá trúng đấu giá: 13.500.000.000 đồng (đã gồm thuế GTGT)</li>
                        <li> Loại hợp đồng: Hợp đồng hợp tác kinh doanh+ Thời gian thực hiện hợp đồng: 03 năm</li>
                    </ul>
                    <br />
                    Đề nghị Công ty TNHH TMDV Hai Tám Sáu trong vòng 02 ngày kể từ thời điểm nhận được thông báo trúng đấu giá của Công ty Cổ phần Dịch vụ Du lịch Phú Thọ, phải tiến hành thương thảo và ký hợp đồng. Nộp tiền bảo lãnh thực hiện hợp đồng bằng tiền mặt hoặc chuyển khoản tương ứng số tiền: 895.000.000 đồng (365 triệu/tháng x 03 tháng = 1.095.000.000 đồng trừ 200 triệu đồng tiền đã ký quỹ) ngay sau khi ký hợp đồng cho Công ty Cổ phần Dịch vụ Du lịch Phú Thọ theo đúng Hồ sơ yêu cầu mời đấu giá cạnh tranh ngày 31/5/2022.
                    Nếu quá thời hạn trên mà không thực hiện thương thảo, ký hợp đồng hoặc không nộp đủ số tiền bảo lãnh thực hiện hợp đồng, thì sẽ mất tiền ký quỹ và mặt bằng đấu giá hợp tác sẽ được chuyển cho khách hàng có hồ sơ đấu giá xếp hạng hai.
                    Kế hoạch ký kết hợp đồng với đơn vị được lựa chọn: Dự kiến trước ngày 30/6/2022.
                    Với những công ty không trúng đấu giá hợp tác sẽ được nhận lại ngay số tiền đã nộp ký quỹ là 200.000.000 đồng tại Văn phòng Công ty Cổ phần Dịch vụ Du lịch Phú Thọ.
                    Thông báo này là cơ sở để ký kết hợp đồng với nhà cung cấp trúng thầu đúng theo quy định.Trân trọng.
                    <br/>
                    Chi tiết xem trong văn bản đính kèm
                </div>
                <object data="https://firebasestorage.googleapis.com/v0/b/alta-875f0.appspot.com/o/CTDT-CLC-2019.pdf?alt=media&token=b2a51e44-c7c1-43e0-b4ea-d7eb7f5416ac"
                    width={'831px'} type="application/pdf" height={'747px'}
                    className="mx-auto"
                />
            </div>
            {/* Relative feeds */}
            <div>
                <p className="text-[32px] font-semibold leading-[36px] font-[Roboto] text-[#0054A6] mb-4">Bài viết liên quan</p>
                <div className="flex justify-between">
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                    <FeedCard />
                </div>
            </div>
        </section>
    )
}