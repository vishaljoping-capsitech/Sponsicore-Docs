import ProfileOverview from './ProfileOverview'
import Documents from './Documents'
import Branch from './Branch'
import Officers from './Officers'
import Features from './Features'
import Subscription from './Subscription'
import { Section } from '../../../types/Types'

export const sections: Section[] = [
    {
        component: ProfileOverview,
        id: "profile-overview",
        title: "Profile Overview"
    },
    {
        component: Documents,
        id: "documents",
        title: "Documents Management"
    },
    {
        component: Branch,
        id: "branch",
        title: "Branch Management"
    },
    {
        component: Officers,
        id: "officers",
        title: "Officers"
    },
    {
        component: Features,
        id: "features",
        title: "Features"
    },
    {
        component: Subscription,
        id: "subscription",
        title: "Subscription"
    }
]