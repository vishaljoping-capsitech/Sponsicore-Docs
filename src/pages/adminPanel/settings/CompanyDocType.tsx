import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import SubHeading from "../../../components/SubHeading";

const CompanyDocType = () => {
  return (
    <>
      <SubHeading level={4} text="Company Document Types:" className="margin-top-point-5rem"/>

      <ImageCard src={images.documentTypes.company.overview} />

      <Paragraph
        text={
          <>
            <ul className="docs-list flex-row gap-y-[10px] ">

              <li id="company-doc-add">
                <Title text="Add:" /> Admin can add new documents by specifying the name. Admin also
                have to decide the document will be mandatory or not also the
                document has an expiry or not.
                <ImageCard src={images.documentTypes.company.add} />
              </li>

              <li id="company-doc-edit">
                <Title text="Edit:" /> 
                <ul className="docs-list">
                  <li>For pre-defined documents, admin can update Mandatory and Expiry settings.</li>
                  <li>For self-defined documents, users can also edit the document name.</li>
                </ul>
                <ImageCard src={images.documentTypes.employee.edit} />
              </li>

              <li id="company-doc-delete">
                <Title text="Delete:" /> Admin can delete both predefined and user-defined documents.
                <ImageCard src={images.documentTypes.employee.delete} />
              </li>

              <li id="company-doc-state">
                <Title text="Active / Inactive: " />
                Admins can activate or deactivate document types without
                deleting them.This feature allows temporary disabling of certain
                document types while preserving their history and structure.
                <ImageCard src={images.documentTypes.company.overview} />
              </li>
              
            </ul>
          </>
        }
      />
    </>
  );
};

export default CompanyDocType;
