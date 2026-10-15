// ============================================================
// PORTFOLIO CONTENT
// Real portfolio data for Ravjani Hasanain Raza
// ============================================================

export const profile = {
  firstName: "Hasanain",
  lastName: "Raza",

  greeting: "Assalamu Alaikum, I'm",

  roles: [
    "Full-Stack Developer",
    "ASP.NET Core Developer",
    "React.js Developer",
    "Node.js Developer",
  ],

  intro:
    "Full Stack Developer specializing in C#, ASP.NET Core, React.js and Node.js. I build responsive web applications, RESTful APIs and business-focused software using modern frontend and backend technologies.",

  location: "India",

  availability: "Open for Opportunities",

  email: "ravjanihasanain@gmail.com",

  photo: "/Profile.png",

  resume: "/resume.pdf",

  // Based on the 4 projects listed in the resume.
  projectsCompleted: "4",

  about: [
    "Building Web Solutions That Make Business Simpler",

    "I'm Hasanain Raza, a Full-Stack Developer specializing in C#, ASP.NET Core, React.js and Node.js. I build modern web applications that help businesses manage their operations, streamline workflows and deliver better digital experiences.",

    "My work combines frontend development, backend engineering and database design to create practical solutions — from responsive business websites and custom web applications to billing, inventory and booking systems.",

    "One of my key projects is **Bill Master**, an ERP billing and inventory management system developed for Abson Energy Pvt Ltd. I've also worked on a car rental booking platform and an e-commerce website, applying my skills to real-world application requirements.",

    "I focus on writing maintainable code, building responsive interfaces and connecting applications with reliable backend services. Whether you need a business website, a custom web application or API integration, I'm interested in understanding the problem first and building a solution around it.",

    "**Have a project in mind? Let's discuss how I can help."
  ],

  facts: [
    {
      label: "Based in",
      value: "Ankleshwar, Gujarat",
    },
    {
      label: "Specialization",
      value: "Full-Stack Development",
    },
    {
      label: "Primary Stack",
      value: "ASP.NET Core + React.js",
    },
    {
      label: "Education",
      value: "BCA · 2023–2026",
    },
  ],
};


// ============================================================
// NAVIGATION
// ============================================================

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  // { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];


// ============================================================
// SOCIAL LINKS
// ============================================================

export const socials = [
  {
    key: "github",
    label: "GitHub",
    href: "https://github.com/ravjanihasanain-raza",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/ravjani-hasanain-raza",
  },
];


// ============================================================
// TECHNOLOGIES
// Used by TechStrip.jsx
// ============================================================

export const technologies = [
  {
    key: "csharp",
    label: "C#",
  },
  {
    key: "aspnet",
    label: "ASP.NET Core",
  },
  {
    key: "react",
    label: "React.js",
  },
  {
    key: "javascript",
    label: "JavaScript",
  },
  {
    key: "node",
    label: "Node.js",
  },
  {
    key: "express",
    label: "Express.js",
  },
  {
    key: "sqlserver",
    label: "SQL Server",
  },
  {
    key: "mysql",
    label: "MySQL",
  },
  {
    key: "mongodb",
    label: "MongoDB",
  },
  {
    key: "firebase",
    label: "Firebase",
  },
  {
    key: "git",
    label: "Git",
  },
];


// ============================================================
// SERVICES
// SEO-focused but written naturally.
// ============================================================

export const services = [
  {
    icon: "monitor",
    title: "Business Websites",
    description:
      "Professional, responsive websites for businesses to showcase their services, build customer trust, strengthen their online presence, and generate enquiries.",
    image: "/public/business-websites.jpeg",
  },
  {
    icon: "database",
    title: "Billing & Inventory Software",
    description:
      "Custom billing and inventory software to manage invoices, purchases, stock levels, sales and payment records in one place, helping businesses streamline daily operations and maintain accurate records.",
    image: "/public/billing-inventory.png",
  },
  {
    icon: "code",
    title: "E-commerce Development",
    description:
      "Custom e-commerce websites that showcase your products, simplify online shopping, manage orders and streamline product inventory, helping businesses reach more customers and grow their online sales.",
    image: "/public/ecommerce.png",
  },
  {
    icon: "calendar",
    title: "Booking Platforms",
    description:
      "Custom booking platforms that let customers check availability, select dates and time slots, make reservations, and manage bookings with ease, helping businesses simplify scheduling and deliver a smoother customer experience.",
    image: "/public/booking-platforms.png",
  },
  {
    icon: "layers",
    title: "Custom Web Applications",
    description:
      "Tailor-made web applications designed around your business requirements, featuring custom dashboards, automated workflows and centralized data management to improve operational efficiency and simplify everyday tasks.",
    image: "/public/custom-web-apps.png",
  },
  {
    icon: "server",
    title: "API & Backend Development",
    description:
      "Backend solutions with REST API development, database integration, secure authentication and efficient data handling, enabling seamless communication between frontend applications, servers and databases.",
    image: "/public/api-backend.png",
  },
];


// ============================================================
// PROJECTS
// ============================================================

