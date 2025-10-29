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
            The Sidebar displays all authorized menus
            based on the user's role and permissions. Users can click on any
            menu item to access the corresponding module.
          </>
        }
      />
      <ImageCard src={images.adminLayoutDashboardSide} />
    </>
  );
}

export default SideBar;
