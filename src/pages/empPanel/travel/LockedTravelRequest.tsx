import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"

const LockedTravelRequest = () => {
    return (
        <>
        <SubHeading text="Locked Travel Request" />
            <Paragraph text="A locked travel request indicates that it has reached a stage where no further edits or deletions are allowed, typically after approval, processing, or trip commencement. This ensures data consistency, prevents accidental changes, and maintains an accurate audit trail. Users should verify all details before submission, as locked requests cannot be modified." />
            <ImageCard src={images.empTravelLockedTravel} />
        </>
    )
}

export default LockedTravelRequest