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
        {
            // eBook SaaS Platform with Stripe, Video, and Playlist features
            images: [
                '/assets/projects/ebook.png',
                '/assets/projects/ebook2.png',
                '/assets/projects/ebook7.png',
                '/assets/projects/ebook4.png',
                '/assets/projects/ebook6.png',
                '/assets/projects/ebook6.png'
            ],
            label: 'Dotclick Featured Project',
            title: 'eBook SaaS Platform',
            description: 'A comprehensive eBook SaaS platform with integrated Stripe payment processing, video content management, and playlist features. Users can browse, purchase, and read eBooks with embedded video content, create personalized playlists, and manage subscriptions through secure Stripe integration. Features include real-time reading progress, video bookmarks, playlist sharing, and subscription management.',
            techs: [
                'Next.js',
                'Stripe',
                'Node.js',
                'Express.js',
                'PostgreSQL',
                'AWS S3',
                'TypeScript',
            ]
        },
        {
            // Medical Billing Quotes Platform
            images: [
                '/assets/projects/medical.png',
                '/assets/projects/medical2.png',
                '/assets/projects/medical3.png',
                '/assets/projects/medical4.png',
                '/assets/projects/medical5.png',
                '/assets/projects/medical6.png'
            ],
            label: 'Dotclick Featured Project',
            title: 'Medical Billing Quote',
            description: 'A comprehensive platform connecting healthcare practices with medical billing service providers. Medical practices can request quotes, compare multiple providers, and find the best billing solutions for their needs. Features include quote request forms, provider comparison tools, lead management system, practice profile management, and automated quote matching. The platform streamlines the process of finding reliable medical billing services while helping providers generate quality leads.',
            techs: [
                'React.js',
                'Node.js',
                'Express.js',
                'Firebase',
                'TypeScript',
                'Tailwind CSS',
            ]
        },
    ]
}

export default projects