import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
import SubHeading from '../../../components/SubHeading'
import Paragraph from '../../../components/Paragraph'
import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import { sections } from '../../empPanel/travel/TravelSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'


const EmployeeTravel = () => {
    return (
        <Row justify="center" gutter={64}>
            <Col xl={24}>
                <Heading text='Travel' />
                <Paragraph text="Travel Management allows employees to efficiently handle their business travel requests by adding, editing, or removing pending trips. Users can click on travel titles to view detailed overviews, while various filters help customize data views. Employees can update basic and location details, as well as manage self-added expenses, as long as the trip status is Pending or Approved. Notifications are sent to travelers when an authorized user updates the travel request status or modifies admin-added trip details. Locked travel requests cannot be edited or deleted, and to avoid conflicts, multiple travel requests for the same traveler on the same date are not permitted."
                />
                <ImageCard src={images.empTravelPanel} />
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
    )
}
EmployeeTravel.getAnchorItems = () => generateAnchorItems(sections)
export default EmployeeTravel