import formatDate from "./formatDate"

function getDaysInMonth(
    month = new Date().getMonth(), 
    year = new Date().getFullYear()
) {
    const date = new Date(year, month, 1)
    const days:string[] = []
    
    while(date.getMonth() === month) {
        days.push(formatDate(new Date(date)))
        date.setDate(date.getDate() + 1)
    }
    return days
}
export default getDaysInMonth