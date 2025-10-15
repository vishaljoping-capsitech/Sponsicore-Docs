import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const DashboardOutro: React.FC = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <Title text="Note For Dashboard:"/> All statistical data displayed on the dashboard are clickable only
            when their count is <Title text="greater than zero" />, ensuring
            users interact solely with{" "}
            <Title text="meaningful and available data" />. Within modals, if a
            user clicks on an employee ID, they are automatically redirected to
            that{" "}
            <Title text="employee's detailed profile page for quick and convenient access" />{" "}
            to individual information.
          </>
        }
      />
    </>
  );
};

export default DashboardOutro;
