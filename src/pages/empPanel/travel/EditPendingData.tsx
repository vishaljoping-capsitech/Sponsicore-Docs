import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"

const EditPendingData = () => {
    return (
        <>
        <SubHeading text="Edit Pending Travel Details" />
            <Paragraph
                text="Employees are permitted to update their basic information and location details, but only while the travel request status remains Pending. Once the request progresses beyond this stage, further modifications will no longer be allowed." />
            <ImageCard src={images.empTravelEditPendingData} />
        </>
    )
}

export default EditPendingData