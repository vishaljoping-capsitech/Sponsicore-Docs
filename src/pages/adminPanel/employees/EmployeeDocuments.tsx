import Paragraph from "../../../components/Paragraph";
import { images } from "../../../assets";
import ImageCard from "../../../components/ImageCard";
import Title from "../../../components/Title";

const EmployeeDocuments = () => {
  return (
    <>
      <Paragraph text="Manage employee's mandatory/regular documents (Max file side :4MB)" />

      <Paragraph
        text={
          <>
            <ol>
              <li id="mandatory-docs">
                <Title text="Mandatory Docs"/>: These types are managed through the Employee
                Document Types section in Settings.
                <ul>
                  <li>
                    Authorized users can view, download, view history, send
                    notification and email, or delete documents.
                  </li>
                  <li>
                    If an employee's document is uploaded by the admin, a
                    document review notification and email will be sent to the
                    employee.
                  </li>
                  <li>
                    All the required documents will be listed in a table with an
                    upload button, allowing users to upload them directly.
                  </li>
                  <li>
                    We've also added manual way to notify employees about
                    document issues:
                    <ul>
                      <li>
                        <Title text="Missing Docs"/>: Notify if a required document is not
                        uploaded.
                      </li>
                      <li>
                        <Title text="Expired Docs"/>: Notify when an uploaded document has
                        expired.
                      </li>
                      <li>
                        <Title text="Rejected Docs"/>: Notify if an uploaded document is
                        rejected and needs re-upload.
                      </li>
                    </ul>
                  </li>
                  <li>
                    In the status field, the document status will be displayed.
                    Once an employee uploads a document, an authorized user will
                    see a "Pending" button to view and take appropriate action
                    (approve or reject). If a document is rejected, a document
                    rejection notification and email will be sent to the
                    employee requesting them to re-upload the document.
                  </li>
                </ul>
                <ImageCard src={images.adminEmployeeMandatoryDocument} />
              </li>
              <li id="regular-docs">
                <Title text="Regular Docs"/>: These are used to store employee’s other documents
                and payslips.
                <ul>
                  <li>
                    Authorized users can view, download, or delete documents.
                  </li>
                </ul>
                <ImageCard src={images.adminEmployeeRegularDocument} />
              </li>
              <li id="add-document">
                <Title text="Add Document"/>: Authorized users can add documents through the Add
                Document modal. In this modal:
                <ul>
                  <li>
                    A list of all document types and drag-and-drop area will be
                    displayed.
                  </li>
                  <li>
                    In the dropdown, icons indicate documents that are already
                    uploaded or expired, helping users take appropriate action.
                  </li>
                  <li>
                    If the selected document type has an expiry date, an expiry
                    date input field will appear.
                  </li>
                  <li>
                    If the document is multi-sided, users can upload
                    single/multiple files accordingly.
                  </li>
                  <li>
                    For regular documents, an input field for the document name
                    and a drag-and-drop area will be shown.
                  </li>
                  <ImageCard src={images.adminEmployeeAddDocumentModel} />
                  <li>
                    For payslips, users must select the payslip period and then
                    upload the file using the drag-and-drop area. Duplicate
                    payslips for the same period are not allowed.
                  </li>
                  <ImageCard src={images.adminEmployeeAddPayslipModel} />
                </ul>
              </li>
            </ol>
          </>
        }
      />
    </>
  );
}

export default EmployeeDocuments;
