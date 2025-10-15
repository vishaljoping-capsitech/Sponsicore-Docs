import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";

const SideBar = () => {
  return (
    <>
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
