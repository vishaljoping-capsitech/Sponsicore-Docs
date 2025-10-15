import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const DuplicateTravel = () => {
    return (
        <>
            <Paragraph
                className="font-normal"
                text={
                    <>
                        To ensure smooth scheduling and avoid conflicts, the system allows only one travel request per traveler on a given date. This rule helps to:
                        <ul>
                            <li>Prevent overlapping travel requests for the same traveler</li>
                            <li>Maintain accurate and conflict-free travel schedules</li>
                            <li>Ensure proper planning and resource allocation</li>
                            <li>Require users to verify existing requests before submitting a new one for the same date</li>
                            This policy supports a clear, organized, and error-free travel management process.
                            <ImageCard src={images.adminTravelMultipleTravellers} />
                        </ul>
                    </>
                } />
        </>
    )
}

export default DuplicateTravel