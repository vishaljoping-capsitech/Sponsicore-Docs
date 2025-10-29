import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

export const ReminderManagement = () => {
  return (
    <>
      <SubHeading text="Reminder Management" className="margin-top-point-5rem"/>
      <Paragraph
        text={
          <>
            Employees can view, create, edit, and remove reminders:
            <ul className="docs-list">
              <li>Employees can see all reminders assigned to them but can only create reminders for themselves.</li>
              <li>Editing or deleting a reminder is only allowed if its date and time have not yet passed.</li>
              <li>This ensures reminders remain accurate and relevant.</li>
            </ul>
          </>
        }
      />
      <ImageCard src={images.empCalendarCreateReminder} />
    </>
  )
}

export default ReminderManagement;