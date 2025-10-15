import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"
import { images } from '../../../assets'


const TripHistoryinAddEdit = () => {
    return (
        <>
            <Paragraph text={
                <ul>
                    <li id="trip-history-add"><Title text={"Trip History In Add Drawer: "} />Users can view the trip history of selected travelers directly within the Add Travel Request drawer.This allows them to review past trips before creating a new request, ensuring better planning and avoiding duplication.
                        <ImageCard src={images.adminTravelTripHistoryAdd} />
                    </li>
                    <li id="trip-history-edit"><Title text={"Trip History In Edit Drawer: "} /> The Edit Travel Request drawer also provides access to the traveler's trip history. This helps users make informed updates based on previous travel records and ensures consistency across requests.
                        <ImageCard src={images.adminTravelTripHistoryEdit} />
                    </li>
                </ul>
            } />
        </>
    )
}

export default TripHistoryinAddEdit