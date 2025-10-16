import { Col, Row } from 'antd'
import React from 'react'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import ImageCard from '../../../components/ImageCard'
import { images } from '../../../assets'
import SubHeading from '../../../components/SubHeading'
import { sections } from './AttendanceSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const AdminAttendance = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text='Attendance' />
                    <Paragraph text="By default, the employee list displays today's attendance statistics, providing an immediate snapshot of attendance across the team. To help users tailor the view to their needs, a variety of filters are available, allowing customization based on different criteria such as attendance status, department, or shift timings. Additionally, the status indicators themselves serve a dual purpose—when clicked, they act as quick filters, instantly refining the employee list to show only those matching the selected attendance status. This interactive design makes it easy to analyze attendance data efficiently and focus on specific groups or trends with minimal effort." />
                    <ImageCard src={images.adminAttendanceOverview} />
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
AdminAttendance.getAnchorItems = () => generateAnchorItems(sections);
export default AdminAttendance