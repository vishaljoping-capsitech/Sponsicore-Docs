import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

export const SidebarToggle = () => {
  return (
    <>
      <SubHeading text="Sidebar Toggle" className="margin-top-point-5rem"/>
      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li>A collapse/expand button is provided to easily show or hide the calendar sidebar.</li>
              <li>This button is conveniently positioned near the Month/Year switch control, offering a cleaner and more focused workspace when needed.</li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default SidebarToggle;
