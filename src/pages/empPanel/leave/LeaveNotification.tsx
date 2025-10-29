import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const LeaveNotification = () => {
  return (
    <>
    <SubHeading text="Leave Notifications" />
      <Paragraph text="Whenever an admin approves, rejects, edits, cancels, or deletes a leave application, an automated email is sent to the employee detailing the action taken, updated status, and relevant dates. This ensures real-time communication, transparency, and a streamlined leave management process without the need for manual follow-ups." />
      <ImageCard src={images.empLeaveNotification} />
    </>
  )
}

export default LeaveNotification