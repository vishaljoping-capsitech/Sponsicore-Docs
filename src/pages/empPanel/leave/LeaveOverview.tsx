import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const LeaveOverview = () => {
    return (
        <>
        <SubHeading text="Leave Status Overview" />
            <Paragraph text="Employees can view comprehensive details of their leave applications by clicking the **Status** button. The detailed view displays key information such as the applied date, leave type, leave duration, total days, reason for leave, current status, admin notes, and any attached documents for reference.
" />
            <ImageCard src={images.empLeaveOverview} />
        </>
    )
}

export default LeaveOverview