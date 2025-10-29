import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import CompanyDocType from "./CompanyDocType";
import EmployeeDocType from "./EmployeeDocType";

const DocumentTypes = () => {
  return (
    <>
      <SubHeading text="Document Types" className="margin-top-point-5rem"/>
      <Paragraph
        text={
          <>
            Easily organize and manage all company and employee documents in one
            place. The system comes with predefined document types to ensure
            consistency and compliance. While these default types can't be
            deleted, you can modify them to fit your organization's specific
            needs.
            <ol className="font-bold text-xl m-0 p-0">
              <li id="company-doc-type">
                <CompanyDocType />
              </li>
              <li id="employee-doc-type">
                <EmployeeDocType />
              </li>
            </ol>
          </>
        }
      />
    </>
  );
};

export default DocumentTypes;
