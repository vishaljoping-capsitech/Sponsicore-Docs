import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"
import Title from "../../../components/Title"


const AttendanceDetails = () => {
    return (
        <>
        <SubHeading text="More Attendance Details" />
            <Paragraph text={<>Each attendance row (except Weekend Off or Holiday) features a <Title text="More" /> menu with quick actions like applying for leave, correcting attendance, reporting missing cards, marking WFH/WFC, or addressing unauthorized absences. This allows employees to manage attendance directly from the table, streamlining requests and ensuring timely updates.</>} />
            <ImageCard src={images.empAttendanceMoreDetails} />
        </>
    )
}

export default AttendanceDetails