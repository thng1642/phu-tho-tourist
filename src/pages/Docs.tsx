import { useRef } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

import Document from "../components/Document";
import Footer from "../components/Footer";
import PaginationPage from "../components/PaginationPage";
import PolygonHeader from "../components/PolygonHeader";
import '../components/style/document.css'
import SearchBox from "../components/SearchBox";

const dummy = [
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
    {
        name: "Khám phá Hội An - Việt Nam",
        dateAt: "03/03/12 22:43"
    },
]
export default function Docs() {
    const tableRef = useRef<HTMLDivElement>(null)
    return (
        <>
            <section className="w-full flex flex-col items-center gap-12">
                <PolygonHeader content={"Tài liệu"} />
                <div className="grid grid-cols-4 gap-[22px] w-[774px] mb-9">
                    <Document />
                    <Document />
                    <Document />
                    <Document />
                    <Document />
                    <Document />
                    <Document />
                    <Document />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24" fill="none" className="hover:animate-bounce hover:cursor-pointer mb-[200px]"
                    onClick={() => {
                        tableRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}
                >
                    <path d="M24.5 12L13 22L1.5 12" stroke="#F0F0F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M24.5 2L13 12L1.5 2" stroke="#F0F0F0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <main className="relative container-table-docs px-[54px] py-12 flex flex-col">
                    <div className="flex font-[Roboto] text-[18px] font-semibold text-[#0054A6] justify-between items-center mb-[14px]">
                        {/* Date picker */}
                        <div>
                            <p>Ngày tạo</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']}>
                                    <DatePicker format='DD/MM/YYYY' defaultValue={dayjs()}/>
                                    <DatePicker format='DD/MM/YYYY' defaultValue={dayjs()}/>
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                        <div className="inline-flex flex-col items-start gap-2">
                            <p>Từ khóa</p>
                            <SearchBox />
                        </div>
                    </div>
                    {/* Table source */}
                    <div className="w-flex justify-center mb-8" ref={tableRef}>
                        <table className="table-content flex flex-col gap-2">
                            <tr className="table-header rounded-lg flex">
                                <th className="w-[82px] px-6">STT</th>
                                <th className="pl-6 w-[540px] text-start">Tên tài liệu</th>
                                <th className="pl-4 w-[354px] text-start">Ngày tạo</th>
                                <th className=" w-[150px]">Tải tài liệu</th>
                            </tr>
                            {
                                dummy.map((value, index) => (
                                    <tr className="rounded-lg flex" key={index}>
                                        <td className="px-6 w-[82px]">{index + 1}</td>
                                        <td className="pl-6 w-[540px] line-clamp-1 text-start">{value.name}</td>
                                        <td className="pl-4 w-[354px] text-start">{value.dateAt}</td>
                                        <td className="flex w-[150px] justify-center">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                    <path d="M12 16.075C11.8667 16.075 11.7417 16.0543 11.625 16.013C11.5083 15.9717 11.4 15.9007 11.3 15.8L7.7 12.2C7.51667 12.0167 7.425 11.7833 7.425 11.5C7.425 11.2167 7.51667 10.9833 7.7 10.8C7.88333 10.6167 8.121 10.521 8.413 10.513C8.705 10.505 8.94234 10.5923 9.125 10.775L11 12.65V5.5C11 5.21667 11.096 4.979 11.288 4.787C11.48 4.595 11.7173 4.49934 12 4.5C12.2833 4.5 12.521 4.596 12.713 4.788C12.905 4.98 13.0007 5.21734 13 5.5V12.65L14.875 10.775C15.0583 10.5917 15.296 10.504 15.588 10.512C15.88 10.52 16.1173 10.616 16.3 10.8C16.4833 10.9833 16.575 11.2167 16.575 11.5C16.575 11.7833 16.4833 12.0167 16.3 12.2L12.7 15.8C12.6 15.9 12.4917 15.971 12.375 16.013C12.2583 16.055 12.1333 16.0757 12 16.075ZM6 20.5C5.45 20.5 4.979 20.304 4.587 19.912C4.195 19.52 3.99934 19.0493 4 18.5V16.5C4 16.2167 4.096 15.979 4.288 15.787C4.48 15.595 4.71733 15.4993 5 15.5C5.28333 15.5 5.521 15.596 5.713 15.788C5.905 15.98 6.00067 16.2173 6 16.5V18.5H18V16.5C18 16.2167 18.096 15.979 18.288 15.787C18.48 15.595 18.7173 15.4993 19 15.5C19.2833 15.5 19.521 15.596 19.713 15.788C19.905 15.98 20.0007 16.2173 20 16.5V18.5C20 19.05 19.804 19.521 19.412 19.913C19.02 20.305 18.5493 20.5007 18 20.5H6Z" fill="#0054A6" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-between items-center content-page text-[#4D4D4D]">
                        <div>
                            <p className="flex gap-2 items-center">Hiển thị <span className="border-[#0054A6] border py-[3px] px-[13px] border-solid rounded font-bold text-[16px] font-['Open_Sans']">{dummy.length}</span> câu trả lời trong mỗi trang</p>
                        </div>
                        <PaginationPage />
                    </div>
                </main>
                <Footer />
            </section>
        </>
    )
}