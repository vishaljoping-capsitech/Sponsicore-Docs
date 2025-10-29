import Title from "../../../components/Title";
import { images } from "../../../assets";
import Paragraph from "../../../components/Paragraph";
import ImageCard from "../../../components/ImageCard";

const Attendance: React.FC = () => {
  return (
    <Paragraph
      text={
        <>
          <ImageCard src={images.adminDashboardAttendanceSider} />
          Stay informed with a real-time view of your team's attendance
          activity:
          <ul className="docs-list">
            <li>
              Today's attendance stats are displayed by default, giving you an
              instant overview of who's{" "}
              <Title text="present, absent, on leave, and much more" />. All
              stats are clickable, allowing you to view the corresponding data
              with just one click.
            </li>
            <li>
              Filters are available to help you{" "}
              <Title text="customize the data and stats" />, making it easier to
              focus on specific dates, departments, or employee groups.
            </li>
            <li>
              {" "}
              Clicking on an employee's name takes you directly to the{" "}
              <Title text="Attendance page" />, where you can see their full
              record. Each entry includes an Edit button, allowing users to
              update or correct records instantly.
            </li>
          </ul>
        </>
      }
    />
  );
};

export default Attendance;
