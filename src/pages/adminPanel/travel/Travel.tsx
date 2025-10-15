import React from 'react'
import { Row, Col } from 'antd'
import Heading from '../../../components/Heading'
import SubHeading from '../../../components/SubHeading'
import Paragraph from '../../../components/Paragraph'
import Title from '../../../components/Title'
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
          <Paragraph text={
            <ul>
              <li>Easily <Title text={'create, edit, and manage travel requests'}></Title> with complete travel details, seamless expense tracking, instant trip overviews, and full access to employee travel history — all designed to keep your travel plans sharp and hassle-free.</li>
              <li>Admins can <Title text={'approve, update, or delete requests'}></Title> with confidence—featuring auto-approval for admin trips, smart duplicate request prevention per traveler/date, and locked finalized trips to guarantee data integrity and flawless workflow.</li>
              <li style={{listStyleType:"none"}}><ImageCard src={images.adminTravelPanel} /></li>
            </ul>
          } />
          <SubHeading
            text={<>
              <ol>
                {sections.map((item, index) => (
                  <li key={index} id={item.id}>
                    {item.title}
                    {item.component ? React.createElement(item.component) : null}
                  </li>
                ))}
              </ol>
            </>} />
        </Col>
      </Row>
    </>
  )
}
Travel.getAnchorItems = () => generateAnchorItems(sections)
export default Travel