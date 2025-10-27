import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import Title from "../../../components/Title";

const BranchPolicies = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            Users can create and manage policies for their organization to
            establish clear rules, guidelines, and procedures. This ensures
            consistency and alignment across teams while maintaining compliance
            with organizational standards. Whenever a policy is added or
            updated, employees are promptly notified, keeping everyone informed
            and up to date. Additionally, we manage the order of policies,
            allowing administrators to control the sequence in which policies
            are presented to employees, ensuring that the most important or
            time-sensitive policies receive appropriate attention.
            <ImageCard src={images.branchPolicies.overview} />
            <ul className="docs-list">
              <li id="branch-policies-add">
                <Title text="Add Policies:" /> Users have the ability to create
                and add new policies within the organization's system. This
                function allows them to define important rules, guidelines, or
                procedures that employees need to follow, ensuring clarity and
                compliance throughout the company.
                <ImageCard src={images.branchPolicies.add} />
              </li>
              <li id="branch-policies-edit">
                <Title text="Edit Policies:" /> Users can update or modify
                existing policies whenever changes are necessary. This helps
                keep all policies accurate and relevant, reflecting any new
                regulations, organizational changes, or improvements to
                procedures.
                <ImageCard src={images.branchPolicies.edit} />
              </li>
              <li id="branch-policies-download">
                <Title text="Download Policies:" /> Users can download policy
                documents to their devices for offline access, easy sharing, or
                further review. This is useful for employees who may need to
                refer to policies without constant internet access or for
                archival purposes.
                <ImageCard src={images.branchPolicies.overview} />
              </li>
              <li id="branch-policies-state">
                <Title text="Activate/Deactivate Policies:" /> Users can control
                whether a policy is currently in effect by toggling it between
                active and inactive status. This feature is helpful for
                temporarily suspending policies or phasing out outdated ones
                without permanently deleting them.
                <ImageCard src={images.branchPolicies.state} />
              </li>
              <li id="branch-policies-delete">
                <Title text="Delete Policies:" /> Users can permanently remove
                policies that are no longer needed or relevant. This keeps the
                organization's policy list clean and up to date, preventing
                confusion caused by obsolete information.
                <ImageCard src={images.branchPolicies.delete} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default BranchPolicies;
