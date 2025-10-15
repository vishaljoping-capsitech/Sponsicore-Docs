import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const LeaveFilters = () => {
    return (
        <>
            <Paragraph text="Leave applications are organized by leave type and displayed as visually distinct bricks. These bricks not only provide a clear overview of the different leave categories but also serve as interactive filters, allowing users to quickly narrow down and access specific types of leave requests for efficient management."
            />
            <ImageCard src={images.adminLeaveFilters} />
        </>
    )
}

export default LeaveFilters