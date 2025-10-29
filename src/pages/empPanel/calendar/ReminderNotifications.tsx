import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";


export const ReminderNotifications = () => {
  return (
    <>
      <SubHeading text="Reminder Notifications" />
      <Paragraph
        text={
          <>
            When a user adds a specific time to a reminder (while creating or editing it), the system automatically sends an alert popup notification 10 minutes before the reminder starts. This helps employees stay proactive and on schedule.
          </>
        }
      />
      <ImageCard src={images.empCalendarReminderNoitifications} />
    </>
  )
}

export default ReminderNotifications;