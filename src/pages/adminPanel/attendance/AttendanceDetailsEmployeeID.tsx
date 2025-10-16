import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'

const AttendanceDetailsEmployeeID = () => {
  return (
    <>
    <Paragraph text="Upon clicking an employee ID, users are instantly directed to the **Attendance Details** page, offering a clear and insightful snapshot of that employee’s attendance for the month. This page is designed to provide a detailed breakdown of attendance records, including total days present, absences, late arrivals, early departures, and other key performance indicators. To make data analysis more efficient and user-friendly, the page features intuitive filter options. These filters allow users to tailor the view based on specific dates, attendance status, or shift timings—making it easy to pinpoint trends, identify issues, and make informed decisions. The clean layout and interactive elements ensure a smooth and engaging user experience." />
    <ImageCard src={images.adminAttendanceEmployeeID}/>
    </>
  )
}

export default AttendanceDetailsEmployeeID