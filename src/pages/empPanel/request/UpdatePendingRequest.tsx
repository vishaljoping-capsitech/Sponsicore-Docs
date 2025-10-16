import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const UpdatePendingRequest = () => {
    return (
        <>
            <Paragraph text="Requests can only be edited or deleted when their status is marked as pending, meaning they have not yet been reviewed or acted upon by the admin. This restriction ensures that once a request is under processing or has been finalized - whether approved, rejected, or canceled - its details remain unchanged to maintain accuracy and accountability. Allowing edits and deletions only in the pending stage gives employees the flexibility to correct or withdraw requests promptly if needed, while preserving the integrity of records once decisions have been made. This controlled approach helps streamline workflow, reduce errors, and maintain clear audit trails within the request management system." />
            <ImageCard src={images.empRequestUpdatePendingRequest} />
        </>
    )
}

export default UpdatePendingRequest