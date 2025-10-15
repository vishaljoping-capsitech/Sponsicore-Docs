import { Col } from "antd";
import { images } from "../../../assets";
import Title from "../../../components/Title";
import ImageCard from "../../../components/ImageCard";

const Events: React.FC = () => {
  return (
    <Col>
      <ul>
        <li id="events-reminders">
          <ul>
            <Title text="Reminders" />:
            <ImageCard src={images.adminDashboardRemindersSection} />
            The Reminders section keeps you on top of everything important by
            showing all upcoming reminders from{" "}
            <Title text="today up to the next 15 days" />, with today's tasks
            highlighted so nothing slips through the cracks. Click on any
            reminder to get a <Title text="quick, detailed overview" />.
          </ul>
        </li>

        <li id="events-birthdays">
          <Title text="Birthdays" />:
          <ul>
            <ImageCard src={images.adminDashboardBirthdays} />
            Never miss a chance to celebrate your teammates! With just one
            click, you can see{" "}
            <Title text="all employee birthdays for the month" />, making it
            easy to plan wishes, surprises, or team celebrations. Stay
            connected, spread some joy, and make every birthday feel special -
            because every team member deserves to be celebrated.
          </ul>
        </li>

        <li id="events-holidays">
          <Title text="Holidays" />:
          <ul>
            <ImageCard src={images.adminDashboardHolidays} />
            Keep your calendar stress-free and organized by viewing all{" "}
            <Title text="upcoming public holidays in one place" />. With quick
            access at your fingertips, you can plan your work, vacations, and
            personal time effortlessly. Stay ahead of deadlines, enjoy your
            well-deserved breaks, and never be caught off guard by a holiday
            again.
          </ul>
        </li>
      </ul>
    </Col>
  );
};

export default Events;
