import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const LeaveAndRequests = () => {
  return (
    <>
      <SubHeading text="Leave and Requests" />
      <Paragraph
        text={
          <>
            Displays all leave applications and requests submitted during the
            current year.
            <ul className="docs-list">
              <li>Clicking on a request opens its detailed view.</li>
              <li>
                The Leaves section also shows your current year's leave balance, indicating remaining available leave days.
              </li>
            </ul>
          </>
        }
      />
      <ImageCard src={images.empDashboardLeavesAndRequests} />
    </>
  );
};

export default LeaveAndRequests;
