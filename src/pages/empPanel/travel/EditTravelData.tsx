import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"

const EditTravelData = () => {
    return (
        <>
        <SubHeading text="Edit Travel Details" />
            <Paragraph
                text="If a travel request is still pending , employees can make changes to update trip details or correct any information. This flexibility ensures that requests remain accurate before final confirmation." />
            <ImageCard src={images.empTravelEditTravel} />
        </>
    )
}

export default EditTravelData