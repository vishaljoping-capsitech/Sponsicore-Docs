import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const LeaveApplication = () => {
    return (
        <>
            <Paragraph text="The system initially displays leave applications from the past 10 days as well as all upcoming requests, providing a clear and focused view. Users can easily customize this view using filters to quickly find specific leave types, dates, or statuses, making leave tracking and management more efficient and intuitive."
            />
            <ImageCard src={images.adminLeavePanel} />
        </>
    )
}

export default LeaveApplication