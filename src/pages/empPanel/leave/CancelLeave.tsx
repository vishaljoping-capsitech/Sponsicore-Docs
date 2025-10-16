import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"


const CancelLeave = () => {
  return (
    <>
    <Paragraph text="Finally, employees may delete leave applications that are no longer needed or were submitted mistakenly. Unlike canceling, deleting usually means permanently removing the application record from the system. This action helps keep the leave management database clean and organized by removing irrelevant or erroneous entries. However, depending on organizational policies, deletion might be restricted to certain types of leave or require authorization to ensure data integrity." />
    <ImageCard src = {images.empLeaveCancelLeave}/>
    </>
  )
}

export default CancelLeave