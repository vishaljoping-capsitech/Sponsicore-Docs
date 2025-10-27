import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import SubHeading from "../../../components/SubHeading";

/**
 There is some predefined company document types which is given user can add new document by giving the document name and then admin can set it will be for active, mandatory, onboarding use for sponsored and regular employees, admin can also manage that employee have to upload both-side of the document or only one side and there will be any expiry for that particular document. for the predefined document admin can able edit everything expect the name and for self defined user can able to edit the document name admin can only delete the selfdefined documents make this good
 */
const EmployeeDocType = () => {
  return (
    <>
      <SubHeading level={4} text="Employee Document Types:" />

      <ImageCard src={images.documentTypes.employee.overview} />

      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li>
                <Title text="Add:" id="emp-doc-add" /> Users can add new
                employee document types as needed for various organizational
                purposes. While adding a document type, users can configure
                multiple properties: whether the document applies to a Sponsor
                or Regular Employee, if it is required for On-Boarding or not,
                whether it is Mandatory or Optional, if the document has an{" "}
                Expiry Date or is valid indefinitely, and whether it is Single
                or Both Sided. These options ensure that each document type is
                accurately categorized and aligned with HR and compliance
                requirements.
                <ImageCard src={images.documentTypes.employee.add} />
              </li>
              <li>
                <Title text="Edit:" id="emp-doc-edit" /> Users can edit existing
                employee document types to keep them accurate and relevant. This
                includes updating the document name, purpose, or assigned
                properties—such as switching between Sponsor and Regular
                Employee, toggling On-Boarding relevance, changing between
                Mandatory and Optional , modifying the Expiry status, and
                adjusting the document layout to Single or Both Sided. These
                edits ensure the document types evolve with the organization's
                policies.
                <ImageCard src={images.documentTypes.employee.edit} />
              </li>
              <li>
                <Title text="Delete:" id="emp-doc-delete" /> Users can remove
                custom-created employee document types that are no longer
                required. However, core or system-defined document types remain
                protected and cannot be deleted, to preserve data integrity and
                auditability.
                <ImageCard src={images.documentTypes.employee.delete} />
              </li>
              <li>
                <Title text="Active / Inactive:" id="emp-doc-state" /> Users can
                activate or deactivate document types as needed. Deactivating a
                document type allows temporary suspension without permanent
                deletion—helpful for seasonal or phased-out document types.
                Reactivating them later is simple and preserves all associated
                settings and historical data.
                <ImageCard src={images.documentTypes.employee.overview} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default EmployeeDocType;
