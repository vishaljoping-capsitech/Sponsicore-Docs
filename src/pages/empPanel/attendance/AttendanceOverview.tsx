import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const AttendanceOverview = () => {
    return (
        <>
        <SubHeading text="Attendance Overview" />
            <Paragraph text="Employees can view a detailed daily attendance overview by clicking the Status button for a specific date. This displays the recorded attendance status, check-in and check-out times, and any relevant remarks or actions. The overview is shown only for dates with existing attendance data and excludes future dates, helping employees track their daily records accurately and efficiently." />
            <ImageCard src={images.empAttendanceDetails} />
        </>
    )
}

export default AttendanceOverview