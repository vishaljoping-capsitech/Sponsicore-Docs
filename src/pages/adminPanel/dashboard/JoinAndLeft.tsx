import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import SubHeading from "../../../components/SubHeading";

const JoinAndLeft: React.FC = () => {
  return (
    <>
    <SubHeading text="Join and Left" />
    <Paragraph
      text={
        <>
          The Join & Left section provides a clear and interactive overview of
          employee movement within the organization. By default, it displays the
          total number of employees who joinedand left during the current month,
          offering instantinsight into workforce trends. Users can easily change
          the reportingperiod using the month filter, allowing for quick
          comparisons anddeeper analysis of hiring and attrition patterns across
          differentmonths. Each count — Join and Left - is fully clickable,
          enabling users to drill down into the underlying data . With a single
          click, they can view the complete list of employees who joined or
          left, along with relevant details such as Employee Id, Names, and
          effective dates.
          <ImageCard src={images.adminDashboardJoinAndLeft} />
        </>
      }
    />
    </>
    
  );
};
export default JoinAndLeft;
