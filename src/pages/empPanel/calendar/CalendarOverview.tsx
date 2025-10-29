import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"

const CalendarOverview = () => {
  return (
    <>
      <SubHeading text="Overview" className="w-full"/>
      <Paragraph
        text={
          <>
            The calendar displays key company and employee-related events, including:
            <ul className="docs-list">
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