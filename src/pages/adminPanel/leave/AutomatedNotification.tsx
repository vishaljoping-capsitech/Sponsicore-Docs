import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'

import ImageCard from "../../../components/ImageCard"
const AutomatedNotification = () => {
    return (
        <>
            <Paragraph text="Whenever an admin takes action on a leave request—whether approving or rejecting—an automated email is immediately sent to the employee. This ensures clear and timely communication, keeping employees informed about the status of their leave applications without any manual intervention."
            />
            <ImageCard src={images.adminLeaveAutomatedNotification} />
        </>
    )
}

export default AutomatedNotification