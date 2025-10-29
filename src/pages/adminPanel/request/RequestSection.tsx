import { Section } from "../../../types/Types";
import PendingRequest from "./PendingRequest";
import RequestFilter from "./RequestFilter";
import RequestStatusState from "./RequestStatusState";
import RequestTypes from "./RequestTypes";

export const sections: Section[] = [
    {
        component: RequestTypes,
        id: "request-types",
        title: "Request Types"
    },
    {
        component: RequestFilter,
        id: "request-filter",
        title: "Filter Requests"
    },
    {
        component: RequestStatusState,
        id: "request-status-state",
        title: "Action Buttons",
        children: [
            {
                id: "pending-action",
                title: "Action via Status Button"
            },
            {
                id: "irreversible-action",
                title: "Irreversible Actions"
            }
        ]
    },
    {
        component: PendingRequest,
        id: "pending-request",
        title: "Pending Requests & Notifications"
    }
    
]