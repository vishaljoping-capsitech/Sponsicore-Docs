import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const Shifts = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            This section enables the Admin to create, manage, and assign work
            schedules for employees efficiently.
            {/* <ImageCard src={images.shifts.overview} /> */}
            <ul className="docs-list">
              <li id="add-edit-activate-assign-remove">
                <Title text="Add, Edit, Activate/Deactivate, Assign, or Remove Shifts:" />
                Admins can create new shifts, modify existing ones, activate or
                deactivate shifts, and assign or remove them for selected
                employees.
                <ImageCard src={images.shifts.add} />
                <ImageCard src={images.shifts.delete} />
              </li>

              <li id="mandatory-lunch-deduction">
                <Title text="Mandatory Lunch Deduction:" />
                In the Create/Edit Shift form, enabling the “Mandatory Lunch
                Deduction” checkbox automatically deducts the specified lunch
                duration, regardless of whether the employee actually takes a
                break. When unchecked, the system deducts lunch time based on
                the actual lunch duration taken by the employee.
              </li>

              <li id="late-effective-minute">
                <Title text="Late Effective Minute:" />
                The “Late Effective Minute” field (default value: 0) defines the
                allowed grace period for lateness. For example, with a value of
                0, even a few seconds of delay is counted as late. If set to 1,
                lateness is considered only after one minute.
              </li>

              <li id="overtime-alert">
                <Title text="Overtime Alert and Permitted Overtime Minutes:" />
                Selecting the “Overtime Alert” checkbox enables automated email
                notifications when an employee's overtime exceeds the allowed
                limit. Once enabled, the “Permitted Overtime Minutes” field
                appears, allowing the admin to define the threshold.
              </li>

              <li id="assign-shift">
                <Title text="Assign Shift:" />
                The Assign Shift feature allows admins to assign a specific
                shift to multiple employees at once. In the Assign Shift modal,
                all active employees are listed, while employees already
                assigned to the selected shift are disabled. Admins must select
                one or more employees and specify an Effective Date before
                assigning the shift.
                <ImageCard src={images.shifts.assign} />
              </li>

              <li id="edit-shift-process">
                <Title text="Edit Shift Process:" />
                When editing a shift, if major changes (such as clock-in/out
                times, lunch minutes, or working days) are made, an Effective
                Date field appears. These changes take effect from the chosen
                date and apply to employees currently assigned to the modified
                shift or whose upcoming shift becomes effective on or after that
                date. Other details (like shift name, grace minutes, or overtime
                settings) are updated immediately. The system automatically
                notifies affected employees if the shift modification impacts
                their attendance, leave, or requests.
                <ImageCard src={images.shifts.edit} />
              </li>

              <li id="automatic-data-updates">
                <Title text="Automatic Data Updates:" />
                Both Assign Shift and Edit Shift actions automatically update
                related records — such as attendance, leave balances, and
                requests — based on the selected effective date, ensuring data
                consistency across modules.
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default Shifts;
