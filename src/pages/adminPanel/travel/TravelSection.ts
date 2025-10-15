import { Section } from "../../../types/Types";
import AddTravel from './AddTravel'
import EditTravel from './EditTravel'
import RemoveTravel from './RemoveTravel'
import TravelOverview from './TravelOverview'
import EmployeeTripHistory from './EmployeeTripHistory'
import AutoApprovedStatus from './AutoApprovedStatus'
import LockedTravel from './LockedTravel'
import DuplicateTravel from './DuplicateTravel'
import CustomFilters from './CustomFilters'
import TripHistoryinAddEdit from './TripHistoryinAddEdit'

export const sections: Section[] = [
  {
    component: AddTravel,
    id: 'add-travel',
    title: 'Add Travel Request'
  },
  {
    component: EditTravel,
    id: 'edit-travel',
    title: 'Edit Travel Request'
  },
  {
    component: RemoveTravel,
    id: 'remove-travel',
    title: 'Remove Travel Request'
  },
  {
    component: TravelOverview,
    id: 'travel-overview',
    title: 'Travel Overview'
  },
  {
    component: EmployeeTripHistory,
    id: 'employee-trip-history',
    title: 'Employee Trip History'
  },
  {
    component: AutoApprovedStatus,
    id: 'auto-approved-status',
    title: 'Auto Approved Status'
  },
  {
    component: LockedTravel,
    id: 'locked-travel',
    title: 'Locked Travel Request'
  },
  {
    component: TripHistoryinAddEdit,
    id: 'trip-history-add-edit',
    title: 'View Trip History in Add and Edit Drawer',
    children: [
      {
        id: 'trip-history-add',
        title: 'View Trip History in Add Drawer',
      },
      {
        id: 'trip-history-edit',
        title: 'View Trip History in Edit Drawer',
      }
    ]
  },
  {
    component: DuplicateTravel,
    id: 'duplicate-travel',
    title: 'Duplicate Travel Requests Not Permitted'
  },
  {
    component: CustomFilters,
    id: 'custom-filters',
    title: 'Custom Filters'
  }
]
