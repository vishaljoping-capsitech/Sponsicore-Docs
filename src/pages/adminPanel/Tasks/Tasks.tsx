import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import Paragraph from "../../../components/Paragraph";
import ImageCard from "../../../components/ImageCard";
import { images } from "../../../assets";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";
import { TasksSections } from "./tasksSection";

const AdminTasks = () => {
  return (
    <Row justify="center" gutter={64}>
      <Col xl={24}>
        <Heading text={"Tasks"} />

        <Paragraph
          text={
            <>
              <ul className="docs-list">
                <li id="emps-tasks"> When you open this section, you’ll see a list of all active employees along with their tasks for the current day. If an employee hasn’t added a task yet, the system will show “Task Not Added” for that employee. In such cases, the Admin can easily send a notification or email reminder to prompt the employee to update their tasks.
                  <ImageCard src={images.adminTasks} />
                </li>
                <li id="tasks-filter"> You can use various filters to customize how you view the data — such as by date, employee type, job type, or by how many tasks have not been updated. The Due Task Count is also displayed at the top and acts as a quick filter — simply click on it to instantly view all employees with pending or overdue tasks.
                  <ImageCard src={images.adminTasksFilter} />
                </li>
                <li id="tasks-notification"> If multiple employees haven’t added their tasks for the day, you don’t need to notify them one by one. When you apply the Due Task filter, a “Notify All” button will appear, allowing you to remind all employees at once with a single click. This feature helps ensure that task updates are always timely and consistent across the team.
                  <ImageCard src={images.adminTasksNotifyModal} />
                </li>
                <li id="emp-tasks"> Clicking on an employee’s name will take you to their Task Details page, where you can see a monthly summary of all their assigned tasks, along with performance patterns over time.
                  <ImageCard src={images.adminTasksEmp} />
                </li>
                <li> On the Task Details page, you’ll also find each day’s status — such as Present, Absent, Leave, Holiday, Weekend, or On Trip — helping you understand the employee’s availability and work behavior throughout the month.
                </li>
                <li id="task-details"> To view more information about a particular task, simply click on the task title. This will open a detailed task overview, showing the task description, assigned date, deadline, completion status, and any remarks added by the employee or admin.
                  <ImageCard src={images.adminTasksDetails} />
                </li>
              </ul>
            </>
          }
        />
      </Col>
    </Row>
  );
};

AdminTasks.getAnchorItems = () => generateAnchorItems(TasksSections);

export default AdminTasks;