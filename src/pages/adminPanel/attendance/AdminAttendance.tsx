import { Col, Row } from 'antd'
import React from 'react'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import ImageCard from '../../../components/ImageCard'
import { images } from '../../../assets'
import { sections } from './AttendanceSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const AdminAttendance = () => {
    return (
        <>
            <Row justify="center" gutter={64}>
                <Col xl={24}>
                    <Heading text='Attendance' />
                    <Paragraph text="It shows today's attendance stats by default for a quick overview. Users can filter data by attendance status, department, or shift, and click status indicators to instantly apply filters. Clicking on Employee ID opens the Attendance Details page with monthly stats and additional filters. A Go to Profile button links to the employee's profile, and users can add or edit attendance directly using the Attendance Status button. The First In or Last Out transaction is shown by default, with other In/Out records being visible on hover." />
                    <ImageCard src={images.adminAttendanceOverview} />
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
AdminAttendance.getAnchorItems = () => generateAnchorItems(sections);
export default AdminAttendance