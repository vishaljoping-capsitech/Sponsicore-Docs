import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'

const AttendanceGoToProfile = () => {
  return (
    <>
    <Paragraph text="To further enhance user navigation and provide quick access to more detailed information, a Go to Profile button has been added to the Attendance Details page. This button serves as a direct link to the selected employee's full profile. By clicking on it, users are seamlessly taken to the Employee Details page, where they can view comprehensive information about the individual, such as personal details, job role, contact information, department, and other HR-related records. This feature allows for a more integrated user experience by connecting attendance data with the broader context of the employee's profile, making it easier for managers or HR personnel to make informed decisions without having to navigate through multiple sections of the system." />
    <ImageCard src={images.adminAttendanceGoToProfile}/>
    </>
  )
}

export default AttendanceGoToProfile