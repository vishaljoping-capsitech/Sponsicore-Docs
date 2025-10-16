import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"


const AttendanceDetails = () => {
    return (
        <>
            <Paragraph text={<>Each row in the attendance table—except those marked as Weekend Off or Holiday—includes a <Title text="More" /> options menu that provides context-specific actions based on the attendance status for that day. This menu allows employees to conveniently perform tasks such as applying for leave, or submitting requests for attendance corrections, missing card entries, unauthorized absences, or marking attendance as Work from Home (WFH) or Work from Client (WFC). These quick-access options are designed to streamline attendance-related requests by allowing employees to take immediate action directly from the table, without navigating to separate forms or pages. This improves efficiency and ensures timely updates to attendance records.</>} />
            <ImageCard src={images.empAttendanceMoreDetails} />
        </>
    )
}

export default AttendanceDetails