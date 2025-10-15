import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
const Documents = () => {
    return (
        <>
            <Paragraph
                text={<ul>
                    <li><Title text={"Full Document Control:"} />
                        Admins have comprehensive management capabilities over company documents. They can view document contents, download copies for offline access, delete outdated or incorrect files, and review the history of document changes and uploads to maintain transparency and track modifications over time.
                        <ImageCard src={images.adminCompanyDocumentOverview} /></li>
                    <li><Title text={"Mandatory Documents Table:"} />
                        All required company documents are clearly listed in a structured table format. Each mandatory document entry includes an upload button, making it easy for admins to submit or replace files as needed. This ensures compliance and organization by keeping essential documents readily accessible and up-to-date.
                        <ImageCard src={images.adminCompanyMandatoryDocs} /></li>
                    <li><Title text={"File Size Limit:"} />
                        To maintain system performance and storage efficiency, each uploaded document must not exceed a maximum size of 10MB. This encourages optimal file management without compromising document quality.
                        <ImageCard src={images.adminCompanyFileSizeCondition} /></li>
                </ul>} />
        </>
    )
}

export default Documents