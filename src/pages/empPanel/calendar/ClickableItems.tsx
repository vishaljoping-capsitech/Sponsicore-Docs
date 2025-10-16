import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";


export const ClickableItems = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <ul>
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