export const projects = [
  {
    id: "bill-master",
  
 image: "/public/bill-master.png",
  title: "Bill Master ERP",
  slug: "bill-master-erp",
  category: "Business Software",
  description:
    "Professional, responsive websites for businesses to showcase their services, build customer trust, strengthen their online presence, and generate enquiries",

  overview:
    "A business management system for handling invoices, products, purchases, stock and payment records.",

  problem:
    "Managing billing, stock and purchase records separately can make daily business operations difficult.",

  solution:
    "A centralized system that organizes billing, inventory and purchase management in one place.",

  features: [
    "Admin authentication",
    "Dashboard and sales summaries",
    "Product and category management",
    "Invoice management",
    "Purchase and payment tracking",
    "Inventory management",
  ],

  techStack: {
    frontend: ["React", "JavaScript", "CSS"],
    backend: ["ASP.NET Core Web API", "C#"],
    database: ["SQL Server", "Entity Framework Core"],
    tools: ["Git", "Postman"],
  },

  thumbnail: "/public/bill-master.png",
tags: [
      "React.js",
      "C#",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
    ],
  screenshots: [
    {
      title: "Dashboard",
      image: "/public/bill-master.png",
    },
    {
      title: "Invoice Management",
      image: "/public/bill-master.png",
    },
    {
      title: "Inventory Management",
      image: "/public/bill-master.png",
    },
  ],

  challenges: [
    "Managing related billing and inventory records",
    "Integrating frontend pages with backend APIs",
  ],

  // liveUrl: "",
  // githubUrl:
  //   "https://github.com/ravjanihasanain-raza/Bill-Master",


  },

  {
    id: "car-rental",
    title: "Car Rental Booking Platform",
    slug: "car-rental-booking-platform",
    category: "Full-Stack Web Application",

    description:
      "Full-stack car rental platform with separate user and admin modules, authentication, date and time slot selection, booking management, booking history and Firebase Firestore synchronization.",

    image: "/car-rental.png",
    thumbnail: "/car-rental.png",

    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Firebase Firestore",
      "JavaScript",
    ],

    overview:
      "A full-stack car rental booking platform designed to let users explore the booking experience while providing a separate administrative area for managing rental operations.",

    problem:
      "Car rental bookings require a structured way to handle user access, date and time selection, booking records and administrative management.",

    solution:
      "A web application combining a React frontend, Node.js and Express.js backend, and Firebase Firestore synchronization to support booking-related workflows.",

    features: [
      "Separate user and admin modules",
      "User authentication",
      "Date and time slot selection",
      "Booking management",
      "Booking history",
      "Firebase Firestore synchronization",
    ],

    techStack: {
      frontend: ["React.js", "JavaScript"],
      backend: ["Node.js", "Express.js"],
      database: ["Firebase Firestore"],
    },

    screenshots: [
      {
        title: "Car Rental Platform",
        image: "/car-rental.png",
      },
    ],

    challenges: [
      "Connecting frontend booking workflows with backend functionality",
      "Managing booking dates and time slot selection",
      "Synchronizing application data with Firebase Firestore",
    ],

    liveUrl: "",
    githubUrl: "",
  },

 {
    id: "mans-look",
    title: "Man's Look – E-Commerce Website",
    slug: "mans-look-e-commerce-website",
    category: "E-Commerce Web Application",

    description:
      "Responsive PHP and MySQL e-commerce website featuring product listings, user authentication, shopping cart functionality and an admin panel for product management.",

    image: "/mans-look.png",
    thumbnail: "/mans-look.png",

    tags: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],

    overview:
      "Man's Look is a men's fashion e-commerce website built with PHP and MySQL. It provides product browsing and shopping cart functionality, with an administrative panel for managing products.",

    problem:
      "An online fashion store needs a convenient way to display products, support customer access and shopping cart workflows, and maintain product listings.",

    solution:
      "A responsive e-commerce website that combines product listings, user authentication, cart functionality and product management in an admin panel.",

    features: [
      "Product listings",
      "User authentication",
      "Shopping cart functionality",
      "Admin panel",
      "Product management",
      "Responsive interface",
      "PHP and MySQL integration",
    ],

    techStack: {
      frontend: ["HTML5", "CSS3", "Bootstrap"],
      backend: ["PHP"],
      database: ["MySQL"],
    },

    screenshots: [
      {
        title: "Man's Look Store",
        image: "/mans-look.png",
      },
    ],

    challenges: [
      "Connecting PHP functionality with MySQL data",
      "Managing product listings and shopping cart workflows",
      "Building a responsive storefront and administrative interface",
    ],

    liveUrl: "",
    githubUrl: "",
  },

  // {
  //   id: "bigmart-analysis",

  //   title: "BigMart Sales Analysis",

  //   description:
  //     "Retail sales data analysis project using Python to explore product and outlet performance, identify patterns and visualize insights through exploratory data analysis.",

  //   tags: [
  //     "Python",
  //     "Pandas",
  //     "NumPy",
  //     "Matplotlib",
  //     "Seaborn",
  //   ],

  //   image: "/projects/bigmart-analysis.png",

  //   liveUrl: "",
  //   githubUrl: "",
  // },
];


// ============================================================
// EXPERIENCE
// ============================================================

export const experience = [
  {
    id: "nightfox-technologies",

    period: "Dec 2025 – Apr 2026",

    role: "Full Stack Development Intern",

    company: "Nightfox Technologies",

    points: [
      "Developed RESTful APIs using C# and ASP.NET Core Web API with Entity Framework Core and SQL Server.",

      "Worked on database design, relational data management and CRUD operations.",

      "Implemented API routing, database relationships and structured exception handling.",

      "Implemented JWT authentication, authorization and request validation.",

      "Applied Repository Pattern and Service Layer Architecture for organized backend development.",

      "Tested API endpoints using Postman and contributed to frontend integration using Visual Studio and Git.",
    ],
  },
];


// ============================================================
// CERTIFICATES
// No certificates are listed in the provided resume.
// Keep this empty instead of adding fake certificates.
// ============================================================

export const certificates = [];