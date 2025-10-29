import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import SubHeading from '../../../components/SubHeading'

const AttendanceDetailsEmployeeID = () => {
  return (
    <>
    <SubHeading text="View And Filter Attendance" />
    <Paragraph text="Clicking on Employee ID navigates the user to the Attendance Details page, which provides a comprehensive monthly summary of the employee’s attendance, including total days present, absences, late arrivals, and early departures. The page supports filtering options by date range, attendance status, and shift to facilitate targeted data analysis. An Import function is available to upload bulk attendance records for the selected employee. A predefined import template is provided, containing detailed instructions for each attendance type to ensure accurate data entry." />
    <ImageCard src={images.adminAttendanceEmployeeID}/>
    </>
  )
}

export default AttendanceDetailsEmployeeID