import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"

const TravelNotification = () => {
    return (
        <>
        <SubHeading text="Travel Notifications" />
            <Paragraph text="When an admin updates a trip's location or dates, all assigned travelers are notified immediately. This keeps them informed of changes to destinations, schedules, or itineraries, ensuring clarity, timely adjustments, and alignment throughout the trip planning process." />
            <ImageCard src={images.empTravelNotification} />
        </>
    )
}

export default TravelNotification