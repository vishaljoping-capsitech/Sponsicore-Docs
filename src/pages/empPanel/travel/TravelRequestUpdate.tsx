import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"

const TravelRequestUpdate = () => {
    return (
        <>
        <SubHeading text="Travel Request Status Update" />
            <Paragraph text="Travelers will be promptly notified whenever an authorized user updates the status of their travel request. Whether the request is approved, rejected, or moved to another stage, these real-time notifications keep travelers informed throughout the process. This timely communication helps ensure that travelers are always aware of their request's current status."/>
            <ImageCard src={images.empTravelRequestUpdate} />
        </>
    )
}

export default TravelRequestUpdate