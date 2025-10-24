import { Typography } from "antd";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const EmployeeDocType = () => {
  return (
    <>
      <Typography.Title level={4}>Employee Document Types:</Typography.Title>

      <ImageCard src={images.documentTypes.employee.overview} />
      
      <Paragraph
        text={
          <>
            <ul>
              <li>
                <Title text="Add:" id="emp-doc-add" /> Users can add new
                employee document types as needed for various organizational
                purposes. While adding a document type, users can configure
                multiple properties: whether the document applies to a{" "}
                <strong>Sponsor</strong> or <strong>Regular Employee</strong>,
                if it is required for <strong>On-Boarding</strong> or not,
                whether it is <strong>Mandatory</strong> or{" "}
                <strong>Optional</strong>, if the document has an{" "}
                <strong>Expiry Date</strong> or is valid indefinitely, and
                whether it is <strong>Single</strong> or{" "}
                <strong>Both Sided</strong>. These options ensure that each
                document type is accurately categorized and aligned with HR and
                compliance requirements.
                <ImageCard src={images.documentTypes.employee.add} />
              </li>
              <li>
                <Title text="Edit:" id="emp-doc-edit" /> Users can edit existing
                employee document types to keep them accurate and relevant. This
                includes updating the document name, purpose, or assigned
                properties—such as switching between
                <strong>Sponsor</strong> and <strong>Regular Employee</strong>,
                toggling <strong>On-Boarding</strong> relevance, changing
                between <strong>Mandatory</strong> and <strong>Optional</strong>
                , modifying the <strong>Expiry</strong> status, and adjusting
                the document layout to <strong>Single</strong> or{" "}
                <strong>Both Sided</strong>. These edits ensure the document
                types evolve with the organization's policies.
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
