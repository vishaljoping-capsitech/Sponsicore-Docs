import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
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
                    <Paragraph text={"Authorized users can automate report delivery by scheduling monthly emails for selected reports, ensuring timely updates without manual effort. The system also supports bulk payslip uploads, automatically matching files to employees based on IDs and the selected payment month. Additionally, users can access customizable and exportable reports with advanced filters, exporting data in CSV or XLSX formats for precise analysis."} />
                    <ImageCard src={images.adminReportsOverview} />
                    {sections.map((item) => (
                        <Row id={item.id}>
                            {item.component ? React.createElement(item.component) : null}
                        </Row>
                    ))}
                </Col>
            </Row>
        </>
    )
}
Reports.getAnchorItems = () => generateAnchorItems(sections);
export default Reports