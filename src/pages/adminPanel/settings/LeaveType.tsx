import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Paragraph from "../../../components/Paragraph";
import SubHeading from "../../../components/SubHeading";
import Title from "../../../components/Title";

const LeaveType = () => {
  return (
    <>
      <SubHeading text="Leave Types" className="margin-top-point-5rem" />
      <Paragraph
        text={
          <>
            <ul className="docs-list">
              <li id="general-leave-type">
                <Title text="General Leave Type:" /> This category includes
                common leave types such as casual leave, sick leave, and
                personal leave. These leave types usually share a collective
                maximum number of allowed days that apply uniformly to all
                employees within the organization.
                <ImageCard src={images.leaveTypes.general} />
              </li>
              <li id="other-leave-type">
                <Title text="Other Leave Type:" /> This category comprises
                specialized leave types like maternity leave, paternity leave,
                sabbatical leave, and other extended or conditional leaves. Each
                of these leave types has its own specific maximum allowed days,
                reflecting the unique nature and requirements of the leave.
                <ImageCard src={images.leaveTypes.other} />
              </li>
              <li id="add-leave-type">
                <Title text="Add Leave Types:" /> Users can create and add new
                leave types to the system, defining important details such as
                leave duration, eligibility criteria, and applicable employee
                groups. This flexibility allows organizations to tailor leave
                policies to their specific needs.
                <ImageCard src={images.leaveTypes.add} />
              </li>
              <li id="edit-leave-type">
                <Title text="Edit Leave Types:" /> Users can update existing
                leave types to reflect changes in policy or organizational
                structure. This includes modifying leave durations, eligibility
                rules, or descriptions to ensure the leave system remains
                accurate and relevant.
                <ImageCard src={images.leaveTypes.edit} />
              </li>
              <li id="remove-leave-type">
                <Title text="Remove Leave Types:" /> Users have the option to
                delete leave types that are obsolete or no longer applicable.
                Removing outdated leave types helps maintain a clean and
                organized leave management system, preventing confusion among
                employees.
                <ImageCard src={images.leaveTypes.delete} />
              </li>
              <li id="leave-type-status">
                <Title text="Activate/Deactivate Leave Types:" /> Users can
                toggle leave types between active and inactive status. This
                feature enables temporary suspension of certain leave options
                without permanently deleting them, allowing easy reactivation
                when needed.
                <ImageCard src={images.leaveTypes.status} />
              </li>
            </ul>
          </>
        }
      />
    </>
  );
};

export default LeaveType;
