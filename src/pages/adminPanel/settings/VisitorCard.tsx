import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import Title from "../../../components/Title";

const VisitorCard = () => {
  return (
    <>
      <SubHeading text="Visitor Card" />
      <Paragraph
        text={
          <>
            A temporary ID is issued to guests for secure identification and
            controlled access. Biometric settings restrict entry to authorized
            areas only, ensuring guest movements remain monitored and secure.
            <ImageCard src={images.visitorCard.overview} />
            <ul className="docs-list">
              <li id="add-visitor-card">
                <Title text="Add Visitor Cards:" /> Users can create and assign
                new visitor cards by entering visitor details, setting access
                permissions, and linking the card to biometric systems for
                controlled entry.
                <ImageCard src={images.visitorCard.add} />
              </li>
              <li id="edit-visitor-card">
                <Title text="Edit Visitor Cards:" /> Users can update visitor
                card information, such as changing the visitor's name, duration
                of access, or modifying area permissions as needed.
                <ImageCard src={images.visitorCard.edit} />
              </li>
              <li id="visitor-card-status">
                <Title text="Activate/Deactivate Visitor Cards:" /> Users can
                toggle the status of a visitor card to active or inactive,
                depending on whether the card should be valid for entry at a
                given time.
                <ImageCard src={images.visitorCard.status} />
              </li>
              <li id="delete-visitor-card">
                <Title text="Remove Visitor Cards:" /> Users can permanently
                delete visitor cards that are no longer in use, helping to
                maintain a clean and secure access control system.
                <ImageCard src={images.visitorCard.delete} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default VisitorCard;
