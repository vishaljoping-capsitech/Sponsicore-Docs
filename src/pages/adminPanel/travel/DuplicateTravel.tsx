import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const DuplicateTravel = () => {
    return (
        <>
        <SubHeading text="No Duplicate Travel Requests" />
            <Paragraph
                className="font-normal"
                text={
                    <>
                        To ensure smooth scheduling and avoid conflicts, the system allows only one travel request per traveler on a given date. This rule helps to:
                        <ul className="docs-list">
                            <li>Disallow multiple travel requests for the same traveler on the same date</li>
                            <li>Maintain accurate, conflict-free travel schedules</li>
                            <li>Support proper planning and resource allocation</li>
                            <li>Require users to check existing requests before submitting new ones</li>
                            <ImageCard src={images.adminTravelMultipleTravellers} />
                        </ul>

                    </>
                } />
        </>
    )
}

export default DuplicateTravel