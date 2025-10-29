import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"
import Title from "../../../components/Title"


const RequestStatusState = () => {
    return (
        <>
        <SubHeading text="Request Statuses" />
            <Paragraph text={<>
                <ul>
                    <li id="pending-action"><Title text="Action via Status Button:" /> Authorized users can approve or reject employee requests by clicking the status button. This enables quick decision-making directly from the request interface.
                    <ImageCard src={images.adminRequestStatus}/></li>
                    <li id="irreversible-action"><Title text="Irreversible Actions:" /> Once an approval or rejection is made, the action cannot be undone. After this, the request status becomes read-only, allowing users only to view the details without making further changes.
                    <ImageCard src={images.adminRequestAction}/></li>
                </ul>
            </>} />
        </>
    )
}

export default RequestStatusState