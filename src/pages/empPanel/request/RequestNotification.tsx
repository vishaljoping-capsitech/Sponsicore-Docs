import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"


const RequestNotification = () => {
    return (
        <>
            <Paragraph text="Whenever an admin takes action on an employee's request or application, an automated email notification is triggered and sent directly to the employee. This email clearly reflects the specific action taken—whether it's approval, rejection, cancellation, or any other update—ensuring the employee stays informed in real-time. By providing timely and transparent communication, this automated system helps reduce uncertainty, keeps employees updated on the status of their requests, and enhances overall transparency within the organization's workflow. This also minimizes the need for manual follow-ups, making the process more efficient for both employees and administrators." />
            <ImageCard src={images.empRequestApprovedNotification} />
        </>
    )
}

export default RequestNotification