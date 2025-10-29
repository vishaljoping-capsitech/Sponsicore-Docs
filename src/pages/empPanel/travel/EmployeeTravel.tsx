import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
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
                <Paragraph text="Travel Management enables employees to manage business trips by adding, editing, or deleting pending requests. Users can view detailed trip overviews by clicking travel titles and apply filters for customized views. Basic details, locations, and self-added expenses can be updated while the trip is Pending or Approved. Travelers receive notifications for status updates or admin modifications. Locked trips cannot be changed, and duplicate travel requests for the same traveler and date are restricted."
                />
                <ImageCard src={images.empTravelPanel} />
                {sections.map((item) => (
                        <Row id={item.id}>
                            {item.component ? React.createElement(item.component) : null}
                        </Row>
                    ))}
            </Col>
        </Row>
    )
}
EmployeeTravel.getAnchorItems = () => generateAnchorItems(sections)
export default EmployeeTravel