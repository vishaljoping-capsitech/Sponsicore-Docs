import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"

const TravelNotification = () => {
    return (
        <>
            <Paragraph text="If the travel location or travel dates are modified in an admin-added trip, all assigned travelers will receive a notification informing them that their trip details have been updated. This ensures that travelers are always aware of critical changes that could impact their travel plans, such as updated destinations, rescheduled departure or return dates, or revised itineraries. Timely notifications help travelers stay prepared, avoid confusion, and make any necessary adjustments to their arrangements. This feature promotes transparency and keeps everyone aligned throughout the trip planning and approval process." />
            <ImageCard src={images.empTravelNotification} />
        </>
    )
}

export default TravelNotification