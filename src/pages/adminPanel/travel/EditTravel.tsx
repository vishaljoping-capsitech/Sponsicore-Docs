import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const EditTravel = () => {
    return (
        <>
            <Paragraph
                text={
                    <>
                        Users can edit existing travel requests to ensure travel plans and expenses stay accurate and up to date. When editing a request, users can:
                        <ul>
                            <li>Update travel details such as destination, dates, purpose of travel, and traveler information</li>
                            <li>Modify expense entries to reflect updated or corrected costs</li>
                            <li>Change or replace attachments including itineraries, receipts, or other supporting documents</li>
                            <li>Adjust reimbursement amounts based on revised expenses or changes in the travel plan</li>
                            <li>Save all changes to ensure the travel request reflects the most current and accurate information</li>
                            This functionality allows for flexible and efficient management of travel plans throughout the approval and reimbursement process.
                            <ImageCard src={images.adminTravelEditTravel} />
                        </ul>
                    </>
                } />
        </>
    )
}

export default EditTravel