import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"

const CompanyDocType = () => {
    return (
        <Paragraph text={<>
            <ul>
                <li id="company-doc-add"><Title text="Add:" /> Admins can add new document types required by the company or for employee records.
                    During the creation process, they can define whether the document type is
                    <strong>Mandatory</strong> or <strong>Optional</strong>, and specify if the document should
                    have an <strong>Expiry Date</strong> or remain valid indefinitely. These settings ensure that
                    each document type aligns with compliance and organizational needs.
                    <ImageCard src={images.documentTypes.company.add}/></li>
                <li id="company-doc-edit"><Title text="Edit:" /> Admins can edit existing document types to update names, descriptions, or categories.
                    They can also modify whether a document type is <strong>Mandatory</strong> or <strong>Optional</strong>,
                    and adjust the <strong>Expiry</strong> requirement as business rules evolve. These edits help maintain
                    accurate and up-to-date documentation standards across the organization.
                    <ImageCard src={images.documentTypes.employee.edit}/></li>
                <li id="company-doc-delete"><Title text="Delete:" /> Admins can delete custom-created document types that are no longer relevant.System-defined core document types cannot be deleted to ensure data consistency and compliance.
                <ImageCard src={images.documentTypes.employee.delete}/></li>
                <li id="company-doc-state"><Title text="Active / Inactive: " />Admins can activate or deactivate document types without deleting them.This feature allows temporary disabling of certain document types while preserving their history and structure.
                <ImageCard src={images.documentTypes.company.overview}/></li>
            </ul>
        </>} />
    )
}

export default CompanyDocType