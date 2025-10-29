import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const PublicHolidays = () => {
  return (
    <>
      <SubHeading text="Public Holidays" />
      <Paragraph
        text={
          <>
            This section allows users to manage official days off for employees.
            <ul className="docs-list">
              <li>
                Users can add or remove holidays as needed.
                <ImageCard src={images.publicHoliday.add} />
              </li>
              <li>Holidays can be set for a single day or multiple consecutive days.</li>
              <li>Holidays can only be added for future dates — past holidays cannot be deleted.</li>
              <li>Users can assign holidays to specific employees or apply them to all employees across the organization.</li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default PublicHolidays;
