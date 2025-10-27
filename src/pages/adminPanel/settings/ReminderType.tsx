import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const ReminderType = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            For reminder types, it is important to assign either a unique
            reminder type name or a distinct color to effectively categorize
            calendar reminders. This helps users easily identify and
            differentiate between various types of reminders at a glance. To
            maintain clarity and avoid confusion, each reminder type must have a
            unique color—using the same color for multiple reminder types is not
            allowed. This approach ensures that reminders are visually organized
            and that users can quickly recognize the purpose or category of each
            reminder on their calendars.
            <ImageCard src={images.reminderTypes.overview} />
            <ul className="docs-list">
              <li id="reminder-type-add">
                <Title text="Add Reminder Types:" /> Users can create new
                reminder types by assigning a unique name and color, which helps
                categorize and organize calendar reminders effectively.
                <ImageCard src={images.reminderTypes.add} />
              </li>
              <li id="reminder-type-edit">
                <Title text="Edit Reminder Types:" /> Users have the ability to
                update existing reminder types, allowing changes to their name
                or color to better reflect their purpose or improve clarity.
                <ImageCard src={images.reminderTypes.edit} />
              </li>
              <li id="reminder-type-state">
                <Title text="Activate/Deactivate Reminder Types:" /> Users can
                toggle reminder types between active and inactive states,
                enabling them to control which types are currently in use
                without permanently deleting them.
                <ImageCard src={images.reminderTypes.state} />
              </li>
              <li id="reminder-type-delete">
                <Title text="Remove Reminder Types:" /> Users can delete
                reminder types that are no longer needed, helping to keep the
                reminder system clean and relevant.
                <ImageCard src={images.reminderTypes.delete} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default ReminderType;
