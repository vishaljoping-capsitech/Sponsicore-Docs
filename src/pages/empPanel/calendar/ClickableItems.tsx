import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";


export const ClickableItems = () => {
  return (
    <>
      <SubHeading text="Clickable Items" />
      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li>In the calendar interface, only reminders are clickable.</li>
              <li>Other items—such as visa expiries, birthdays, and public holidays—are displayed for viewing purposes only, ensuring clarity and avoiding unintended edits.</li>
            </ul>
          </>
        }
      />
      <ImageCard src={images.empCalendarReminderDetails} />
    </>
  )
}

export default ClickableItems;