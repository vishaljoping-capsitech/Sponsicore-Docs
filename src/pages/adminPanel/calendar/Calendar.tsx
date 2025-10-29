import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import Paragraph from "../../../components/Paragraph";
import ImageCard from "../../../components/ImageCard";
import { images } from "../../../assets";
import Title from "../../../components/Title";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";
import { calenderSections } from "./calendarSection";

function Calendar() {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text={"Calendar"} />

          <Paragraph
            text={
              <>
                <ol className="docs-list">
                  The Employee Email Calendar in Sponsicore provides a
                  comprehensive view of important dates, reminders, and events
                  related to employees. It helps users stay organized and
                  ensures that key activities—such as visa renewals, birthdays,
                  and holidays—are never missed.
                  <li id="events">
                    The calendar displays all important employee-related events
                    in an interactive and easy-to-navigate format.
                    <ul className="docs-list">
                      <li id="reminders">
                        <Title text="Reminders" />: Custom events or
                        notifications created by users.
                      </li>
                      <li id="visa-expiry-dates">
                        <Title text="Visa Expiry Dates" />: Automatically tracks
                        upcoming visa expirations for sponsored employees.
                      </li>
                      <li id="holidays">
                        <Title text="Holidays" />: Displays official company
                        holidays.
                      </li>
                      <li id="birthdays">
                        <Title text="Birthdays" />: Highlights employee
                        birthdays for the selected period.
                      </li>
                    </ul>
                    <ImageCard src={images.adminCalendar} />A summary panel
                    beside the calendar shows the count of each event type
                    (Reminders, Visa Expiries, Holidays, Birthdays), allowing
                    users to get a quick overview of all upcoming activities.
                  </li>
                  <li>
                    Three views have been added to the calendar—Day, Month, and
                    Year—each presenting relevant data based on the selected
                    view.
                  </li>
                  <li>
                    On the right-hand side, the Sidebar displays a detailed list
                    of all reminders and events corresponding to the selected
                    time frame.
                    <ul className="docs-list">
                      <li>
                        After the event counts user can able to see the detail
                        info about the reminder with specific time and date.
                      </li>
                      <li>
                        Sidebar also displays the Weekly Timesheet summary,
                        allowing users to view employee attendance and work
                        records directly within the calendar view.
                      </li>
                    </ul>
                  </li>
                  <li id="create-reminder">
                    Users can easily create new reminders directly from the
                    calendar interface.
                    <ul className="docs-list">
                      To add a reminder, user have to provide the following
                      details:
                      <li>
                        <Title text="Date" />: The date on which the reminder
                        should appear.
                      </li>
                      <li>
                        <Title text="Type" />
                        :The category of the reminder (e.g., meeting, deadline,
                        follow-up).
                      </li>
                      <li>
                        <Title text="Title" />: The reminder title or subject.
                      </li>
                      <li>
                        <Title text="Attendees" />: Select one or more company
                        employees who should be notified.
                      </li>
                      <li>
                        <Title text="Time" />: Specify the reminder time.
                      </li>
                      <li>
                        <Title text="Description" />: Add relevant notes or
                        instructions.
                      </li>
                      <li>
                        <Title text="Attachments(Optional)" />: Upload any
                        supporting documents or files related to the reminder.
                      </li>
                    </ul>
                    <ImageCard src={images.adminCalendarCreateReminder} />
                  </li>
                  <li>
                    If a user adds a time to a reminder while creating or
                    editing it, an alert popup notification will be sent 10
                    minutes before the reminder starts.
                  </li>
                  <li id="reminder-types">
                    An authorized user can create reminders for different
                    audiences based on the requirement. The options include:
                    <ul className="docs-list">
                      <li>
                        <Title text="Me" />: to create a reminder for
                        themselves.
                      </li>
                      <li>
                        <Title text="All" />: to send the reminder to all active
                        employees.
                      </li>
                      <li>
                        <Title text="Job Types" />: to target employees
                        associated with selected job roles.
                      </li>
                      <li>
                        <Title text="Employee" />: to send the reminder to
                        specific employees selected individually.
                      </li>
                    </ul>
                  </li>
                  <li>
                    When a reminder is added or updated for any option other
                    than 'Me' such as for specific employees, job types, or all
                    employees the system sends a notification and email to the
                    selected attendees.
                    <ImageCard src={images.adminCalendarEditReminder} />
                  </li>
                  <li>
                    In the calendar, only reminders are clickable; all other
                    items, such as visa expiries, birthdays, and public
                    holidays, are displayed for viewing purposes only.
                  </li>
                  <li>
                    In the calendar sidebar, we've added a view icon next to
                    Visa Expiry, Birthdays, Holidays, and Reminders. Using this
                    view button, users can customize the calendar by selecting
                    which types of data they want to show/hide.
                  </li>
                  <li>
                    We've also added a button to collapse or expand the calendar
                    sidebar. it is positioned near the Month/Year switch
                  </li>
                </ol>
              </>
            }
          />
        </Col>
      </Row>
    </>
  );
}

Calendar.getAnchorItems = () => generateAnchorItems(calenderSections);

export default Calendar;