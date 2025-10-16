import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const TopBar = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <ImageCard src={images.empLayoutTopbar} />
            <ul>
              <li> The Top Bar provides important user information and quick-access actions: </li>

              <li>
                <Title text="User Information: " />
                Displays the name of the currently logged-in employee.
              </li>

              <li id="attendance-status">
                <Title text="Attendance Status: " />
                <ul>
                  <li> Shows the employee’s attendance status for the day, such as Present, Absent, Work from Home (WFH), Work from Client (WFC), Leave, Holiday, or Weekend Off. </li>
                  <li> A pending icon may appear beside the status to indicate that a WFH or WFC request is awaiting approval. </li>
                </ul>
              </li>

              <li id="notifications">
                <Title text="Notifications: " /> Displays a notification icon showing the count of unread notifications.
                <ul>
                  <li> Clicking the icon opens a notification panel where users can view all notifications with their date and time. </li>
                  <li> Users can mark all as read, mark individual notifications as read, or delete notifications. </li>
                  <li> Clicking on a specific notification redirects the user to the relevant page or section. </li>
                </ul>
                <ImageCard src={images.empLayoutNotification} />
              </li>

              <li id="user-profile-menu">
                <Title text="User Profile Menu: " /> Provides quick options to Change Password, Switch Panel (if the user is both an Admin and an Employee), or Logout from the system.
                <ImageCard src={images.empLayoutProfile} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default TopBar;
