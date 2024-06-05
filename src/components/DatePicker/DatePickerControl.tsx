const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]
function DatePickerControl(props) {
    return (
        <div className="date-control">
            <button className="btn" type="button" onClick={props.navigateToPrevMonth}>
                prev.
            </button>
            <span>{monthNames[props.currentMonth]}</span>
            <button className="btn" type="button" onClick={props.navigateToNextMonth}>
                next
            </button>
        </div>
    )
}
export default DatePickerControl