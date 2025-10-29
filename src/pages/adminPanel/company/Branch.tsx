import Paragraph from "../../../components/Paragraph"
import Title from "../../../components/Title"
import { images } from '../../../assets'
import ImageCard from "../../../components/ImageCard"
import SubHeading from "../../../components/SubHeading"
const Branch = () => {
    return (
        <>
        <SubHeading text="Branch Management"/>
            <Paragraph
                text={<ul className="docs-list">
                    <li><Title text={"Comprehensive Branch Controls:"} />
                        <ImageCard src={images.adminCompanyBranchOverview} />
                        <ul>
                            <li><Title text={"Add Branches:"} /> Admins can create new branches to expand the company's presence and structure as needed.
                                <ImageCard src={images.adminCompanyAddBranch} /></li>
                            <li><Title text={"Edit Branches:"} /> Existing branch details can be updated, including contact information, status, or other key information to keep records current.
                                <ImageCard src={images.adminCompanyEditBranch} /></li>
                            <li><Title text={"Delete Branches:"} /> Branches that are no longer active or relevant can be removed to maintain an accurate company branch list.
                                <ImageCard src={images.adminCompanyDeleteBranch} /></li>
                            <li><Title text={"Activate/Deactivate Branches:"} /> Branches can be temporarily enabled or disabled without deleting, allowing for flexible management.
                                <ImageCard src={images.adminCompanyBranchStatus} /></li>
                        </ul>
                    </li>
                    <li><Title text={"Main Branch Protection:"} /> The main branch holds a special status and cannot be deleted, deactivated, or renamed. This safeguards the integrity of the core company data and prevents accidental changes that could disrupt critical operations.
                        <ImageCard src={images.adminCompanyBranchOverview} /></li>
                    <li><Title text={"Branch Creation with Settings Copy:"} /> When creating a new branch, admins have the convenient option to copy settings and configurations from the main branch. This feature speeds up setup time by automatically applying standard parameters, ensuring consistency across branches.
                        <ImageCard src={images.adminCompanyAddBranch} /></li>
                </ul>} />
        </>
    )
}

export default Branch