import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'

import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const AutomatedNotification = () => {
    return (
        <>
        <SubHeading text="Leave Notifications" />
            <Paragraph text="Whenever an admin takes action on a leave request whether by approving or rejecting it , an automated email is immediately sent to the employee. This ensures clear and timely communication, keeping employees informed about the status of their leave applications without any manual intervention."/>
            <ImageCard src={images.adminLeaveAutomatedNotification} />
        </>
    )
}

export default AutomatedNotification