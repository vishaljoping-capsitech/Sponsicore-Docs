import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";

const LeavesAndRequest: React.FC = () => {
  return (
    <Paragraph
      text={
        <>
          <ul>
            <li>
              <Title id="leaves" text="Leaves" />:
              <ul>
                <ImageCard src={images.adminDashboardLeaveStatus} />
                <li>
                  Leaves and Request section is a crucial and a vast section The
                  Leaves tab shows all leave requests submitted by users. Each
                  entry is marked with a <Title text="Pending " /> status
                  button, allowing admins to take action-{" "}
                  <Title text="approve, reject, or review" /> -directly from
                  this section. You can also see a count of today's applied
                  leaves, giving you an instant snapshot of pending requests for
                  the day.
                </li>
              </ul>
            </li>

            <li>
              <Title id="requests" text="Requests" />:
              <ul>
                <ImageCard src={images.adminDashboardRequestStatus} />
                <li>
                  The Requests tab displays all other types of requests
                  submitted by users. Similar to leaves, each request comes with
                  a Pending Status button for quick action. To make managing
                  requests easier, you can filter requests by type, including:
                  <ul>
                    <li>Address Update</li>
                    <li>Bank Details Update</li>
                    <li>Client Meeting</li>
                    <li>Correction</li>
                    <li>Missing Card</li>
                    <li>Other</li>
                    <li>Unauthorised Absence</li>
                    <li>Work From Client</li>
                    <li>Work From Home</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </>
      }
    />
  );
};

export default LeavesAndRequest;
