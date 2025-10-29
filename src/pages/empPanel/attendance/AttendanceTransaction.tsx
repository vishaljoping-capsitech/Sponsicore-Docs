import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const AttendanceTransaction = () => {
    return (
        <>
        <SubHeading text="Attendance In/Out Time" />
            <Paragraph text="By default, the system shows the first clock-in or last clock-out for each day, giving a quick snapshot of attendance. Additional entries, such as multiple clock-ins or outs, are accessible on hover, keeping the view clean while ensuring full visibility of all daily attendance activity." />
            <ImageCard src={images.empAttendanceTransaction} />
        </>
    )
}

export default AttendanceTransaction