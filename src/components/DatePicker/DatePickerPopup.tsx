import DatePickerControl from "./DatePickerControl"
type Props = {
    currentMonth:number,
    currentYear:number,
    navigateMonth: (x: number) => void,
    children: JSX.Element | JSX.Element[]
}
function DatePickerPopup(props:Props) {
    return (
        <div>
            <div className="year">{props.currentYear}</div>
            <DatePickerControl
                currentMonth={props.currentMonth}
                navigateToNextMonth={() => props.navigateMonth(1)}
                navigateToPrevMonth={() => props.navigateMonth(-1)}
            />
            <span className="week-code">Mo</span>
            <span className="week-code">Tu</span>
            <span className="week-code">We</span>
            <span className="week-code">Th</span>
            <span className="week-code">Fr</span>
            <span className="week-code">Sa</span>
            <span className="week-code">Su</span>
            {props.children}
        </div>
    )
}
export default DatePickerPopup