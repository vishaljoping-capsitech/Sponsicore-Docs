import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
import Paragraph from '../../../components/Paragraph'
import { images } from '../../../assets'
import ImageCard from '../../../components/ImageCard'
import { sections } from './TravelSection'
import { generateAnchorItems } from '../../../utils/GenerateAnchorItems'


const Travel = () => {

  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text={'Travel'}></Heading>
          <Paragraph text={"Users can create, edit, and manage travel requests with full travel details, integrated expense tracking, instant trip overviews, and access to employee travel history, ensuring smooth and efficient travel planning. Administrators can approve, update, or delete requests confidently, supported by features such as auto-approval for admin-submitted trips, prevention of duplicate requests per traveler/date, and locked records for finalized entries."}
          />
          <ImageCard src={images.adminTravelPanel} />
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
Travel.getAnchorItems = () => generateAnchorItems(sections)
export default Travel