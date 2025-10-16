import Paragraph from "../../../components/Paragraph";

export const SidebarToggle = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            <ul>
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
