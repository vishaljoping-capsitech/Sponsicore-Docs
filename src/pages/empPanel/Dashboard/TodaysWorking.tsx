import Paragraph from "../../../components/Paragraph";
import ImageCard from "../../../components/ImageCard";
import { images } from "../../../assets";
import SubHeading from "../../../components/SubHeading";

const TodaysWorking = () => {
  return (
    <>
      <SubHeading text="Todays Working" />
      <Paragraph 
        text={
          <>
            <ul className="docs-list">
              <li>Displays today's working time in real-time. The timer starts automatically after you clock in and pauses once you clock out.</li>
              <li>A progress bar visualizes your work progress for the day.</li>
              <li>The current date and day are shown alongside the required work hours to complete for the day.</li>
              <li>
                Displays your first clock-in, last clock-out, and real-time short hours based on your required daily hours.
                <ul className="docs-list">
                  <li>All additional clock-in or clock-out entries appear in the Time Log section below.</li>
                </ul>
              </li>
              <ImageCard src={images.empDashboardTodaysWorking} />
              <li>A Clock In / Clock Out button appears (if manual punching or hybrid work options are enabled) allowing you to record your attendance directly.</li>
            </ul>
          </>
        }
      />
    </>
  )
}

export default TodaysWorking