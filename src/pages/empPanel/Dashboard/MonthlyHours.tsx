import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"
import SubHeading from "../../../components/SubHeading"

const MonthlyHours = () => {
  return (
    <>
      <SubHeading text="Monthly Hours" />
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