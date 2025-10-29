import { Row } from "antd";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const AddingTasksQuickly = () => {
  return (
    <>
      <Row className="w-full">
        <SubHeading text="Adding Task Quickly" />
      </Row>
      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li>
                If no task has been added for a specific day, a “Task Not Added”
                label appears.
              </li>
              <li>
                Employees can click this label to add a new task instantly for
                that day.
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default AddingTasksQuickly;
