import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const MonthlyHours = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Displays your total required work hours for the current month and how many hours you've completed so far.
          </>
        }
      />
      <ImageCard src={images.empDashboardMonthlyHours} />
    </>
  )
}

export default MonthlyHours