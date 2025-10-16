import { Col, Row } from 'antd'
import React from 'react'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'
import ImageCard from '../../../components/ImageCard'
import { images } from '../../../assets'
import SubHeading from '../../../components/SubHeading'
import { sections } from './AttendanceSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'

const EmployeeAttendance = () => {
  return (
    <>
    <Row justify="center" gutter={64}>
        <Col xl={24}>
        <Heading text='Attendance' />
        <Paragraph text={<>
            <ul>
                <li><Title text='Monthly Attendance Overview with Clickable Stats' />This page displays an employee's monthly attendance along with summarized stat bricks showing counts for each attendance status. These bricks double as filters—clicking on any stat (like “Absent” or “Leave”) instantly filters the view to show only those specific records. This makes tracking and reviewing attendance quick and user-friendly.</li>
                <li><Title text='Multiple Attendance Status Types' />The system supports various attendance statuses such as Present, Absent, Work from Home (WFH), Work from Client (WFC), Leave, Half-Day, Weekend Off, and Holiday. These clear and categorized statuses ensure accurate tracking and help managers understand attendance patterns at a glance.
                <ImageCard src={images.empAttendancePanel}/></li>
            </ul>
            </>} />
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
EmployeeAttendance.getAnchorItems = () => generateAnchorItems(sections);
export default EmployeeAttendance