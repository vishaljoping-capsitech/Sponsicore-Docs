import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"


const RequestOverview = () => {
    return (
        <>
        <SubHeading text="Request Details" />
            <Paragraph text="Employees can view detailed request information by clicking the Status button, which displays the current status, admin comments, timestamps, and other details. This transparency keeps employees informed, reduces HR follow-ups, and enables efficient tracking of requests within the system." />
            <ImageCard src={images.empRequestOverview} />
        </>
    )
}

export default RequestOverview