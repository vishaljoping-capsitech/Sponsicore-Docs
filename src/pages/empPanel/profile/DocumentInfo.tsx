import { images } from "../../../assets"
import ImageCard from "../../../components/ImageCard"
import Paragraph from "../../../components/Paragraph"

const DocumentInfo = () => {
  return (
    <>
      <Paragraph
        text={
          <>
            This section allows employees to manage their mandatory and regular documents. (Maximum upload file size: 4MB)
            <ul>
              <li id="mandatory-documents">
                Mandatory Documents:
                <ul>
                  <li>These document types are managed through Pre-Defined Employee Document Types. Employees can add, view, download, and check document history.</li>
                  <li>
                    When an employee uploads a document, the admin can verify or reject it.
                    <ul className="docs-list">
                      <li>If rejected, the employee receives an email and notification prompting re-upload.</li>
                      <li>A Reupload button then appears in the document table.</li>
                    </ul>
                  </li>
                  <li>All required documents are listed by default, with an Upload button beside each to allow direct upload.</li>
                </ul>
                <ImageCard src={images.empProfileMandatoryDocuments} />
              </li>

              <li id="regular-documents">
                Regular Documents:
                <ul>
                  <li>This section stores other employee-related documents, including payslips.</li>
                  <li>Employees can view, remove, and download these documents.</li>
                </ul>
                <ImageCard src={images.empProfileRegularDocuments} />
              </li>

              <li id="add-document">
                Add Document: 
                <ul>
                  Employees can upload new documents using the Add Document Modal, which supports both Mandatory and Regular document uploads.
                  <li>
                    For Mandatory Documents:
                    <ul>
                      <li>Displays a list of all document types along with a drag-and-drop upload area.</li>
                      <li>The dropdown menu shows icons for documents that are already uploaded or expired.</li>
                      <li>If a document type requires an expiry date, an Expiry Date field will appear.</li>
                      <li>For multi-sided documents, employees can upload one or multiple files accordingly.</li>
                    </ul>
                    <ImageCard src={images.empProfileMandatoryDocumentAdd} />
                  </li>
                  <li>
                    For Regular Documents:
                    <ul>
                      <li>
                        Employees must provide a document name and upload files via the drag-and-drop area.
                        <ul>
                          <li>For Payslips, employees select the payslip period before uploading.</li>
                          <ImageCard src={images.empProfileAddPaySlip} />
                        </ul>
                      </li>
                      <li>Duplicate payslips for the same period are not allowed.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        }
      />
    </>
  )
}

export default DocumentInfo