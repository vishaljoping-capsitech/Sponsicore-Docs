import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const CalendarOverview = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            The calendar displays key company and employee-related events, including:
            <ul>
              <li>Employee Birthdays</li>
              <li>Public Holidays</li>
              <li>Employee Travels</li>
              <li>Personal Reminders</li>
            </ul>
          </>
        }
      />
      <ImageCard src={images.empCalendar} />
    </>
  )
}

export default CalendarOverview