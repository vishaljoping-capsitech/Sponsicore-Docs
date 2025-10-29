import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import Title from "../../../components/Title";

const TopBar = () => {
  return (
    <>
      <SubHeading text="Top Bar" />
      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li>
                Displays the image of the currently logged-in user for easy
                identification..
              </li>
              <ImageCard src={images.adminLayoutDashboardTop} />
              <li>
                <Title text="Global Search Bar:" />
                <ul className="docs-list">
                  <li>
                    Allows users to search for employees, tasks, and reminders
                    across the system.
                  </li>
                  <li>
                    Clicking on a search result directly opens the related page,
                    saving time and effort.
                  </li>
                </ul>
              </li>

              <li>
                <Title id="quick-action-button" text="Quick Action Button:" />{" "}
                Accessible from any module, this button allows users to perform
                frequent actions quickly, including
                <ul className="docs-list">
                  <li>Creating a new employee</li>
                  <li>Adding a reminder</li>
                  <li>Composing an email</li>
                  <li>Creating notes for any employee</li>
                </ul>
                <ImageCard src={images.adminLayoutQuickActionButton} />
              </li>

              <li>
                Notification allows users to stay updated on important system
                activities. By clicking the button, users can view a detailed
                list of notifications along with the time each was generated.
                Additionally, users can manage their notifications by deleting
                individual items or clearing all notifications at once, keeping
                their list organized and up to date.
                <ImageCard src={images.adminLayoutNotificationDrawer} />
              </li>

              <li>
                Provides access to master data management, allowing users to
                configure system-wide settings and preferences.
              </li>

              <li id="user-profile-section">
                <Title text="User Profile Section:" /> The User Profile Button
                in Sponsicore allows users to manage their account settings and
                access personal preferences quickly. By clicking on the profile
                picture, the following options are available:
                <ul className="docs-list">
                  <Title id="login-activities" text="Login Activities:" />
                  <li>
                    Displays all devices where the account is currently logged
                    in.
                  </li>
                  <li>
                    Shows details such as IP address, device type, and browser
                    information.
                  </li>
                  <li>
                    Users can log out of individual devices or log out of all
                    devices at once to maintain account security.
                  </li>
                  <ImageCard src={images.adminLayoutProfilePopover} />
                </ul>
                <ul className="docs-list">
                  <Title id="change-password" text="Change Password:" />
                  <li>Opens a section to update the user password.</li>
                  <li>
                    <Title text="Requires entering three fields:" />
                    <ul className="docs-list">
                      <li>
                        <Title text="Current Password:" /> the existing
                        password.
                      </li>
                      <li>
                        <Title text="New Password:" /> the password you want to
                        set.
                      </li>
                      <li>
                        <Title text="Confirm New Password:" /> re-enter the new
                        password to confirm.
                      </li>
                      <ImageCard src={images.adminLayoutChangePasswordModal} />
                    </ul>
                  </li>
                  <li>
                    <Title text="Change Branch" />
                    <ul className="docs-list">
                      <li>
                        Available if the user has access to multiple branches
                        within the organization.
                      </li>
                      <li>
                        Allows the user to switch between branches without
                        logging out.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Title text="Employee Panel" />
                    <ul className="docs-list">
                      <li>
                        Accessible if the user has created employees under their
                        administration.
                      </li>
                      <li>
                        Provides quick navigation to manage and view employee
                        accounts assigned to that user.
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default TopBar;
