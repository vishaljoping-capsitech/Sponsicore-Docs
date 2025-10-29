import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const LockedTravel = () => {
    return (
        <>
        <SubHeading text="Locked Travel" />
            <Paragraph
                text={"Once a travel request is locked, it is rendered read-only and cannot be modified or deleted. This functionality preserves data integrity for finalized or approved requests, prevents unauthorized alterations, clearly differentiates active and completed requests, and ensures reliable records"} />
            <ImageCard src={images.adminTravelLockedTravel} />
        </>
    )
}

export default LockedTravel