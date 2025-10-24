import Paragraph from "../../../components/Paragraph";
import CompanyDocType from "./CompanyDocType";
import EmployeeDocType from "./EmployeeDocType";

const DocumentTypes = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Easily organize and manage all company and employee documents in one
            place. The system comes with predefined document types to ensure
            consistency and compliance. While these default types can't be
            deleted, you can modify them to fit your organization's specific
            needs.
            <ol className="font-bold text-xl">
              <li id="company-doc-type" className="mt-4">
                <CompanyDocType />
              </li>
              <li id="employee-doc-type" className="mt-10">
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
