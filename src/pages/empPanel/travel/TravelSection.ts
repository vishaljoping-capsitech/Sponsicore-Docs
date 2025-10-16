import { Section } from "../../../types/Types";
import AddTravelData from './AddTravelData'
import EditTravelData from './EditTravelData'
import RemoveTravelData from './RemoveTravelData'
import TripOverview from './TripOverview'
import EditPendingData from './EditPendingData'
import ManageExpenses from './ManageExpenses'
import TravelRequestUpdate from './TravelRequestUpdate'
import LockedTravelRequest from './LockedTravelRequest'
import TravelNotification from './TravelNotification'
import EmployeeDuplicateTravel from './EmployeeDuplicateTravel'
export const sections: Section[] = [
    {
        component: AddTravelData,
        id: 'add-travel-data',
        title: 'Add Travel Details'
    },
    {
        component: EditTravelData,
        id: 'edit-travel-data',
        title: 'Editing Travel Requests'
    },
    {
        component: RemoveTravelData,
        id: 'remove-travel-data',
        title: 'Removing Travel Requests'
    },
    {
        component: TripOverview,
        id: 'trip-overview',
        title: 'Accessing Travel Overviews'
    },
    {
        component: EditPendingData,
        id: 'edit-pending-data',
        title: 'Edit Pending Travel Requests'
    },
    {
        component: ManageExpenses,
        id: 'manage-expenses',
        title: 'Manage Your Expenses with Ease!'
    },
    {
        component: TravelRequestUpdate,
        id: 'travel-request-uopdate',
        title: 'Real-Time Travel Request Updates'
    },
    {
        component: LockedTravelRequest,
        id: 'locked-travel-request',
        title: 'Locked Travel Request'
    },
    {
        component: TravelNotification,
        id: 'travel-notification',
        title: 'Travel Notifications'
    },
    {
        component: EmployeeDuplicateTravel,
        id: 'employee-duplicate-travel',
        title: 'Restriction on Duplicate Travel Requests for the Same Date'
    }
]