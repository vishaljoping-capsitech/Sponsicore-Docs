import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"

const ManageExpenses = () => {
    return (
        <>
            <Paragraph text="Employees have the flexibility to add, update, or remove their own expenses at any time during the trip process, as long as the trip status is either Pending or Approved. This allows users to keep their expense records accurate and up-to-date without any hassle, ensuring smooth reimbursement and better control over their travel budget. Whether you need to log new expenses as they occur, update details or correct amounts, or remove items that were added by mistake or are no longer relevant, all these actions are easily accessible. However, these options remain available only until the trip status progresses beyond Approved, giving you full control over your expense submissions during the critical stages of trip management."/>
            <ImageCard src={images.empTravelEditTravel} />
        </>
    )
}

export default ManageExpenses