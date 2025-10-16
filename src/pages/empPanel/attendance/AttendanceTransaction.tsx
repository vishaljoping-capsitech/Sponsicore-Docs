import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"


const AttendanceTransaction = () => {
    return (
        <>
            <Paragraph text="By default, the system displays either the first clock-in or the last clock-out transaction for each day, providing a quick snapshot of the employee's attendance. This helps in highlighting the most relevant entry or exit time without cluttering the view with multiple entries. However, if an employee has multiple clock-in or clock-out transactions on the same day—such as during breaks or off-site visits—these additional records are not lost. Instead, they are conveniently accessible and will be displayed when the user hovers over the attendance entry. This approach maintains a clean interface while still offering complete visibility into all attendance activity for the day." />
            <ImageCard src={images.empAttendanceTransaction} />
        </>
    )
}

export default AttendanceTransaction