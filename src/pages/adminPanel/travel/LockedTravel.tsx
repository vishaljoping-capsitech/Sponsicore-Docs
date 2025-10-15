import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const LockedTravel = () => {
    return (
        <>
            <Paragraph
                text={
                    <>
                        Once a travel request is locked, it becomes read-only and cannot be edited or deleted. This functionality ensures:
                        <ul>
                            <li>Data integrity for finalized or approved travel plans</li>
                            <li>Prevention of unauthorized changes after approval or completion</li>
                            <li>Clear distinction between active and finalized requests</li>
                            <li>Reliable records for auditing, reporting, and reimbursement processes</li>
                            This helps maintain a secure and trustworthy travel request system, especially for completed or approved entries.
                            <ImageCard src={images.adminTravelLockedTravel} />
                        </ul>
                    </>
                } />
        </>
    )
}

export default LockedTravel