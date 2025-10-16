import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";

const LeaveAndRequests = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Displays all leave applications and requests submitted during the
            current year.
            <ul>
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
