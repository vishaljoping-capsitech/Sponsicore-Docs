import { Row } from "antd";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const TasksOverview = () => {
  return (
    <>
      <Row>
        <SubHeading text="Task Overview" className="margin-top-point-5rem"/>
      </Row>
      <Row>
        <Paragraph
          text={
            <>
              Employees can view all their tasks on a monthly calendar.
              <ul className="docs-list">
                Each day displays:
                <li>The total number of tasks created on that day</li>
                <li>Task titles, descriptions, and any attachments</li>
                <li>
                  The employee's day status (e.g., Present, Absent, Leave,
                  Holiday, Weekend, On-Trip, etc.)
                </li>
              </ul>
            </>
          }
        />
        <ImageCard src={images.empTasks} />
      </Row>
    </>
  );
};

export default TasksOverview;
