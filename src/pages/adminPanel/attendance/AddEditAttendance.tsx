import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import SubHeading from '../../../components/SubHeading'

const AddEditAttendance = () => {
  return (
    <>
    <SubHeading text="Add and Edit Attendance" />
    <Paragraph text="The Attendance Details page includes an Attendance Status button that enables users to add or edit attendance records for a specific employee. This feature supports updates such as marking present, absent, late, or half-day entries. It helps to make manual adjustments for missed punches, approved leaves, or shift changes, ensuring accurate and up-to-date attendance data." />
    <ImageCard src={images.adminAttendanceStatus}/>
    </>
  )
}

export default AddEditAttendance