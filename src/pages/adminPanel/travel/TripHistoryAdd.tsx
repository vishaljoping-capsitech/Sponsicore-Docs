import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const TripHistoryAdd = () => {
    return (
        <>
            <Paragraph
                text={
                    <>
                        Users can view the trip history of selected travelers directly within the <Title text={'Add Travel Request'}></Title> drawer.
                        This allows them to review past trips before creating a new request, ensuring better planning and avoiding duplication.
                    </>
                } />
            <ImageCard src={images.adminTravelTripHistoryAdd} />
        </>
    )
}

export default TripHistoryAdd