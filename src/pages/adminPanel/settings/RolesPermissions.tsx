import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import Title from "../../../components/Title";

const RolesPermissions = () => {
  return (
    <>
    <SubHeading text="Roles and Permissions" className="margin-top-point-5rem" />
      <Paragraph
        text={
          <>
            This section allows the Admin to control user access and actions
            based on their responsibilities within the system. It is accessible
            only to the Admin.
            <ul className="docs-list">
              <li>
                <Title text="Predefined Roles:" /> The system includes two
                predefined roles:
                <ul className="docs-list">
                  <li>Admin</li>
                  <li>Branch Admin</li>
                  <li>
                    These roles are fixed and locked — they cannot be edited or
                    deleted.
                  </li>
                  <li>
                    The Admin can view their details but cannot modify their
                    permissions.
                  </li>
                </ul>
                <ImageCard src={images.rolesAndPermissions.overview} />
              </li>
              <li>
                <Title text="Creating a New Role: " />The Admin can create new roles by providing:
                <ul className="docs-list">
                  <li>Role Name</li>
                  <li>Role Description</li>
                  <li>Permissions for each module or section (e.g., Dashboard, Employees, Attendance, Tasks, Calendar, Email, etc.)</li>
                </ul>
                <ImageCard src={images.rolesAndPermissions.add} />
              </li>
              <li id="role-status">
                <Title text="Managing Roles:" /> The Admin can:
                <ul className="docs-list">
                  <li>Add new roles</li>
                  <li>Edit existing roles (except predefined ones)</li>
                  <ImageCard src={images.rolesAndPermissions.edit} />
                  <li>Activate / Deactivate roles</li>
                  <ImageCard src={images.rolesAndPermissions.status} />
                  <li>Delete self-defined roles when no longer needed</li>
                  <ImageCard src={images.rolesAndPermissions.delete} />
                </ul>
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default RolesPermissions;
