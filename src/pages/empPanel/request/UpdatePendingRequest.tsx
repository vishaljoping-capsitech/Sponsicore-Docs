import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"

const UpdatePendingRequest = () => {
    return (
        <>
        <SubHeading text="Pending Request Update" />
            <Paragraph text="Requests can be edited or deleted only while it is pending, before any admin action. Once processed, whether it is approved, rejected, or canceled , they become locked to maintain accuracy and accountability. This ensures flexibility for employees to adjust pending requests while preserving data integrity and clear audit trails." />
            <ImageCard src={images.empRequestUpdatePendingRequest} />
        </>
    )
}

export default UpdatePendingRequest