import React from "react";
import Heading from "../../components/Heading";
import { images } from "../../assets";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import { sections } from "./OverviewSection";
import { Row, Image } from "antd";
import { generateAnchorItems } from "../../utils/GenerateAnchorItems";




const Overview = () => {
  return (
    <>
      <Heading text="Overview" />
      <Paragraph text={<>Sponsicore is a next-generation compliance management platform purpose built for UK sponsorship license holders. It transforms the complex task of managing sponsored employees into a seamless, automated process eliminating spreadsheets, reducing manual errors, and keeping you audit ready at all times.
        With Sponsicore, managing your sponsorship license becomes effortless. From onboarding sponsored individuals to generating instant, audit ready reports, every compliance requirement is streamlined and aligned with Home Office regulations so you can stay focused on what matters most: <Title text="Your People and Your Business." /></>} />
      <Image src={images.overview} className="mt-5 mb-5" />
      {sections.map((item) => (
        <Row key={item.id} id={item.id}>
          {item.component ? React.createElement(item.component) : null}
        </Row>
      ))}
    </>
  );
};


Overview.getAnchorItems = () => generateAnchorItems(sections);
export default Overview;
