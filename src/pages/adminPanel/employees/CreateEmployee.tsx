import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Title from "../../../components/Title";
import SubHeading from "../../../components/SubHeading";

const CreateEmployee = () => {
  return (
    <>
      <SubHeading text="Create Employee" className="margin-top-point-5rem"/>
      <Paragraph
        text={
          <>
            <ul className="docs-list">
              You can add new employees using the “Add New” button available on
              the top-left of the employee table.
              <li>Add Sponsored Employee</li>
              <li>Add Regular Employee</li>
              <li>Add Employees in Bulk</li>
            </ul>
            <ImageCard src={images.adminEmployeeAddEmployee} />
            <ol className="docs-list">
              <li>
                When adding a Regular or Sponsored employee, the form is divided
                into three sections for easier data entry and better
                organization.
              </li>
              <li>
                Creating a sponsored or regular employee involves three steps:
                <ul className="docs-list">
                  <li>
                    <Title text="Basic Details"/>: Provide the essential information about the
                    employee (like Employee Category, Employment Type, Employee
                    ID, Name, Email, Contact No, Gender etc).
                  </li>
                  <li>
                    <Title text="Add Shift"/>: assign shift timings to the employee by selecting
                    from existing shifts or create custom shifts through the
                    Settings module.
                  </li>
                  <li>
                    <Title text="User Settings"/>: you can configure employee access and
                    onboarding preferences.
                  </li>
                </ul>
              </li>
              <ImageCard src={images.adminEmployeeAddEmployeeDrawer} />
              <li>
                For bulk uploads, download the provided dummy Excel file, fill
                in employee details as instructed, and upload it. After a
                successful import, all employees will appear in the list.
              </li>
              <ImageCard src={images.adminEmployeeImportbulkEmployee} />
              <li>
                If any required data is missing during creation, an “Add New”
                option is available in the dropdown to add it instantly.
              </li>
            </ol>
          </>
        }
      />
    </>
  );
};

export default CreateEmployee;
