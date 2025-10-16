import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const CalendarViews = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            The calendar offers three different views for flexibility and better navigation:
            <ul>
              <li>
                <Title text="Day View:" /> Displays all reminders and events scheduled for the selected day.
              </li>
              <li>
                <Title text="Month View:" /> Provides a comprehensive overview of all activities throughout the month.
              </li>
              <li>
                <Title text="Year View:" /> Shows a high-level summary of events and holidays for the entire year.
              </li>
            </ul>
          </>
        }
      />
    </>
  )
}

export default CalendarViews;