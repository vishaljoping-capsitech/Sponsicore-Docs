import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const CheckInTimeAccuracy = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Provides statistics for on-time arrivals and late check-ins for the current month, helping you track punctuality.
          </>
        }
      />
      <ImageCard src={images.empDashboardCheckInTime} />
    </>
  )
}

export default CheckInTimeAccuracy