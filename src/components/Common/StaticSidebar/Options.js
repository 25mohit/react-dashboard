export const SidebarOption = [
    {
        link: '/dashboard/home',
        name: 'Dashboard',
        icon: 'fa-solid fa-bars'
    },
    {
        link: '/sales/orders',
        name: 'Orders',
        icon: 'fa-solid fa-cubes',
        nested: [
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
        link: '/notification',
        name: 'Notification',
        icon: 'fa-solid fa-bars'
    },
    {
        link: '/items/listed-item',
        name: 'Items',
        icon: 'fa-solid fa-bars',
        nested: [
            {
                link: '/items/listed-item',
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
        link: '/message',
        name: 'Message',
        icon: 'fa-solid fa-bars'
    },
    {
        link: '/email',
        name: 'Email',
        icon: 'fa-solid fa-bars'
    },
    {
        link: '/sales',
        name: 'Sales',
        icon: 'fa-solid fa-bars'
    },
    {
        link: '/tasks',
        name: 'Tasks',
        icon: 'fa-solid fa-bars'
    },
    {
        link: '/users',
        name: 'Users',
        icon: 'fa-solid fa-bars'
    },
    {
        link: '/account',
        name: 'Account',
        icon: 'fa-solid fa-bars'
    },
]
