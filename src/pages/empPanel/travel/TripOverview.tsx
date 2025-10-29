import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"

const TripOverview = () => {
    return (
        <>
        <SubHeading text="Travel Overview" />
            <Paragraph text="Users can easily access detailed information about any travel request by simply clicking on the travel title. This action opens a comprehensive overview of the trip, including key details such as dates, destinations, purpose, and associated expenses. The travel overview helps users stay informed about the status and specifics of each journey ."/>
            <ImageCard src={images.empTravelTripOverview} />
        </>
    )
}

export default TripOverview