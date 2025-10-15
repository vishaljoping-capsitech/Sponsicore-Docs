import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";

const DashboardIntro: React.FC = () => {
  return (
    <Paragraph
      text={
        <>
          <ImageCard src={images.adminDashboard} />
          Sponsicore provides you the best compliance management system and here
          is a tour to it through the dashboard that provides you{" "}
          <Title text="real-time insights" /> into{" "}
          <Title text="employee statuses, upcoming deadlines, compliance alerts" />
          , and much more - all in one place. Designed to keep you{" "}
          <Title text="informedand in control" />, the Dashboard helps you make
          quick, confident decisions and ensures your business stays fully
          compliant.
        </>
      }
    />
  );
};

export default DashboardIntro;
