import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import Title from "../../../components/Title";

const ReminderType = () => {
  return (
    <>
      <SubHeading text="Reminder Type" />
      <Paragraph
        text={
          <>
            In this section, the Admin can create and manage different types of
            calendar reminders.
            <ImageCard src={images.reminderTypes.overview} />
            <ul className="docs-list">
              <li>
                <Title text="Adding a New Reminder Type:" /> To add a new
                reminder type, the Admin needs to provide:
                <ul className="docs-list">
                  <li>Reminder Type Name</li>
                  <li> Color - each reminder type must have a unique color (the same color cannot be used for multiple reminder types).</li>
                </ul>
                <ImageCard src={images.reminderTypes.add} />
              </li>
              <li id="reminder-type-edit">
                <Title text="Edit Reminder Types:" /> Admin have the ability to
                update existing reminder types, allowing changes to their name
                or color to better reflect their purpose or improve clarity.
                <ImageCard src={images.reminderTypes.edit} />
              </li>
              <li id="reminder-type-state">
                <Title text="Activate/Deactivate Reminder Types:" /> Admin can
                toggle reminder types between active and inactive states,
                enabling them to control which types are currently in use
                without permanently deleting them.
                <ImageCard src={images.reminderTypes.state} />
              </li>
              <li id="reminder-type-delete">
                <Title text="Remove Reminder Types:" /> Admin can delete
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
