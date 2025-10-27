import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const BiometricDevice = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            This feature helps organizations accurately **verify employee
            identity** and **track attendance** using secure methods such as
            biometric authentication or access cards. By linking attendance
            systems with identity verification, it ensures that only authorized
            personnel can check in or access specific areas, reducing the risk
            of proxy attendance or unauthorized entry. It streamlines workforce
            management by automatically recording entry and exit times,
            generating reliable attendance data for payroll, compliance, and
            productivity analysis. This not only enhances security but also
            increases transparency and accountability across the organization.
            <ImageCard src={images.biometricDevices.overview} />
            <ul className="docs-list">
              <li id="add-biometric-device">
                <Title text="Add Biometric Devices:" /> Users can register new
                biometric devices in the system, linking them to specific
                locations or purposes, such as attendance tracking or access
                control.
                <ImageCard src={images.biometricDevices.add} />
              </li>
              <li id="edit-biometric-device">
                <Title text="Edit Biometric Devices:" /> Users can update the
                details of existing devices, such as the device name, assigned
                branch, or operational role, ensuring information stays accurate
                and relevant.
                <ImageCard src={images.biometricDevices.edit} />
              </li>
              <li id="biometric-device-actions">
                <Title text="Restart, Resync, Clear Attendance Logs, and Delete Devices:" />{" "}
                Users can perform essential device maintenance actions such as
                restarting the device to refresh its functionality, resyncing to
                update or align employee data with the system, and clearing
                check-in/out logs from the device. Additionally, devices can be
                deleted from the system when they are no longer in use.
                <ImageCard src={images.biometricDevices.actions} />
              </li>
              <li id="biometric-device-employees">
                <Title text="Multi-Branch Device Management:" /> A single
                biometric device can be configured and managed across multiple
                branches, allowing flexible deployment and centralized control
                for organizations with multiple locations.
                <ImageCard src={images.biometricDevices.employees} />
              </li>
              <li id="biometric-device-manage-employees">
                <Title text="Assign and Manage Device Access:" /> When a device
                name is clicked, a modal appears with two tabs. The first,
                “Assign Device to Employees,” lets users assign the device to
                specific employees and define its usage (e.g., for gate access
                only or for both gate access and attendance). The second tab,
                “Manage Assigned Employees,” shows all employees currently
                linked to the device, allowing admins to modify access, remove
                users, or enable/disable attendance tracking as needed.
                <ImageCard src={images.biometricDevices.manageEmployees} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default BiometricDevice;
