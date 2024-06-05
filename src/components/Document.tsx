import './style/document.css'

export default function Document() {
    return (
        <div className="card-docs h-[261px] flex flex-col justify-center items-center relative">
            <div className='card-docs-content flex flex-col justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="104" height="104" viewBox="0 0 104 104" fill="none">
                    <g clip-path="url(#clip0_272_54101)">
                        <path d="M33.0587 26.2449V16.5906C33.0587 15.7371 33.3978 14.9185 34.0013 14.315C34.6048 13.7115 35.4233 13.3724 36.2768 13.3724H68.458L84.5485 29.463V74.5166C84.5485 75.3701 84.2095 76.1886 83.6059 76.7921C83.0024 77.3956 82.1839 77.7347 81.3304 77.7347H71.6761" fill="#E1E1E1" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M68.458 90.6071H23.4044C22.5509 90.6071 21.7324 90.2681 21.1288 89.6646C20.5253 89.0611 20.1863 88.2425 20.1863 87.389V29.463C20.1863 28.6095 20.5253 27.791 21.1288 27.1875C21.7324 26.5839 22.5509 26.2449 23.4044 26.2449H55.5855L71.6761 42.3355V87.389C71.6761 88.2425 71.337 89.0611 70.7335 89.6646C70.13 90.2681 69.3115 90.6071 68.458 90.6071ZM34.0575 61.6441C34.0575 60.4184 35.0511 59.4247 36.2768 59.4247H55.5855C56.8112 59.4247 57.8049 60.4184 57.8049 61.6441C57.8049 62.8699 56.8112 63.8635 55.5855 63.8635H36.2768C35.0511 63.8635 34.0575 62.8699 34.0575 61.6441ZM36.2768 72.2972C35.0511 72.2972 34.0575 73.2908 34.0575 74.5166C34.0575 75.7423 35.0511 76.736 36.2768 76.736H55.5855C56.8112 76.736 57.8049 75.7423 57.8049 74.5166C57.8049 73.2908 56.8112 72.2972 55.5855 72.2972H36.2768Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_272_54101">
                            <rect width="102.98" height="102.98" fill="white" transform="translate(0.877563 0.5)" />
                        </clipPath>
                    </defs>
                </svg>
                <h4>Báo cáo Tài Chính năm 2022-2023</h4>
            </div>
            <p className='absolute bottom-3 text-white text-[16px] font-[Roboto] font-semibold'>Click để xem</p>
        </div>
    )
}