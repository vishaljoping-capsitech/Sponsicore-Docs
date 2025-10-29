import React from "react";
import { Col, Row } from "antd";
import Heading from "../../../components/Heading";
import SubHeading from "../../../components/SubHeading";
import { profileSections } from "./profileSections";
import Paragraph from "../../../components/Paragraph";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";

const Profile = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text="Profile" />

          <Paragraph
            text={
              <>
                The Profile section allows employees to manage their personal information, documents, and (if applicable) sponsorship details.
              </>
            }
          />
          {profileSections.map((item) => (
            <Row id={item.id}>
              <SubHeading text={item.title} />
              {item.component ? React.createElement(item.component) : null}
            </Row>
          ))}
        </Col>
      </Row>
    </>
  );
};

Profile.getAnchorItems = () => generateAnchorItems(profileSections);

export default Profile;