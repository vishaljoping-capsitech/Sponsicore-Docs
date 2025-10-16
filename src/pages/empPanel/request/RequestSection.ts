import { Section } from "../../../types/Types";
import RequestFilter from "./RequestFilter";
import RequestNotification from "./RequestNotification";
import RequestOverview from "./RequestOverview";
import RequestTypes from "./RequestTypes";
import UpdatePendingRequest from "./UpdatePendingRequest";

export const sections: Section[] = [
    {
        component: RequestTypes,
        id: 'request-types',
        title: 'Request Types'
    },
    {
        component: RequestFilter,
        id: 'request-filter',
        title: 'Request Filters'
    },
    {
        component: RequestNotification,
        id: 'request-notification',
        title: 'Automated Notifications'
    },
    {
        component: RequestOverview,
        id: 'request-overview',
        title: 'Request Details'
    },
    {
        component: UpdatePendingRequest,
        id: 'update-pending-request',
        title: 'Pending Request Actions'
    },
]