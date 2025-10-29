import Paragraph from "../../../components/Paragraph";
import { images } from '../../../assets';
import ImageCard from "../../../components/ImageCard";
import SubHeading from '../../../components/SubHeading'

const AddTravel = () => {
    return (
        <>
        <SubHeading text="Add Travel" />
            <Paragraph
                text={
                    <>
                        Users can create and submit travel requests by providing key travel and expense information. When adding a new request, users can:
                        <ul className="docs-list">
                            <li>Enter destination, travel dates, purpose of travel, and employee information</li>
                            <li>Specify estimated travel expenses such as transportation, accommodation, meals, and other costs</li>
                            <li>Upload relevant attachments like itineraries, booking confirmations, or approval documents</li>
                            <li>View the total estimated cost for budget tracking and reimbursement planning</li>
                            This process helps ensure accurate and complete travel request submissions for approval and reimbursement.
                            <ImageCard src={images.adminTravelAddTravel} />
                        </ul>
                    </>
                }
            /> 
        </>
    )
}

export default AddTravel