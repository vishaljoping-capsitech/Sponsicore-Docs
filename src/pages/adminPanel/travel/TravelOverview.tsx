import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const TravelOverview = () => {
    return (
        <>
        <SubHeading text="Travel Overview" />
            <Paragraph
                text={
                    <>
                        Users can view the full travel overview by clicking on the travel title. In this detailed view, users can:
                        <ul className="docs-list">
                            <li>See the complete trip status, including approval stage and travel progress</li>
                            <li>View all travel details, such as traveller names, trip duration, and destinations</li>
                            <li>Access a summary of expenses, showing all associated costs and uploaded attachments</li>
                            <li>Edit or delete the travel request directly from this overview screen</li>
                            This centralized view provides a quick and comprehensive snapshot of each travel request, making it easy to manage and update as needed.
                            <ImageCard src={images.adminTravelOverview} />
                        </ul>
                    </>
                } />
        </>
    )
}

export default TravelOverview