import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import Title from "../../../components/Title";

const JobType = () => {
  return (
    <>
      <SubHeading text="Job Types" />
      <Paragraph
        text={
          <>
            In this section, the Admin can manage all job types within the
            system.
            <ImageCard src={images.jobTypes.overview} />
            <ul className="docs-list">
              <li>
                <Title text="Adding a New Job Type:" /> The Admin can add a new
                job type by providing the following details:
                <ul className="docs-list">
                  <li>Job Type Name</li>
                  <li>SOC Code</li>
                  <li>
                    One or more Job Titles (multiple titles can be added under
                    the same job type)
                  </li>
                </ul>
                <ImageCard src={images.jobTypes.add} />
              </li>
              <li>
                <Title text="Predefined Job Type:" /> There is one predefined
                job type — Administration, which includes the job title:
                Manager.
                <ImageCard src={images.jobTypes.edit} />
              </li>
              <li>
                <Title text="Editing and Deleting Job Types:" />
                <ul>
                  <li> The Admin can edit any job type to update its details or job titles. </li>
                  <li> The Admin can also delete any job type if it is no longer needed. </li>
                </ul>
                <ImageCard src={images.jobTypes.delete} />
              </li>
              <li>
                <Title text="Active / Inactive:" /> 
                <ul>
                  <li>Each job type can be marked as Active or Inactive.</li>
                  <li>When a job type is Inactive, it will not appear in the job type selection list while creating a new user.</li>
                </ul>
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
