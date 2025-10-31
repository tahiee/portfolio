const projects = {
    heading: `Things I've Worked on`,
    list: [
        {
            // You can use either 'image' (single) or 'images' (array) - images array will auto-slide
            images: [
                '/assets/projects/planflow-Home.png',
                '/assets/projects/planflow-Dashboard.png',
                '/assets/projects/planflow-login.png',
                '/assets/projects/planflow-schedule.png'
            ],
            label: 'Dotclick Featured Project',
            title: 'Planflo Web SaaS Platform',
            description: 'Planflo is a web-based SaaS platform that helps businesses manage their projects and tasks. It is a comprehensive solution for project management, task management, and collaboration.',
            techs: [
                'React Js',
                'Tailwind CSS',
                'Shadcn UI',
                'TypeScript',
                'PostgreSQL',
                'Express Js',
            ]
        },
        {
            // Single image (backward compatible - will not slide)
            image: '/assets/projects/flowlio.png',
            label: 'Dotclick Featured Project',
            title: 'CRM SaaS Platform',
            description: 'Flowlio is a CRM SaaS platform that helps businesses manage their customers and sales. It is a comprehensive solution for customer relationship management, sales management, and marketing automation.',
            techs: [
                'React Js',
                'Tailwind CSS',
                'Shadcn UI',
                'TypeScript',
                'PostgreSQL',
                'Express Js',
            ]
        },
    ]
}

export default projects