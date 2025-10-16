import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"

const LockedTravelRequest = () => {
    return (
        <>
            <Paragraph text="If a travel request is locked, it means that the request has reached a stage in the workflow where changes are no longer permitted. Once locked, the travel request cannot be edited or deleted by the user. This typically occurs after certain actions have been taken—such as final approval, submission for processing, or once the trip has begun—to ensure data consistency and maintain an accurate audit trail. Locking a request helps prevent accidental modifications or deletions that could affect travel arrangements, approvals, or financial records. Users are encouraged to review all details carefully before submission, as further changes will not be possible once the request is locked." />
            <ImageCard src={images.empTravelLockedTravel} />
        </>
    )
}

export default LockedTravelRequest