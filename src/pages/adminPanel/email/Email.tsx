import { Col, Row } from "antd";
import Paragraph from "../../../components/Paragraph";
import Heading from "../../../components/Heading";
import ImageCard from "../../../components/ImageCard";
import { images } from "../../../assets";
import Title from "../../../components/Title";
import { generateAnchorItems } from "../../../utils/GenerateAnchorItems";
import { emailSections } from "./emailSections";
import '../../../css/common.css'

const Email = () => {
  return (
    <>
      <Row justify="center" gutter={64}>
        <Col xl={24}>
          <Heading text={"Email"} />

          <Paragraph
            text={
              <>
                <ol className="docs-list">
                  The Email Section in Sponsicore allows users to manage all
                  organization-related communications in one place. Users can
                  view, compose, and manage both drafted and sent emails with
                  ease.
                  <li>
                    At the core of the Email Section is a comprehensive table
                    that displays all email records. Each entry provides
                    essential information to help users track and manage their
                    messages efficiently.
                    <ImageCard src={images.adminEmailEmailTableWithFiltter} />
                  </li>
                  <li id="email-types">
                    There are two types of emails
                    <ul id="draft-emails" className="docs-list">
                      <Title text="Draft Emails" />:
                      <li>
                        <Title text="Edit" />: Open and modify the draft before
                        sending.
                      </li>
                      <li>
                        <Title text="Delete" />: Permanently remove the draft
                        from the system.
                      </li>
                    </ul>
                    <ul id="sent-emails">
                      <Title text="Sent Emails" />:
                      <li>
                        Sent emails are view-only and cannot be deleted or
                        edited to ensure message integrity.
                      </li>
                    </ul>
                  </li>
                  <li id="filter">
                    To help locate emails easily, the system provides filter and
                    search functionality. Quickly filter emails based on their
                    current status — Draft or Sent. Use the search bar to find
                    emails by subject, sender name, or other key details. This
                    makes it simple to manage large volumes of email records
                    efficiently.
                    <ImageCard src={images.adminEmailEmailTableWithFiltter} />
                  </li>
                  <li id="composing-email">
                    <Title text="Composing an Email" />: Users can create a new
                    email using the Compose button located at the top-left
                    corner of the table. This opens the email composer
                    interface, designed for clarity and flexibility.
                    <ul className="docs-list">
                      <Title text="Compose Email Fields" />:
                      <li>
                        <Title text="To" />: Select one or more recipients from
                        the company's employee list. Emails can only be sent to
                        registered company employees within Sponsicore.
                      </li>
                      <li>
                        <Title text="Subject" />: Enter the subject line for
                        your email. This field is required.
                      </li>
                      <li>
                        <Title text="Message" />: Write the body of your email
                        using the built-in text editor. The editor supports rich
                        text formatting, allowing you to style the email body as
                        needed (bold, italic, bullet points, etc.).
                      </li>
                      <li>
                        <Title text="Attachment (Optional)" />: Upload any
                        relevant document or image to include with the email.
                        Attachments are optional and support common file types.
                      </li>
                      <ImageCard src={images.adminEmailComposeEmail} />
                    </ul>
                  </li>
                </ol>
              </>
            }
          />
        </Col>
      </Row>
    </>
  );
}

Email.getAnchorItems = () => generateAnchorItems(emailSections);

export default Email;