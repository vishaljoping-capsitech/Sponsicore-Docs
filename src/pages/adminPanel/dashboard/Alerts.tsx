import { images } from "../../../assets";
import Title from "../../../components/Title";
import Paragraph from "../../../components/Paragraph";
import ImageCard from "../../../components/ImageCard";

const Alerts: React.FC = () => {
  return (
    <Paragraph
      text={
        <>
          <ImageCard src={images.adminDashboardAlerts} />
          Stay informed and proactive with the Alerts section, designed to help
          you manage document compliance effortlessly:
          <ul>
            <li>
              {" "}
              Displays the total count of <Title text="Expired Documents" />
              and <Title text="Pending Documents" /> in real time.
            </li>
            <li>
              {" "}
              Allows you to view <Title text="detailed records" /> with a single
              click.
            </li>
            <li>
              {" "}
              Enables you to <Title text="send notifications" /> and{" "}
              <Title text="emails" /> directly from the dashboard.
            </li>
            <li> Supports for easy reporting and record-keeping.</li>
            <li>
              {" "}
              Includes smart filters to refine your view:
              <ul>
                <li>
                  {" "}
                  <Title text="Search Filter" /> - helps you quickly locate
                  employees by name.
                </li>
                <li>
                  {" "}
                  <Title text="Employee Type Filter" /> - allows you to filter
                  and manage employees based on their type (Sponsored or
                  Regular).
                </li>
              </ul>
            </li>
          </ul>
        </>
      }
    />
  );
};

export default Alerts;
