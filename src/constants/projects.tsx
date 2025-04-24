import { Database, Code, Server, Rocket, ChartBar, Box } from 'lucide-react';
export const PROJECTS = [
  {
    id: 'enterprise-database',
    title: 'Enterprise Database Suite',
    description:
      'High-performance database management system with real-time analytics and automatic scaling.',
    icon: <Database className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: [
      'Automated backup',
      'Real-time monitoring',
      'Data encryption',
      '24/7 support',
    ],
    details: {
      overview:
        'Our Enterprise Database Suite is a comprehensive solution designed for businesses that require robust, scalable, and secure database management. Built with modern architecture and cutting-edge technology, it provides seamless data handling capabilities for enterprises of all sizes.',
      benefits: [
        'Improved data security and compliance',
        'Reduced operational costs',
        'Enhanced performance and scalability',
        'Simplified database management',
        'Automated maintenance and updates',
      ],
      specifications: [
        'Cloud-native architecture',
        'Multi-region deployment support',
        'Real-time backup and recovery',
        'Advanced encryption standards',
        'Comprehensive monitoring and alerts',
      ],
      media: {
        images: [
          '/photo-1488590528505-98d2b5aba04b.jpg',
          '/photo-1518770660439-4636190af475.jpg',
          '/photo-1461749280684-dccba630e2f6.jpg',
        ],
        video: 'https://example.com/database-demo.mp4',
      },
    },
  },
  {
    id: 'cloud-migration',
    title: 'Cloud Migration Tool',
    description:
      'Seamless data migration solution for enterprise-scale databases with zero downtime.',
    icon: <Server className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: [
      'Zero downtime migration',
      'Data integrity checks',
      'Rollback capabilities',
      'Progress tracking',
    ],
    details: {
      overview:
        'Our Cloud Migration Tool is designed to facilitate the seamless migration of enterprise-scale databases to the cloud with zero downtime. It ensures data integrity and provides rollback capabilities, making the migration process smooth and reliable.',
      benefits: [
        'Seamless cloud migration with zero downtime',
        'Ensured data integrity during migration',
        'Reduced risk with rollback capabilities',
        'Improved efficiency with progress tracking',
        'Cost-effective migration solution',
      ],
      specifications: [
        'Support for various cloud platforms',
        'Automated data validation',
        'Real-time monitoring',
        'Secure data transfer',
        'Scalable architecture',
      ],
    },
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    description:
      'Tailored software development services for your specific business needs.',
    icon: <Code className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: [
      'Web applications',
      'Mobile solutions',
      'API integration',
      'Legacy system modernization',
    ],
    details: {
      overview:
        'We offer custom software solutions tailored to meet your specific business needs. Our team of experienced developers can create web applications, mobile solutions, and integrate APIs to modernize your legacy systems.',
      benefits: [
        'Customized solutions to fit your unique needs',
        'Improved efficiency and productivity',
        'Modernized legacy systems',
        'Seamless API integration',
        'Scalable and reliable applications',
      ],
      specifications: [
        'Full-stack development',
        'Agile development methodologies',
        'Cross-platform compatibility',
        'Secure coding practices',
        'Ongoing maintenance and support',
      ],
    },
  },
  {
    id: 'analytics-platform',
    title: 'Analytics Platform',
    description:
      'Advanced analytics and reporting platform for data-driven decision making.',
    icon: <ChartBar className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: [
      'Real-time analytics',
      'Custom dashboards',
      'Predictive modeling',
      'Data visualization',
    ],
    details: {
      overview:
        'Our Analytics Platform provides advanced analytics and reporting capabilities to help you make data-driven decisions. With real-time analytics, custom dashboards, and predictive modeling, you can gain valuable insights into your business.',
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Customizable dashboards',
        'Predictive modeling capabilities',
        'Improved business performance',
      ],
      specifications: [
        'Data integration from multiple sources',
        'Advanced data visualization tools',
        'Machine learning algorithms',
        'Secure data storage',
        'Scalable infrastructure',
      ],
    },
  },
  {
    id: 'devops-automation',
    title: 'DevOps Automation',
    description:
      'Streamline your development and deployment processes with our automation tools.',
    icon: <Rocket className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: [
      'CI/CD pipelines',
      'Infrastructure as code',
      'Monitoring',
      'Auto-scaling',
    ],
    details: {
      overview:
        'Our DevOps Automation tools streamline your development and deployment processes, enabling you to deliver software faster and more reliably. With CI/CD pipelines, infrastructure as code, and auto-scaling, you can automate your entire DevOps lifecycle.',
      benefits: [
        'Faster software delivery',
        'Improved reliability',
        'Reduced manual effort',
        'Automated infrastructure management',
        'Scalable and resilient systems',
      ],
      specifications: [
        'Automated testing',
        'Continuous integration and continuous deployment',
        'Infrastructure as code',
        'Real-time monitoring',
        'Auto-scaling capabilities',
      ],
    },
  },
  {
    id: 'data-warehouse',
    title: 'Data Warehouse Solution',
    description:
      'Enterprise-grade data warehouse solution for comprehensive data management.',
    icon: <Box className='h-12 w-12 text-[#2C74B3] mb-4' />,
    features: [
      'Data integration',
      'ETL processes',
      'Business intelligence',
      'Data governance',
    ],
    details: {
      overview:
        'Our Data Warehouse Solution provides an enterprise-grade platform for comprehensive data management. With data integration, ETL processes, and business intelligence tools, you can consolidate and analyze your data to gain valuable insights.',
      benefits: [
        'Comprehensive data management',
        'Improved data quality',
        'Enhanced business intelligence',
        'Streamlined ETL processes',
        'Data governance and compliance',
      ],
      specifications: [
        'Support for various data sources',
        'Scalable data storage',
        'Advanced analytics tools',
        'Secure data access',
        'Data governance framework',
      ],
    },
  },
];
