import { Row } from "antd";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const Tasks = () => {
  return (
    <>
      <Row>
        <SubHeading text="Tasks" />
      </Row>

      <Row>
        <Paragraph
          text={
            <>
              <ul className="docs-list">
                <li>Lists all tasks assigned for today.</li>
                <li>
                  You can click on any task to view its detailed description,
                  status, and due time.
                </li>
              </ul>
            </>
          }
        />
        <ImageCard src={images.empDashboardTasks} />
      </Row>
    </>
  );
};

export default Tasks;
