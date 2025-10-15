import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
import SubHeading from '../../../components/SubHeading'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'
import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import { sections } from './ReportsSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const Reports = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text={'Reports'}></Heading>
                    <Paragraph text={
                        <ul>
                            <li><Title text={'Automated Report Delivery:'}></Title> Authorized users can set up report reminders to automatically email selected reports to designated recipients on the first day of each month, ensuring timely updates without manual effort.</li>
                            <li><Title text={'Bulk Payslip Upload:'}></Title> Easily upload multiple employee payslips at once by naming files with employee IDs. The system matches and assigns payslips accurately based on the payment month you select.</li>
                            <li><Title text={'Customizable and Exportable Reports:'}></Title> Access a variety of reports with powerful filters to tailor data views. You can export reports in CSV or XLSX formats, with filters applied affecting the exported data for precise analysis.
                                <ImageCard src={images.adminReportsOverview} /></li>
                        </ul>} />
                    <SubHeading
                        text={
                            <>
                                <ol>
                                    {sections.map((item, index) => (
                                        <li key={index} id={item.id}>
                                            {item.title}
                                            {item.component ? React.createElement(item.component) : null}
                                        </li>
                                    ))}
                                </ol>
                            </>
                        }
                    />
                </Col>
            </Row>
        </>
    )
}
Reports.getAnchorItems = () => generateAnchorItems(sections);
export default Reports