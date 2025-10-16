import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"


const RequestOverview = () => {
    return (
        <>
            <Paragraph text="Employees can easily access detailed information about their requests by simply clicking the Status button associated with each entry. This feature opens up a comprehensive view that includes the current status of the request, any comments or feedback from the admin, timestamps of key actions, and additional relevant details. Providing this level of transparency allows employees to stay fully informed about the progress of their requests without needing to contact HR or management directly. It streamlines communication, reduces uncertainty, and empowers employees to track and manage their submissions efficiently within the system" />
            <ImageCard src={images.empRequestOverview} />
        </>
    )
}

export default RequestOverview