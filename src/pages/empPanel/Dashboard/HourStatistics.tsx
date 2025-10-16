import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const HourStatistics = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Summarizes your monthly hour performance, including:
            <ul>
              <li>Average working hours</li>
              <li>Total break time</li>
              <li>Short hours or overtime accumulated during the month</li>
            </ul>
          </>
        }
      />
      <ImageCard src={images.empDashboardHourStatistics} />
    </>
  )
}

export default HourStatistics