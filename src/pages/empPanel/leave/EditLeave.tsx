import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const EditLeave = () => {
  return (
    <>
    <SubHeading text="Edit Leave" />
    <Paragraph text="Employees can edit leave applications only if the status is pending, allowing changes to dates, leave type, or reason before approval. This ensures the request reflects the most accurate and current information. Once the leave is approved, editing is no longer allowed." />
    <ImageCard src = {images.empLeaveEditLeave}/>
    </>
  )
}

export default EditLeave