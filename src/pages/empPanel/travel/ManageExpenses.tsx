import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"

const ManageExpenses = () => {
    return (
        <>
        <SubHeading text="Manage Travel Expenses" />
            <Paragraph text="Employees can add, update, or delete their expenses while a trip is in Pending or Approved status, ensuring accurate and up-to-date records for smooth reimbursement. Once the trip status moves beyond Approved, expense modifications are restricted to maintain data integrity."/>
            <ImageCard src={images.empTravelEditTravel} />
        </>
    )
}

export default ManageExpenses