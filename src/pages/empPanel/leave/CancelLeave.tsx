import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const CancelLeave = () => {
  return (
    <>
    <SubHeading text="Cancel Leave" />
    <Paragraph text="Employees can cancel a leave request if needed, with two options: Full Cancel or Partial Cancel (for multi-day leaves). This action is allowed only for upcoming leave days, as past leave cannot be canceled. Canceling provides flexibility when plans change, while still maintaining accurate leave records. It ensures leave balances and schedules remain up to date." />
    <ImageCard src = {images.empLeaveCancelLeave}/>
    </>
  )
}

export default CancelLeave