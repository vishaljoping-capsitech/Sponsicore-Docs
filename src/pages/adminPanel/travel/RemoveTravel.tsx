import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const RemoveTravel = () => {
    return (
        <>
        <SubHeading text="Delete Travel" />
            <Paragraph
                text={
                    <>
                        Users can easily delete travel requests that are no longer needed, outdated, or were accidentally entered by mistake. When deleting a request, users can:
                        <ul className="docs-list">
                            <li>Remove the entire travel request from the system</li>
                            <li>Delete all associated travel details and expense entries</li>
                            <li>Ensure data remains clean, accurate, and relevant by eliminating outdated or incorrect entries</li>
                            <li>Prevent unnecessary processing or approvals for invalid requests</li>
                            This action helps maintain a tidy and error-free travel request system.
                            <ImageCard src={images.adminTravelDeleteTravel} />
                        </ul>
                    </>
                } />
        </>
    )
}

export default RemoveTravel