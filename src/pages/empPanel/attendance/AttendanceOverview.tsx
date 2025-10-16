import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"


const AttendanceOverview = () => {
    return (
        <>
            <Paragraph text="Employees can access a detailed overview of their attendance for any specific day by clicking the Status button associated with that date. This feature provides insights such as the recorded attendance status, check-in and check-out times, and any additional remarks or actions taken. To maintain accuracy and relevance, the overview is displayed only when attendance data exists for the selected day and the date is not in the future. This helps employees track their daily attendance records effectively while ensuring that future or incomplete data is not mistakenly shown." />
            <ImageCard src={images.empAttendanceDetails} />
        </>
    )
}

export default AttendanceOverview