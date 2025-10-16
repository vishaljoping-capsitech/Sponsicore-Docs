import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"


const AddLeave = () => {
  return (
    <>
    <Paragraph text="Employees have the ability to add leave applications when they need time off from work. This process involves filling out the necessary details such as the type of leave (e.g., vacation, sick leave), start and end dates, and any relevant notes or reasons for the leave. Adding a leave application initiates the formal request, which may then be subject to approval by a supervisor or HR department. This function ensures that employee absences are properly documented and managed within the organization's leave tracking system." />
    <ImageCard src = {images.empLeaveAddLeave}/>
    </>
  )
}

export default AddLeave