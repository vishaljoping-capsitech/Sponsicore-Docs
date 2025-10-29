import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const RequestNotification = () => {
    return (
        <>
        <SubHeading text="Request Notifications" />
            <Paragraph text="Whenever an admin acts on an employee request, an automated email notifies the employee with the specific action whether it is approval, rejection, or update. This ensures real-time, transparent communication, reduces manual follow-ups, and keeps employees informed efficiently." />
            <ImageCard src={images.empRequestApprovedNotification} />
        </>
    )
}

export default RequestNotification