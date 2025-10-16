import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'

const AddEditAttendance = () => {
  return (
    <>
    <Paragraph text="To provide greater flexibility and control over attendance management, the **Attendance Details** page includes an Attendance Status button that allows users to **add or edit attendance records** for a specific employee. By clicking this button, users can easily make updates to an employee’s attendance—for example, marking a day as present, absent, late, or adjusting half-day entries. This feature is especially useful for HR personnel or managers who need to make corrections or manual entries due to missed punches, approved leaves, or shift changes. The interface for editing is designed to be user-friendly and efficient, minimizing the time and effort required to manage attendance data. This functionality not only ensures accuracy in record-keeping but also helps maintain up-to-date attendance logs, supporting better reporting and decision-making." />
    <ImageCard src={images.adminAttendanceStatus}/>
    </>
  )
}

export default AddEditAttendance