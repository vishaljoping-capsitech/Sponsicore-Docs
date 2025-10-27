import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const JobType = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            A job type is characterized by three main elements: its name (e.g.,
            Software Developer), an occupational code (a standardized
            classification number used for categorization and compliance), and a
            set of related job titles that represent specific roles within that
            category (such as Front-End Developer or App Developer). These
            components help ensure consistency in job classification, streamline
            recruitment processes, and align roles with organizational
            structures.
            <ImageCard src={images.jobTypes.overview} />
            <ul className="docs-list">
              <li id="job-type-add">
                <Title text="Add:" /> Users can add new job types by specifying
                the job name, occupational code, and associated job titles to
                support organizational structure and role clarity.
                <ImageCard src={images.jobTypes.add} />
              </li>
              <li id="job-type-edit">
                <Title text="Edit:" /> Users can modify existing job types to
                update the name, occupational code, or related job titles,
                ensuring the job type remains accurate and aligned with current
                needs.
                <ImageCard src={images.jobTypes.edit} />
              </li>
              <li id="job-type-delete">
                <Title text="Delete:" /> Users can remove job types that are no
                longer in use, helping to keep the system clean and relevant.
                Note that system-protected or in-use job types may be restricted
                from deletion.
                <ImageCard src={images.jobTypes.delete} />
              </li>
              <li id="job-type-state">
                <Title text="Active / Inactive:" /> Users can activate or
                deactivate job types as needed, allowing temporary suspension of
                unused roles while preserving historical data and settings.
                <ImageCard src={images.jobTypes.state} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default JobType;
