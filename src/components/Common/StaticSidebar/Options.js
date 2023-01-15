import { RiDashboardFill, RiMessage2Fill, RiSettings4Fill } from "react-icons/ri"

export const SidebarOption = [
    {
        link: 'dashboard/home',
        name: 'Dashboard',
        icon: 'fa-solid fa-bars'
    },
    {
        link: 'dashboard/home',
        name: 'Orders',
        icon: 'fa-solid fa-bars',
        children: [
            {
                link: '/sales/orders',
                name: 'Received',
            },
            {
                link: '/sales/orders',
                name: 'Pending',
            },
            {
                link: '/sales/orders',
                name: 'Completed',
            },
        ]
    },
    {
        link: 'dashboard/home',
        name: 'Notification',
        icon: 'fa-solid fa-bars'
    },
    {
        link: '',
        name: 'Items',
        icon: 'fa-solid fa-bars',
        children: [
            {
                link: '/items/listed-items',
                name: 'Listed',
            },
            {
                link: '/items/draft-item',
                name: 'Draft',
            },
            {
                link: '/items/scheduled-item',
                name: 'Scheduled',
            },
            {
                link: '/items/unsold-item',
                name: 'Unsold',
            },
        ]
    },
    {
        link: 'message',
        name: 'Message',
        icon: 'fa-solid fa-bars'
    },
    {
        link: 'email',
        name: 'Email',
        icon: 'fa-solid fa-bars'
    },
    {
        link: 'email',
        name: 'Sales',
        icon: 'fa-solid fa-bars'
    },
    {
        link: 'email',
        name: 'Tasks',
        icon: 'fa-solid fa-bars'
    },
    {
        link: 'email',
        name: 'Users',
        icon: 'fa-solid fa-bars'
    },
    {
        link: 'email',
        name: 'Account',
        icon: 'fa-solid fa-bars'
    },
]
