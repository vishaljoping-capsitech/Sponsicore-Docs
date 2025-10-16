import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"

const AddTravelData = () => {
    return (
        <>
            <Paragraph
                text="Employees have the ability to submit new business travel requests as needed. This allows them to plan trips related to work efficiently through the system. Once a travel request is submitted, it enters a pending status awaiting approval."/>
            <ImageCard src={images.empTravelAddTravel} />
        </>
    )
}

export default AddTravelData