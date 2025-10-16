import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";

const Attendance = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Displays a summary of your attendance for the current month, including counts for:
            <ul>
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
