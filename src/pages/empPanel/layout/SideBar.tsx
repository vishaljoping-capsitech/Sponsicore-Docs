import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";

const SideBar = () => {
  return (
    <>
      <SubHeading text="Side Bar" />
      <Paragraph
        text={
          <>
            The Sidebar contains all the main menus, allowing users to easily navigate and access different sections of the application such as Dashboard, Profile, Attendance, Tasks, and more.
          </>
        }
      />
      <ImageCard src={images.empLayoutDashboard} />
    </>
  );
}

export default SideBar;
