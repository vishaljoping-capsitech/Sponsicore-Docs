import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const RolesPermissions = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li id="add-role">
                <Title text="Add Roles:" /> Admins can create new roles within
                the system, defining specific sets of permissions and
                responsibilities tailored to various job functions or
                departments.
                <ImageCard src={images.rolesAndPermissions.add} />
              </li>
              <li id="edit-role">
                <Title text="Edit Roles:" /> Admins can modify existing roles to
                update their name, description, or permissions, ensuring the
                role remains aligned with organizational needs and structure.
                <ImageCard src={images.rolesAndPermissions.edit} />
              </li>
              <li id="role-status">
                <Title text="Activate/Deactivate Roles:" /> Admins can toggle
                the status of roles between active and inactive. This is useful
                for temporarily disabling roles without permanently deleting
                them.
                <ImageCard src={images.rolesAndPermissions.status} />
              </li>
              <li id="remove-role">
                <Title text="Remove Roles:" /> Admins can delete roles that are
                no longer relevant or in use, helping to keep the system clean,
                organized, and up to date.
                <ImageCard src={images.rolesAndPermissions.delete} />
              </li>
              <li id="locked-role">
                <Title text="Fixed System Roles" />: The Admin and Branch Admin
                roles are system-defined and locked. These roles cannot be
                edited, modified, or deleted to ensure the integrity and
                security of core administrative functions.
                <ImageCard src={images.rolesAndPermissions.overview} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default RolesPermissions;
