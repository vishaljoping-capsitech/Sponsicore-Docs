import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import Title from "../../../components/Title";

const ApplicationUser = () => {
  return (
    <>
      <SubHeading text="Application Users" />
      <Paragraph
        text={
          <>
            In this section, the Admin can manage all application users and
            their access permissions.
            <ImageCard src={images.applicationUsers.overview} />
            <ul className="docs-list">
              <li>
                <Title text="Adding a New User" /> The Admin can add a new
                application user by providing the following details:
                <ul>
                  <li>Name</li>
                  <li>Email</li>
                  <li>Contact Number</li>
                  <li>Role</li>
                </ul>
                <ImageCard src={images.applicationUsers.add} />
              </li>
              <li id="edit-application-user">
                <Title text="Managing Users" /> The Admin can:
                <ul className="docs-list">
                  <li>Edit user details, including name, email, contact number, role, and employee panel access.</li>
                  <ImageCard src={images.applicationUsers.edit} />
                  <li>Update user status (Active/Inactive).</li>
                  <li>Force logout users from the system if required.</li>
                  <ImageCard src={images.applicationUsers.delete} />
                  <li>Filter users based on their role or status (Active/Inactive).</li>
                  <ImageCard src={images.applicationUsers.status} />
                </ul>
              </li>
              <li>
                <Title text="Role and Access Management:" /> The Admin can
                manage each user's role and branch access to control what they
                can view and perform within the application.
              </li>
              <li id="delete-application-user">
                <Title text="Employee Linkage:" /> 
                <ul className="docs-list">
                  <li>If a user is linked to an employee, the corresponding Employee ID is displayed.</li>
                  <li>Clicking on the Employee ID redirects the Admin to the employee's profile page for quick access.</li>
                </ul>
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default ApplicationUser;
