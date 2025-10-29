import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";


const CalendarSidebarControls = () => {
  return (
    <>
      <SubHeading text="Sidebar Controls" />
      <Paragraph
        text={
          <>
            The calendar sidebar includes a view icon beside each category:
            <ul className="docs-list">
              <li>Visa Expiry</li>
              <li>Birthdays</li>
              <li>Holidays</li>
              <li>Reminders</li>
            </ul>
            Using these icons, employees can customize their calendar view by showing or hiding specific event types as needed.
          </>
        }
      />
    </>
  )
}

export default CalendarSidebarControls;