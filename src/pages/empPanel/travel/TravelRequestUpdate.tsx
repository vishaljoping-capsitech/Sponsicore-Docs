import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"

const TravelRequestUpdate = () => {
    return (
        <>
            <Paragraph text="Travelers will be promptly notified whenever an authorized user updates the status of their travel request. Whether the request is approved, rejected, or moved to another stage, these real-time notifications keep travelers informed throughout the process. This timely communication helps ensure that travelers are always aware of their request's current status, allowing them to make necessary arrangements or take further action without delay."/>
            <ImageCard src={images.empTravelRequestUpdate} />
        </>
    )
}

export default TravelRequestUpdate