import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"


const LeaveNotification = () => {
  return (
    <>
      <Paragraph text="When the admin takes any action on a leave application—such as approving, rejecting, editing, canceling, or deleting—an automated email notification is immediately triggered and sent to the employee. This email clearly reflects the specific action that has been taken, providing important details such as the updated status of the leave request, any changes made, and relevant dates. The notification ensures that employees are kept informed in real-time about their leave application status, promoting transparency and reducing the need for manual follow-ups. This automated communication helps streamline the leave management process and keeps both employees and management aligned." />
      <ImageCard src={images.empLeaveNotification} />
    </>
  )
}

export default LeaveNotification