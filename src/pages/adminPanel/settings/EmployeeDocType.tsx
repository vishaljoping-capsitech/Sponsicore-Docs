import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import SubHeading from "../../../components/SubHeading";

const EmployeeDocType = () => {
  return (
    <>
      <SubHeading level={4} text="Employee Document Types:" />
      <Paragraph text="In the Employee Document Type section, the Admin can manage both predefined and self-defined document types." />
      <ImageCard src={images.documentTypes.employee.overview} />

      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li>
                <Title text="Add:" id="emp-doc-add" />
                <ul className="docs-list">
                  <li>
                    The Admin can add a new document type by entering the
                    document name.
                  </li>
                  <li>
                    For each document type, the Admin can configure the
                    following checkbox settings:
                    <ul className="docs-list">
                      <li>
                        Sponsored Employees/Regular Employees:
                        <ul className="docs-list">
                          <li>Active</li>
                          <li>OnBoarding Use</li>
                          <li>Mandatory</li>
                        </ul>
                      </li>
                      <li>
                        Additional Settings:
                        <ul className="docs-list">
                          <li>
                            Both-Side Document — requires employees to upload
                            both sides of the document
                          </li>
                          <li>
                            Expiry — indicates that the document has an expiry
                            date
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ImageCard src={images.documentTypes.employee.add} />
              </li>
              <li>
                <Title text="Edit:" id="emp-doc-edit" />
                <ul className="docs-list">
                  <li>
                    <Title text="For Predefined Documents:" /> All checkboxes
                    and settings can be edited, but the document name cannot be
                    changed.
                  </li>
                  <li>
                    <Title text="For Self-Defined Documents:" /> The document
                    name and all checkbox settings can be edited.
                  </li>
                </ul>
                <ImageCard src={images.documentTypes.employee.edit} />
              </li>
              <li>
                <Title text="Delete:" id="emp-doc-delete" /> 
                <ul className="docs-list">
                  <li>Only self-defined documents can be deleted by the Admin.</li>
                  <li>Predefined documents cannot be deleted.</li>
                </ul>
                <ImageCard src={images.documentTypes.employee.delete} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default EmployeeDocType;
