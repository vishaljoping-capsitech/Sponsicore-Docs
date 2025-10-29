import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"

const RemoveTravelData = () => {
    return (
        <>
        <SubHeading text="Remove Travel Details" />
            <Paragraph text="Employees can also delete travel requests, but only while they are in the pending state. Once a request is approved or locked, it can no longer be removed to maintain record integrity and avoid conflicts with travel arrangements." />
            <ImageCard src={images.empTravelRemoveTravel} />
        </>
    )
}

export default RemoveTravelData