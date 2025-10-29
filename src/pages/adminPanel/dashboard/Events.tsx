import { images } from "../../../assets";
import Title from "../../../components/Title";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const Events: React.FC = () => {
  return (
    <>
      <SubHeading text="Events" />
      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li id="events-reminders">
                <ul className="docs-list">
                  <Title text="Reminders:" /> The Reminders section keeps you on
                  top of everything important by showing all upcoming reminders
                  from today up to the next 15 days, with today's tasks
                  highlighted so nothing slips through the cracks. Click on any
                  reminder to get a quick, detailed overview.
                  <ImageCard src={images.adminDashboardRemindersSection} />
                </ul>
              </li>

              <li id="events-birthdays">
                <Title text="Birthdays:" /> Never miss a chance to celebrate
                your teammates! With just one click, you can see all employee
                birthdays for the month, making it easy to plan wishes,
                surprises, or team celebrations. Stay connected, spread some
                joy, and make every birthday feel special - because every team
                member deserves to be celebrated.
                <ImageCard src={images.adminDashboardBirthdays} />
              </li>

              <li id="events-holidays">
                <Title text="Holidays:" /> Keep your calendar stress-free and
                organized by viewing all upcoming public holidays in one place.
                With quick access at your fingertips, you can plan your work,
                vacations, and personal time effortlessly. Stay ahead of
                deadlines, enjoy your well-deserved breaks, and never be caught
                off guard by a holiday again.
                <ImageCard src={images.adminDashboardHolidays} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default Events;
