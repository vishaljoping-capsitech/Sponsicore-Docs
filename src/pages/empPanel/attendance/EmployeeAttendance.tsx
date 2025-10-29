import { Col, Row } from 'antd'
import React from 'react'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import ImageCard from '../../../components/ImageCard'
import { images } from '../../../assets'
import { sections } from './AttendanceSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const EmployeeAttendance = () => {
  return (
    <>
    <Row justify="center" gutter={64}>
        <Col xl={24}>
        <Heading text='Attendance' />
        <Paragraph text="The Monthly Attendance Overview provides a clear view of an employee's attendance, featuring clickable stat bricks that summarize counts for each status and act as filters to quickly display specific records. The system supports multiple attendance types including Present, Absent, WFH, WFC, Leave, Half-Day, Weekend Off, and Holiday ensuring accurate tracking and easy insight into attendance patterns." />
            <ImageCard src={images.empAttendancePanel}/>
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
EmployeeAttendance.getAnchorItems = () => generateAnchorItems(sections);
export default EmployeeAttendance