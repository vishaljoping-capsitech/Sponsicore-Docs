import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import SubHeading from '../../../components/SubHeading'

const AttendanceFilter = () => {
    return (
        <>
        <SubHeading text="Dynamic Filters And Navigation" />
            <Paragraph text="The Attendance Details page includes multiple dynamic filters to refine data views. All filters except the Month filter apply to the employee list, which updates automatically based on the selected criteria such as attendance status, shift, or date range. The Month filter adjusts the time frame of the detailed attendance data for the selected employee. Users can switch between employees directly from the updated list, enabling quick comparisons and efficient data analysis." />
            <ImageCard src={images.adminAttendanceFilter} />
        </>
    )
}

export default AttendanceFilter