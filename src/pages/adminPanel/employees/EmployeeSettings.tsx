import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Title from "../../../components/Title";

const EmployeeSettings = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <ol>
              In Employee Settings, authorized users can manage the employee's
              shift, card details, user settings, remote attendance feature, and
              the remove employee option
              <ImageCard src={images.adminEmployeeSettings} />
              <li id="shift">
                <Title text="Shift"/>: Users can add, edit, or view shift history. In Add/Edit
                Shift, users can select from already created shifts or use a
                custom shift. We've added an Add New button to create a new
                Shift Master. Other details are explained under Settings →
                Shifts.
                <ImageCard src={images.adminEmployeeEditShiftModal} />
              </li>
              <li id="card">
                <Title text="Card"/>: Users can add, edit, resync, or remove card details. These
                card details will be used for the biometric device. In Add/Edit
                Card Details, the description is as follows:
                <ul>
                  <li>The card number is the unique identifier of the card.</li>
                  <li>
                    Is the Att.Sync checkbox used to mark attendance or not.
                  </li>
                  <li>We can assign multiple devices to a single employee.</li>
                  <li>
                    At the end, there is a card status option: Active or
                    De-active.
                  </li>
                </ul>
                <ImageCard src={images.adminEmployeeEditCardModal} />
              </li>
              <li id="user-settings">
                <Title text="User Settings"/>: User Settings are used to manage the employee's
                user account. And more description is as follows:
                <ul>
                  <li>
                    Initially, if the user is not registered, a Register User
                    button will be shown. In this process, the user role can be
                    selected, and you can choose whether to proceed with
                    onboarding for this user or not. An email will be sent to
                    the employee with the portal URL and login credentials.
                  </li>
                  <li>
                    The Update Role button is used to change the employee's
                    role. If the employee is currently in the onboarding
                    process, the Update Role button will not be shown.
                    <ImageCard src={images.adminEmployeeUpdateRoleModal} />
                  </li>
                  <li>
                    Users can update the email address and change the status to
                    Active or Inactive.
                  </li>
                  <li>
                    In User Position, you can control whether the employee panel
                    is shown and assign the user as a manager.
                  </li>
                  <li>
                    If an employee user forgets their password, an authorized
                    user can reset it, and an email with the new password will
                    be sent to the employee.
                  </li>
                  <li>
                    The Force Logout option is used by authorized users to log
                    out any user forcefully.
                  </li>
                </ul>
              </li>
              <li id="remote-attendance">
                <Title text="Remote Attendance"/>: we manage two statuses: Manual In/Out and
                Hybrid Attendance.
                <ImageCard src={images.adminEmployeeRemoteAttendance} />
                <ul>
                  <li>
                    In Manual Punch In/Out, if a company is not using a
                    biometric device, they can use this feature. A Check In/Out
                    button will be shown on the employee's dashboard.
                  </li>
                  <li>
                    In Hybrid Attendance, employees are allowed to work in a
                    hybrid mode—meaning they can be present in the office and
                    check in/out from their dashboard.
                  </li>
                  <li>
                    Remove Employee: authorized users can remove any employee
                    except themselves. Removed employees will not appear in the
                    active employee list. To view deleted employees, users can
                    apply the Deleted filter.
                  </li>
                </ul>
              </li>
            </ol>
          </>
        }
      />

      <Paragraph
        text={
          "Note For Employee: We've provided a short overview of attendance, tasks, travel, and requests here. Detailed descriptions are available in the main module features."
        }
      />
    </>
  );
}

export default EmployeeSettings;
