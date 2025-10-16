import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const WeeklyHours = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Shows your working details for the past 7 working days, including:
            <ul>
              <li>Daily working time</li>
              <li>Short hours</li>
              <li>Required vs. completed hours</li>
            </ul>
          </>
        }
      />
      <ImageCard src={images.empDashboardWeekelyHours} />
    </>
  )
}

export default WeeklyHours