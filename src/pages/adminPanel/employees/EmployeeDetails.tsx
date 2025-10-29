import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Title from "../../../components/Title";
import SubHeading from "../../../components/SubHeading";

const EmployeeDetails = () => {
  return (
    <>
      <SubHeading text="Employee Details" className="margin-top-point-5rem"/>
      <Paragraph
        text={
          <>
            <ol className="docs-list">
              On the Employee Details page, we manage all employee-related
              information, including profile, documents, tasks, travel, time and
              attendance, requests, notes, sponsorship details (for sponsored
              employees only), and settings (such as shift management, card
              details, user settings, and the remote attendance feature).
              <ImageCard src={images.adminEmployeeProfile} />
              <li>
                In the profile, we manage an employee’s basic details, bank
                details, emergency contact details, job details, activity, and
                leave data (taken and allowed) where admin can able to edit each
                of the section.
              </li>
              <li>
                In Employee Activity, there are several status types:
                <ul className="docs-list">
                  <li><Title text="Active"/>: The employee is currently active.</li>
                  <li>
                    <Title text="Suspended"/>: The employee is temporarily not allowed to
                    perform official duties. Suspension can be set for a
                    specific date range, after which the employee becomes active
                    automatically. We send an email and notification to the
                    employee when they are suspended, when the suspension period
                    is modified, or when the suspension is completed.
                  </li>
                  <li>
                    <Title text="Left"/>: Indicates the employee is no longer with the company,
                    with one of the following reasons: Resigned, Retired, or
                    Terminated.
                  </li>
                </ul>
              </li>
              <ImageCard src={images.adminEmployeeActivityStatus} />
              <li>
                In the top right corner, there are two options:
                <ul className="docs-list">
                  <li>
                    <Title text="Onboarding"/>: This button appears if an employee has
                    registered for onboarding. It shows the onboarding status as
                    follows:
                    <ul className="docs-list">
                      <li>Not Started.</li>
                      <li>
                        In Process (where we can view the data the employee has
                        filled).
                      </li>
                      <li>
                        ‘Verify’ (means the employee has completed the
                        onboarding form; here, we can approve the details or, if
                        something is incorrect, click the ‘Notify for Changes’
                        button to reopen the form for the employee to correct
                        and resubmit)
                      </li>
                      <li>Completed (shown after verification is done)</li>
                      <li>
                        After onboarding verification, a welcome email will be
                        sent to the employee.
                      </li>
                    </ul>
                  </li>
                </ul>
                <ImageCard src={images.adminEmployeeOnboardingStatus} />
              </li>
              <li>
                <Title text="Send a Message"/>: This option allows the admin to send any kind of
                message to the employee. (Only for active employees)
              </li>
            </ol>
          </>
        }
      />
    </>
  );
}

export default EmployeeDetails;
