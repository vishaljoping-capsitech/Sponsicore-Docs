import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const AutoApprovedStatus = () => {
    return (
        <>
        <SubHeading text="Auto Approved Travel" />
            <Paragraph
                text={"Travel requests submitted by an authorized administrative user are automatically approved upon creation, eliminating the need for manual approval. This functionality streamlines the travel request workflow, expedites processing, ensures timely notification to all travelers, and maintains administrative control while allowing trusted users to manage requests efficiently."} />
            <ImageCard src={images.adminTravelApprovedStatus} />
        </>
    )
}

export default AutoApprovedStatus