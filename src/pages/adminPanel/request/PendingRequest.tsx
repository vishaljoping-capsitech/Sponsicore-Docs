import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const PendingRequest = () => {
  return (
    <>
    <SubHeading text="Pennding Request Notification" />
    <Paragraph text="A red dot appears on the relevant request type brick whenever there is a pending request in that category, providing a clear visual alert for users to identify items that need attention. Additionally, once an admin takes action on a request whether approving or rejecting , an automated email is sent to the employee. This notification ensures that employees are promptly informed of the status update, maintaining transparent and efficient communication." />
    <ImageCard src={images.adminRequestOverview} />
    </>
  )
}

export default PendingRequest