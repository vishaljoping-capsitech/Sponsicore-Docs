import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";

const NotificationConfiguration = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            This section allows the Admin to configure and manage automated notification settings within the system.
            <ImageCard src={images.notificationConfiguration.config} />
            <ul>
              <li id="notification-manage-configuration">
                Add, Edit, and Manage Configurations:
                <ul>
                  <li>Admins can create new notification configurations or modify existing ones.</li>
                  <li>Each configuration can be activated or deactivated as needed.</li>
                </ul>
              </li>

              <li>
                Automated Notification Triggers:
                <ul>
                  <li>
                    Configure automated notifications for various system actions — for example, when an employee applies for leave, submits a request, or performs specific activities.
                  </li>
                  <li>Notifications are sent automatically based on the defined configuration rules.</li>
                </ul>
              </li>

              <li id="notification-recipient-settings">
                Recipient Settings:
                <ul>
                  <li>Define recipients for each type of automated notification.</li>
                  <li>
                    Recipients can include branch managers, reporting managers, HR, operations, and management users,
                    ensuring the right people are notified.
                  </li>
                </ul>
                <ImageCard src={images.notificationConfiguration.recipients} />
              </li>

              <li id="notification-job-types">
                Job-Type-Specific Notification Configuration:
                <ul>
                  <li>Set up configurations tailored to specific job types.</li>
                  <li>
                    For example, when a Development employee applies for leave, the notification can be sent to the HR
                    representative handling development staff.
                  </li>
                  <li>
                    Similarly, leave applications from Management employees can be routed to a designated HR contact for
                    that category.
                  </li>
                </ul>
                <ImageCard src={images.notificationConfiguration.jobTypes} />
              </li>

              <li id="notification-alert-days">
                Advance Alert Days:
                <ul>
                  <li>
                    Configure automated reminder notifications before a specific expiry date (e.g., contract, document,
                    or certification expiry).
                  </li>
                  <li>You can define multiple alert intervals (e.g., 30, 20, and 10 days before expiry).</li>
                  <li>
                    The system will automatically send reminders on each of these specified days, ensuring proactive
                    follow-ups.
                  </li>
                </ul>
                <ImageCard src={images.notificationConfiguration.alertDays} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default NotificationConfiguration;
