import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"
import Title from "../../../components/Title"

const Events = () => {
  return (
    <>
      <SubHeading text="Events" />
      <Paragraph
        text={
          <>
          The Events section helps employees stay informed about important upcoming dates and occasions. It includes three key options:
            <ul className="docs-list">
              <li>
                <Title text="Reminders:" /> 
                <ul className="docs-list">
                  <li>
                    Displays reminders scheduled from today up to the next 15 days, with today's reminders highlighted for quick visibility.
                  </li>
                  <li>
                    Clicking on a reminder opens its detailed overview.
                  </li>
                </ul>
              </li>
              <li>
                <Title text="Birthdays:" />
                <ul className="docs-list">
                  <li>Shows all employee birthdays for the current month.</li>
                  <li>Clicking on a birthday entry displays more details about the employee and their celebration date.</li>
                </ul>
              </li>
              <li>
                <Title text="Holidays:" />
                <ul className="docs-list">
                  <li>Lists all public holidays for the current month.</li>
                  <li>Each holiday entry can be clicked to view additional information or notes.</li>
                </ul>
              </li>
            </ul>
          All three options are interactive, allowing employees to stay up to date with company events, personal milestones, and upcoming schedules.
          </>
        }
      />
      <ImageCard src={images.empDashboardEvents} />
    </>
  )
}

export default Events