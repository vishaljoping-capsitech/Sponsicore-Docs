import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";

const Tasks: React.FC = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <ImageCard src={images.adminDashboardTasksGraph} />
            Keep your team productive and accountable with a powerful overview
            of recent tasks:
            <ul>
              <li>
                {" "}
                Displays the{" "}
                <Title text="total task count for the last 7 days" />, including
                today, giving you a clear snapshot of your team's activity.
              </li>
              <li>
                {" "}
                Highlights the <Title text="Pending Task count" /> to ensure
                critical items don't slip through the cracks.
              </li>
              <li>
                {" "}
                Apply the Job Type filter to focus on{" "}
                <Title text="specific roles" />, making task management precise
                and efficient.
              </li>
              <li>
                {" "}
                Clicking on the task count lets you{" "}
                <Title text="view detailed data, export reports, or notify employees directly" />
                , ensuring timely action.
              </li>
              <li>
                {" "}
                The Search Filter allows quick access to specific tasks for
                better visibility with the help of{" "}
                <Title text="searching by employee's name" />.
              </li>
              <li>
                {" "}
                Other filters influence the Notify All Employees function,
                helping you reach the right people at the right time.
              </li>
            </ul>
            <ImageCard src={images.adminDashboardTasksEmpList} />
          </>
        }
      />
    </>
  );
};
export default Tasks;
