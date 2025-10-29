import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import Title from "../../../components/Title";

const BranchPolicies = () => {
  return (
    <>
      <SubHeading text="Branch Policies" />
      <Paragraph
        text={
          <>
            This section allows users to create, organize, and manage company
            policies to define rules, guidelines, and procedures for their
            organization.
            <ImageCard src={images.branchPolicies.overview} />
            <ul className="docs-list">
              <li>
                <Title text="Creating a Policy" /> 
                <ul className="docs-list">
                  Users can add new policies by providing the following details:
                  <li>Title - the name of the policy.</li>
                  <li>Description - a brief summary of the policy.</li>
                  <li>Order - defines the display sequence of the policy.</li>
                  <li>Policy Content - either upload a policy document or write the policy directly using the built-in text editor.</li>
                  <li>Notify Employees - check this box to send notifications to employees about the new policy.</li>
                </ul>
                <ImageCard src={images.branchPolicies.add} />
              </li>
              <li>
                <Title text="Managing Policies:" /> 
                <ul className="docs-list">
                  <li>
                    Admin can view, edit, download, activate/deactivate, or delete policies as needed.
                    <ImageCard src={images.branchPolicies.edit} />
                  </li>
                  <li>
                    Employees are automatically notified whenever a policy is added or updated.
                    <ImageCard src={images.branchPolicies.state} />
                  </li>
                  <li>
                    The policy order can be adjusted to control the sequence in which policies are shown to employees.
                  </li>
                </ul>
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default BranchPolicies;
