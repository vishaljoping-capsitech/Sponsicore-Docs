import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import Title from "../../../components/Title";
import ImageCard from "../../../components/ImageCard";

const JoinAndLeft: React.FC = () => {
  return (
    <Paragraph
      text={
        <>
          <ImageCard src={images.adminDashboardJoinAndLeft} />
          The Join & Left section provides a clear and interactive overview of{" "}
          <Title text="employee movement within the organization" />. By
          default, it displays the total number of employees who joinedand left
          during the <Title text="current month" />, offering instantinsight
          into workforce trends. Users can easily change the reportingperiod
          using the month filter, allowing for quick comparisons anddeeper
          analysis of hiring and attrition patterns across differentmonths. Each
          count — Join and Left - is fully clickable,{" "}
          <Title text="enabling users to drill down into the underlying data" />
          . With a single click, they can view the complete list of employees
          who joined or left, along with relevant details such as{" "}
          <Title text="Employee Id, Names, and effective dates" />.
        </>
      }
    />
  );
};
export default JoinAndLeft;
