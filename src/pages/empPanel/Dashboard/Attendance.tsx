import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const Attendance = () => {
  return (
    <>
      <SubHeading text="Attendance" className="w-full" />

      <Paragraph
        text={
          <>
            <ul className="docs-list">
              Displays a summary of your attendance for the current month,
              including counts for:
              <li>Present</li>
              <li>Absent</li>
              <li>Work from Home (WFH)</li>
              <li>Work from Client (WFC)</li>
              <li>Half Day</li>
              <li>Leave</li>
            </ul>
          </>
        }
      />

      <ImageCard src={images.empDashboardAttendance} />
    </>
  );
};

export default Attendance;
