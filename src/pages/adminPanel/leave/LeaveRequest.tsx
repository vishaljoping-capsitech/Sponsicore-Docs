import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const LeaveRequest = () => {
    return (
        <>
        <SubHeading text="Leave Request Approval" />
            <Paragraph text="Authorized users can easily review leave requests by clicking the status button to approve or reject them. Once an action is taken, it is final and no rollback is permitted to maintain clear accountability and prevent changes to processed requests. After the decision, users can only view the leave details to ensure transparency and accurate record keeping."/>
            <ImageCard src={images.adminLeaveRequest} />
        </>
    )
}

export default LeaveRequest