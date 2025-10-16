import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"

const EditTravelData = () => {
    return (
        <>
            <Paragraph
                text="If a travel request is still pending approval, employees can make changes to update trip details or correct any information. This flexibility ensures that requests remain accurate before final confirmation." />
            <ImageCard src={images.empTravelEditTravel} />
        </>
    )
}

export default EditTravelData