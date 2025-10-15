import Paragraph from "../../../components/Paragraph"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const AutoApprovedStatus = () => {
    return (
        <>
            <Paragraph
                text={
                    <>
                        Travel requests submitted by an authorized admin user are automatically approved upon creation. This feature allows the system to:
                        <ul>
                            <li>Bypass the manual approval process for admin-submitted travel requests</li>
                            <li>Streamline the workflow, saving time and reducing administrative steps</li>
                            <li>Ensure faster processing of travel plans initiated by admins</li>
                            <li>Maintain proper control while allowing trusted users to expedite request handling</li>
                            This helps in achieving a more efficient and responsive travel request process for administrative users.
                            <ImageCard src={images.adminTravelApprovedStatus} />
                        </ul>
                    </>
                } />
        </>
    )
}

export default AutoApprovedStatus