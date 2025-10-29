import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const CheckInTimeAccuracy = () => {
  return (
    <>
      <SubHeading text="Check in Time Accuracy" />
      <Paragraph
        text={
          <>
            Provides statistics for on-time arrivals and late check-ins for the
            current month, helping you track punctuality.
          </>
        }
      />
      <ImageCard src={images.empDashboardCheckInTime} />
    </>
  );
};

export default CheckInTimeAccuracy;
