import ReportReminder from './ReportReminder'
import PayslipUpload from './PayslipUpload'
import MultipleReports from './MultipleReports'
import { Section } from '../../../types/Types'

export const sections: Section[] = [
    {
        component: ReportReminder,
        id:"report-reminder",
        title:"Report Reminder"
    },
    {
        component: PayslipUpload,
        id:"payslip-upload",
        title:"Payslip Upload"
    },
    {
        component: MultipleReports,
        id:"multiple-reports",
        title:"Multiple Reports"
    }
]