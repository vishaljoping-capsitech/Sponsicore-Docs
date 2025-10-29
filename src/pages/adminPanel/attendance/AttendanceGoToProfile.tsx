import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import SubHeading from '../../../components/SubHeading'

const AttendanceGoToProfile = () => {
  return (
    <>
    <SubHeading text="Go To Profile Button" />
    <Paragraph text="The Attendance Details page includes a Go to Profile button that provides direct navigation to the corresponding Employee Details module. When triggered, the system retrieves the selected employee's profile data and redirects the user to the Employee Details page. This page displays comprehensive employee information, including personal details, designation, department, contact data, and other HR-related attributes" />
    <ImageCard src={images.adminAttendanceGoToProfile}/>
    </>
  )
}

export default AttendanceGoToProfile