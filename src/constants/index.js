import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  americanredcross,
  generalassembly,
  mcdonalds,
  ups,
  abm,
  eyeshop,
  quiztendouniverse,
  threejs,
  sql,
  jquery,
  express,
  bootstrap,
  aws,
  i18next,
  python,
  fuzzyfriends,
  jammytunes,
  spaceman,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Nodejs",
    icon: nodejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Jquery",
    icon: jquery,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Seasonal Support Driver",
    company_name: "United Parcel Service",
    icon: ups,
    iconBg: "#383E56",
    date: "November 2020 - December 2023",
    points: [
      "Streamlined delivery routes, resulting in a 15% increase in efficiency and reduced fuel costs.",
      "Successfully delivered an average of 100 packages per day, demonstrating strong organizational skills and attention to detail.",
      "Ensured timely and accurate deliveries, maintaining a 98% on-time delivery rate.",
    ],
  },
  {
    title: "Software Engineer Fellow",
    company_name: "General Assembly",
    icon: generalassembly,
    iconBg: "#E6DEDD",
    date: "August 2023 - October 2023",
    points: [
      "Completed an immersive 12-week program covering full-stack development, including computer science fundamentals, algorithms, and data structures.",
      "Created 4 front-end, back-end, and full-stack applications both independently and in teams, utilizing technologies like JavaScript, React, Node, Express, and MongoDB.",
    ],
  },
  {
    title: "Front End Web Developer Fellow",
    company_name: "General Assembly",
    icon: generalassembly,
    iconBg: "#383E56",
    date: "March 2023 - May 2023",
    points: [
      "Completed a 60-hour program focused on front-end web development.",
      "Developed 4 independent front-end applications using HTML, CSS, JavaScript, and React, honing skills in responsive design and user experience.",
    ],
  },
  {
    title: "Phlebotomy Technician",
    company_name: "American Red Cross",
    icon: americanredcross,
    iconBg: "#E6DEDD",
    date: "March 2023 - November 2022",
    points: [
      "Entered and managed donor data accurately, improving operational efficiency by 10%.",
      "Maintained a 99% success rate in venipuncture procedures, minimizing discomfort and increasing donor satisfaction.",
      "Safely collected blood donations from approximately 15 donors per day, enhancing donor retention through effective communication and care.",
      "Securely packaged and shipped units of blood, platelets, plasma, and red blood cells, ensuring compliance with safety and regulatory standards.",
    ],
  },
  {
    title: "Lead Crew Trainee",
    company_name: "McDonald's",
    icon: mcdonalds,
    iconBg: "#383E56",
    date: "March 2023 - November 2022",
    points: [
      "Managed daily operations in the absence of a manager, leading a team of 10+ employees and ensuring smooth workflow.",
      "Resolved customer conflicts promptly, improving customer satisfaction scores by 20%.",
      "Implemented new training procedures for incoming staff, reducing onboarding time by 30% and enhancing team performance.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Damaris proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
// ];

const projects = [
  {
    name: "Affordable Building Maintenance",
    description:
      "A bilingual (English/Spanish) business website featuring a detailed services page and a project gallery showcasing completed works. The fully responsive design enhances client engagement and accessibility across all devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "html5",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "blue-text-gradient",
      },
    ],
    image: abm,
    source_code_link: "https://github.com/damarisfregoso/a-b-m",
    web_code_link: "https://a-b-m-0b4e7891a98d.herokuapp.com/",
  },
  {
    name: "Eye Shop",
    description:
    "Web application that allows users to browse, add to cart, and purchase makeup items, featuring secure user authentication and responsive design for a seamless shopping experience across various devices.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "git",
        color: "blue-text-gradient",
      },
    ],
    image: eyeshop,
    source_code_link: "https://github.com/damarisfregoso/eye-shop",
    web_code_link: "https://eye-shop-2024-2da831664c2c.herokuapp.com/",
  },
  {
    name: "Quiztendo Universe",
    description:
      "A full-stack platform dedicated to Super Mario enthusiasts, enabling users to browse quizzes, take tests, view leaderboard scores, compare quiz results with others, and track their performance percentages across Super Mario-themed quizzes. Implemented with secure user authentication and a robust database backend to ensure data privacy and seamless quiz management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
      {
        name: "git",
        color: "blue-text-gradient",
      },
    ],
    image: quiztendouniverse,
    source_code_link: "https://github.com/damarisfregoso/quiztendo-universe",
    web_code_link: "https://quiztendo-universe-c2211e0eb2f6.herokuapp.com/",
  },
  {
    name: "FuzzyFriends",
    description:
      "A web platform designed for pet enthusiasts, where logged-in users can share photos of their beloved animals and interact through features like commenting and liking. The platform is built to foster an engaging community for pet lovers to connect and celebrate their furry friends.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "yellow-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "git",
        color: "yellow-text-gradient",
      },
    ],
    image: fuzzyfriends,
    source_code_link: "https://github.com/damarisfregoso/fuzzyfriends",
    web_code_link: "https://fuzzyfriends-c9868e79d3bf.herokuapp.com/",
  },
  {
    name: "Jammy Tunes",
    description:
      "A user-focused web application that empowers registered users to curate and manage personalized playlists by embedding links. Designed for a seamless experience, it allows music lovers to easily organize and share their favorite tracks.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",
      },
      {
        name: "git",
        color: "blue-text-gradient",
      },
    ],
    image: jammytunes,
    source_code_link: "https://github.com/damarisfregoso/jammy-tunes",
    web_code_link: "https://jammy-tunes-03284b6c64bc.herokuapp.com/",
  },
  {
    name: "Spaceman",
    description:
      "A web-based game that challenges players to decipher a hidden word within a limited number of attempts. Users must use their word-guessing skills and strategy to reveal the mystery word before running out of guesses.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "git",
        color: "green-text-gradient",
      },
    ],
    image: spaceman,
    source_code_link: "https://github.com/damarisfregoso/spaceman",
    web_code_link: "https://damarisfregoso.github.io/spaceman/",
  },
];

export { navLinks, services, technologies, experiences, projects };