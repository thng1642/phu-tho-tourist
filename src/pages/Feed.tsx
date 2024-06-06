import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { MouseEvent } from 'react';


import '../App.css';
import FeedCard from '../components/FeedCard';
import Footer from '../components/Footer';
import MiniTag from '../components/MiniTag';
import PaginationPage from '../components/PaginationPage';
import PolygonHeader from '../components/PolygonHeader';
import SearchBox from '../components/SearchBox';
import Slider from '../components/Slider';
import '../components/style/feed.css';
import { useAppSelector } from '../app/hook';
import { RootState } from '../app/store';

export default function Feed() {
    const items = document.getElementsByClassName("filter-pack-item")
    const selector = useAppSelector((state:RootState) => state.feed)
    const miniTags = [...selector]
    const cards = [...selector]

    const clickTopic = (e: MouseEvent) => {
        if (e.currentTarget.className.includes("item-focus")) {
            return
        } else {
            for (let i = 0; items?.length; i++) {
                if (items[i].className.includes("item-focus")) {
                    items[i].classList.remove('item-focus')
                    break
                }
            }
            e.currentTarget.className += " item-focus"
        }
    }
    return (
        <section className='w-full flex flex-col items-center justify-end gap-12 mb-10'>
            <PolygonHeader content={"bài viết"} />
            <section className='grid grid-flow-col gap-6'>
                {/* sliders */}
                <div>
                    <Slider />
                </div>
                {/* Shows mini tag */}
                <div className='h-[603px] pl-6 pr-[10px] bg-[#ffffffb3] rounded-lg shrink-0 backdrop-blur-[7.5px] shadow-new-feed'>
                    <h4 className='header-new py-4'>Bài viết mới</h4>
                    <div id='new-feeds' className='h-[535px] inline-flex flex-col gap-4 shrink-0 overflow-y-auto pr-[10px]'>
                    {
                        miniTags.map((value, index)=>(
                            <MiniTag id={value.id} title={value.title} views={value.views} dateAt={value.dateAt} key={index} img2={value.img2}/>
                        ))
                    }
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-[362px,_1fr] grid-rows-[80px,_1fr] w-[1520px] h-[1108px] gap-6'>
                {/* filter packs */}
                <div className='bg-[#ffffffb3] rounded-xl row-span-2 h-[1028px] px-5 backdrop-blur-[7.5px] shadow-filter shrink-0 relative'>
                    <h3 className='uppercase header-filter pt-7 pb-5'>chủ để bài viết</h3>
                    <div id='my-filter-packs' className='inline-flex flex-col items-start gap-5 w-full'>
                        <div className='filter-pack-item item-focus' onClick={clickTopic} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.1207 19.2331C11.5219 19.2331 10.9136 19.2424 10.3149 19.2331C9.76359 19.2238 9.3834 18.935 9.29786 18.432C9.07926 17.1931 8.46146 16.1872 7.62506 15.2557C5.44851 12.8339 5.69563 9.16387 8.14781 7.01217C10.4954 4.96294 14.0882 5.05608 16.3408 7.2171C18.5838 9.36879 18.7454 12.927 16.6639 15.2277C15.8085 16.1685 15.1812 17.1838 14.9626 18.4413C14.877 18.9443 14.4874 19.2144 13.9266 19.2331C13.3183 19.2424 12.7195 19.2331 12.1207 19.2331Z" fill="white" />
                                <path d="M12.1636 20.0976C12.7339 20.0976 13.3042 20.089 13.8745 20.0976C14.4887 20.1062 14.673 20.3128 14.6993 20.8983C14.7256 21.5527 14.6554 22.1296 13.8921 22.3965C13.7956 22.4309 13.7517 22.6548 13.7078 22.8011C13.5411 23.335 13.3305 23.5072 12.769 23.5158C12.3478 23.5158 11.9179 23.5244 11.4967 23.5158C10.9527 23.5072 10.707 23.3436 10.5842 22.8356C10.514 22.5514 10.3912 22.3706 10.1016 22.2501C9.74189 22.0951 9.59272 21.7593 9.57518 21.3719C9.52253 20.2267 9.6366 20.1062 10.7948 20.1062C11.2598 20.0976 11.7161 20.0976 12.1636 20.0976Z" fill="white" />
                                <path d="M15.797 2.37749C15.9607 2.09679 16.117 1.81183 16.2879 1.53539C16.4794 1.22387 16.8069 1.13274 17.1036 1.29629C17.4002 1.45983 17.5042 1.80254 17.3316 2.11557C17.0075 2.68825 16.6721 3.26368 16.3334 3.82783C16.142 4.13935 15.8039 4.21494 15.5154 4.03736C15.2269 3.85978 15.1367 3.5439 15.3175 3.21683C15.4665 2.9276 15.6375 2.65117 15.797 2.37749Z" fill="white" stroke="white" />
                                <path d="M6.84528 2.9861C6.67344 2.71035 6.49443 2.43907 6.32978 2.15883C6.14365 1.84413 6.21598 1.51194 6.49911 1.32594C6.78225 1.13994 7.13388 1.20795 7.33008 1.5068C7.68523 2.06073 8.03748 2.62604 8.37826 3.18892C8.56438 3.50363 8.47339 3.83788 8.18167 4.01009C7.88994 4.1823 7.56846 4.11465 7.36366 3.802C7.17746 3.5352 7.01281 3.25497 6.84528 2.9861Z" fill="white" stroke="white" />
                                <path d="M2.51119 9.64324C2.20306 9.54015 1.89225 9.44509 1.58682 9.33397C1.24286 9.20996 1.08699 8.90783 1.18674 8.58408C1.28649 8.26034 1.60086 8.08876 1.94249 8.19413C2.56912 8.39486 3.20078 8.6062 3.82204 8.82298C4.166 8.94699 4.3088 9.26261 4.19364 9.5812C4.07848 9.89979 3.78757 10.0524 3.43054 9.94191C3.11705 9.85488 2.81161 9.74376 2.51119 9.64324Z" fill="white" stroke="white" />
                                <path d="M21.8664 9.62785C22.1759 9.52899 22.4879 9.4382 22.7949 9.33128C23.1405 9.212 23.3005 8.91203 23.2052 8.58695C23.1099 8.26187 22.7979 8.08599 22.4549 8.18666C21.8255 8.37878 21.191 8.58144 20.5669 8.78969C20.2212 8.90897 20.0741 9.22259 20.1849 9.54273C20.2957 9.86287 20.5845 10.0195 20.943 9.91388C21.2576 9.83115 21.5646 9.72423 21.8664 9.62785Z" fill="white" stroke="white" />
                                <path d="M3.46403 15.7904C3.76081 15.6272 4.05368 15.457 4.35437 15.3009C4.71091 15.1235 5.00555 15.2025 5.17382 15.5086C5.33425 15.8004 5.23607 16.1139 4.89869 16.3087C4.30904 16.6421 3.7229 16.9643 3.12543 17.2835C2.77281 17.468 2.41017 17.3708 2.26457 17.0708C2.1268 16.785 2.24765 16.4776 2.58112 16.2757C2.60337 16.2635 2.63305 16.2472 2.65531 16.2349C2.92241 16.0881 3.18951 15.9413 3.46403 15.7904Z" fill="white" stroke="white" />
                                <path d="M20.9867 15.7904C20.6899 15.6272 20.397 15.457 20.0963 15.3009C19.7398 15.1235 19.4451 15.2025 19.2769 15.5086C19.1164 15.8004 19.2146 16.1139 19.552 16.3087C20.1416 16.6421 20.7278 16.9643 21.3252 17.2835C21.6779 17.468 22.0405 17.3708 22.1861 17.0708C22.3239 16.785 22.203 16.4776 21.8696 16.2757C21.8473 16.2635 21.8176 16.2472 21.7954 16.2349C21.5283 16.0881 21.2612 15.9413 20.9867 15.7904Z" fill="white" stroke="white" />
                            </svg>
                            <p className=''>Giới thiệu</p>
                        </div>
                        <div className='filter-pack-item' onClick={clickTopic}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 17H11V15H6V17ZM16 17H18V15H16V17ZM6 13H11V11H6V13ZM16 13H18V7H16V13ZM6 9H11V7H6V9ZM4 21C3.45 21 2.979 20.804 2.587 20.412C2.195 20.02 1.99934 19.5493 2 19V5C2 4.45 2.196 3.979 2.588 3.587C2.98 3.195 3.45067 2.99934 4 3H20C20.55 3 21.021 3.196 21.413 3.588C21.805 3.98 22.0007 4.45067 22 5V19C22 19.55 21.804 20.021 21.412 20.413C21.02 20.805 20.5493 21.0007 20 21H4Z" fill="#0054A6" />
                            </svg>
                            <p className=''>Tin tức</p>
                        </div>
                        <div className='filter-pack-item' onClick={clickTopic}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4ZM18 19H12V13H18V19ZM19 9H5V7H19V9Z" fill="#0054A6" />
                            </svg>
                            <p className=''>Sự kiện</p>
                        </div>
                        <div className='filter-pack-item' onClick={clickTopic}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M14.9998 19C15 19.5046 14.8094 19.9906 14.4664 20.3605C14.1233 20.7305 13.653 20.9572 13.1498 20.995L12.9998 21H10.9998C10.4953 21.0002 10.0093 20.8096 9.6393 20.4665C9.26932 20.1234 9.04269 19.6532 9.00485 19.15L8.99985 19H14.9998ZM11.9998 2C13.8148 1.99997 15.5589 2.70489 16.8641 3.96607C18.1693 5.22726 18.9336 6.94609 18.9958 8.76L18.9998 9V12.764L20.8218 16.408C20.9014 16.567 20.9412 16.7429 20.9378 16.9206C20.9345 17.0984 20.8881 17.2727 20.8027 17.4286C20.7173 17.5845 20.5953 17.7174 20.4473 17.8158C20.2993 17.9143 20.1297 17.9754 19.9528 17.994L19.8378 18H4.16185C3.98401 18.0001 3.80882 17.957 3.65127 17.8745C3.49372 17.792 3.35853 17.6725 3.25727 17.5264C3.156 17.3802 3.0917 17.2116 3.06985 17.0351C3.04801 16.8586 3.06928 16.6795 3.13185 16.513L3.17785 16.408L4.99985 12.764V9C4.99985 7.14348 5.73735 5.36301 7.0501 4.05025C8.36286 2.7375 10.1433 2 11.9998 2Z" fill="#0054A6" />
                            </svg>
                            <p className=''>Thông báo</p>
                        </div>
                        <div className='filter-pack-item' onClick={clickTopic}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M6 12H18V10H6V12ZM6 16H14V14H6V16ZM4 20C3.45 20 2.979 19.804 2.587 19.412C2.195 19.02 1.99934 18.5493 2 18V6C2 5.45 2.196 4.979 2.588 4.587C2.98 4.195 3.45067 3.99934 4 4H10L12 6H20C20.55 6 21.021 6.196 21.413 6.588C21.805 6.98 22.0007 7.45067 22 8V18C22 18.55 21.804 19.021 21.412 19.413C21.02 19.805 20.5493 20.0007 20 20H4Z" fill="#0054A6" />
                            </svg>
                            <p className=''>Tin cổ đông</p>
                        </div>
                        <div className='filter-pack-item' onClick={clickTopic}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 4.5C12.9283 4.5 13.8185 4.86875 14.4749 5.52513C15.1313 6.1815 15.5 7.07174 15.5 8C15.5 8.92826 15.1313 9.8185 14.4749 10.4749C13.8185 11.1313 12.9283 11.5 12 11.5C11.0717 11.5 10.1815 11.1313 9.52513 10.4749C8.86875 9.8185 8.5 8.92826 8.5 8C8.5 7.07174 8.86875 6.1815 9.52513 5.52513C10.1815 4.86875 11.0717 4.5 12 4.5ZM5 7C5.56 7 6.08 7.15 6.53 7.42C6.38 8.85 6.8 10.27 7.66 11.38C7.16 12.34 6.16 13 5 13C4.20435 13 3.44129 12.6839 2.87868 12.1213C2.31607 11.5587 2 10.7956 2 10C2 9.20435 2.31607 8.44129 2.87868 7.87868C3.44129 7.31607 4.20435 7 5 7ZM19 7C19.7956 7 20.5587 7.31607 21.1213 7.87868C21.6839 8.44129 22 9.20435 22 10C22 10.7956 21.6839 11.5587 21.1213 12.1213C20.5587 12.6839 19.7956 13 19 13C17.84 13 16.84 12.34 16.34 11.38C17.2119 10.2544 17.6166 8.8362 17.47 7.42C17.92 7.15 18.44 7 19 7ZM5.5 17.25C5.5 15.18 8.41 13.5 12 13.5C15.59 13.5 18.5 15.18 18.5 17.25V19H5.5V17.25ZM0 19V17.5C0 16.11 1.89 14.94 4.45 14.6C3.86 15.28 3.5 16.22 3.5 17.25V19H0ZM24 19H20.5V17.25C20.5 16.22 20.14 15.28 19.55 14.6C22.11 14.94 24 16.11 24 17.5V19Z" fill="#0054A6" />
                            </svg>
                            <p className=''>Hoạt động tập thể</p>
                        </div>
                    </div>
                    {/* Logo horizontal */}
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
                <div className='shadow-filter rounded-xl bg-[#ffffffb3] backdrop-blur-[7.5px] shrink-0 flex items-center justify-between z-10 '>
                    {/* Search box */}
                    <div className='ml-5'>
                        <SearchBox />
                    </div>
                    {/* Date picker */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker']}>
                            <DatePicker format='DD/MM/YYYY' defaultValue={dayjs()} />
                            <DatePicker format='DD/MM/YYYY' defaultValue={dayjs()} />
                        </DemoContainer>
                    </LocalizationProvider>
                    {/* Sorting */}
                    <div className='flex gap-2 items-center mr-[35px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 4V20M7 20L3 16M7 20L11 16M17 4V20M17 4L21 8M17 4L13 8" stroke="#0054A6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className='text-[18px] leading-[normal] font-[Roboto] font-semibold text-center text-[#666]'>A đến Z</span>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-8 z-[1] relative'>
                    <div className='flex flex-wrap justify-between gap-y-6 '>
                    {
                        cards.map((value, i) => (
                            <FeedCard key={i} id={value.id} title={value.title} author={value.author} dateAt={value.dateAt} views={value.views} types={value.type} img3={value.img3}  />
                        ))
                    }
                    </div>
                    {/* Navigation page */}
                    <PaginationPage />
                </div>
            </section>
            <Footer />
        </section>
    )
}