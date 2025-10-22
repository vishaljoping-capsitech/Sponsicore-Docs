
import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'
import CompanyDocType from './CompanyDocType'
import EmployeeDocType from './EmployeeDocType'

const DocumentTypes = () => {
    return (
        <>
            <Paragraph text={<>
                This policy outlines the procedures for organizing and managing company and employee-related documents within the organization's document management system. To maintain compliance, consistency, and data integrity, specific core document types - both company and employee-related—are pre-defined and cannot be deleted from the system. These essential document types serve as a foundation for standardized recordkeeping and are critical to organizational operations, legal compliance, and audits. While deletion is restricted to prevent accidental or unauthorized removal, authorized personnel may modify the contents or metadata of these documents as needed to ensure accuracy and relevance. This policy applies to all departments and employees involved in creating, handling, or maintaining official documentation, and is intended to support secure, reliable, and efficient document lifecycle management.
                <ul>
                     <li id='company-doc-type'><Title text='Company Document Types:' /> 
                     <ImageCard src={images.documentTypes.company.overview} />
                     <CompanyDocType />
                     </li>
                     <li id='employee-doc-type'><Title text='Employee Document Types:' /> 
                     <ImageCard src={images.documentTypes.employee.overview} />
                     <EmployeeDocType />
                     </li>
                </ul>
            </>} />
        </>
    )
}

export default DocumentTypes