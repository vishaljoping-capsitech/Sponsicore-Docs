import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const PendingLeaveNotification = () => {
    return (
        <>
            <Paragraph text="To help users quickly identify pending leave requests, a red dot indicator appears on the corresponding leave type brick whenever there are applications awaiting approval. This visual cue ensures that no pending requests go unnoticed, enabling timely review and action."
            />
            <ImageCard src={images.adminLeaveAutomatedNotification} />
        </>
    )
}

export default PendingLeaveNotification