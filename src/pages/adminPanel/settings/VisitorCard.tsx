import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"


const VisitorCard = () => {
    return (
        <>
            <Paragraph text={<>
                A temporary ID is issued to guests for identification and access control within the premises. This ensures that guest movement is monitored and secure. Access can be restricted based on biometric device settings—meaning guests can be granted entry only to specific areas they are authorized for. For example, if a guest is permitted to access only certain sections of the office, biometric controls will automatically deny them entry to restricted zones, enhancing both security and operational control.
                <ImageCard src={images.visitorCard.overview} />
                <ul>
                    <li id="add-visitor-card"><Title text="Add Visitor Cards:" /> Users can create and assign new visitor cards by entering visitor details, setting access permissions, and linking the card to biometric systems for controlled entry.
                    <ImageCard src={images.visitorCard.add} /></li>
                    <li id="edit-visitor-card"><Title text="Edit Visitor Cards:" /> Users can update visitor card information, such as changing the visitor's name, duration of access, or modifying area permissions as needed.
                    <ImageCard src={images.visitorCard.edit} /></li>
                    <li id="visitor-card-status"><Title text="Activate/Deactivate Visitor Cards:" /> Users can toggle the status of a visitor card to active or inactive, depending on whether the card should be valid for entry at a given time.
                    <ImageCard src={images.visitorCard.status} /></li>
                    <li id="delete-visitor-card"><Title text="Remove Visitor Cards:" /> Users can permanently delete visitor cards that are no longer in use, helping to maintain a clean and secure access control system.
                    <ImageCard src={images.visitorCard.delete} /></li>
                </ul>

            </>} />
        </>
    )
}

export default VisitorCard