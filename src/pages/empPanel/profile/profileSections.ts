import { Section } from "../../../types/Types";
import DocumentInfo from "./DocumentInfo";
import ProfileInfo from "./ProfileInfo";
import SponsorshipDetails from "./SponsorshipDetailsInfo";

export const profileSections: Section[] = [
  { id: "profile", title: "Profile", component: ProfileInfo },
  { 
    id: "document",
    title: "Document",
    component: DocumentInfo,
    children: [
      {
        id: "mandatory-documents",
        title: "Mandatory Documents"
      },
      {
        id: "regular-documents",
        title: "Regular Documents"
      },
      {
        id: "add-document",
        title: "Add Document"
      }
    ]
  },
  { id: "sponsorship-details", title: "Sponsorship Details", component: SponsorshipDetails },
];
