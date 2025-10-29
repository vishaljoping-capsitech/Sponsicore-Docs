import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const AddLeave = () => {
  return (
    <>
    <SubHeading text="Add Leave" />
    <Paragraph text="Employees can add leave applications by specifying the leave type, duration, and reason. This initiates a formal approval process, ensuring all absences are properly documented and managed within the organization's leave tracking system." />
    <ImageCard src = {images.empLeaveAddLeave}/>
    </>
  )
}

export default AddLeave