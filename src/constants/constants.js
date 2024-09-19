import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  inkSync,
  tracker,
  threejs,
  nextjs,
  express,
  java,
  jwt,
  mysql,
  php,
  nextauth,
  socialSphere,
  rvnjewels,
  craftedbykimaya,
  dynamiclabz,
  zetcon,
  touchnshine,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Programmer",
    icon: backend,
  },
  // {
  //   title: "Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
    position: [0, 0, 0],
  },
  {
    name: "Next JS",
    icon: nextjs,
    position: [2, 0, 0],
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JWT",
    icon: jwt,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  // {
  //   name: "NextAuth",
  //   icon: nextauth,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const projects = [
  {
    name: "RVN Jewels",
    description: "A E-Commerce Web Application Made Using Wordpress",
    features: [
      "Users can shop products online easily & convinently",
      "Users can make payment easily & Convinently",
    ],
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MY SQL",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "red-text-gradient",
      },
    ],
    image: rvnjewels,
    source_code_link: "https://rvnjewels.com/",
    live_link: "https://rvnjewels.com/",
  },
  {
    name: "Crafted By Kimayaa",
    description: "A E-Commerce Web Application Made Using Wordpress",
    features: [
      "User Can Purchase Products",
      "User Can Create Accounts",
      "User Can Make Payments",
    ],
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "My SQL",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "red-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
    ],
    image: craftedbykimaya,
    source_code_link: "https://github.com/himanshu8443/hayasaka",
    live_link: "https://craftedbykimaya.in/",
  },
  {
    name: "Dynamic Labz",
    description: "Developed an software company business website  with CMS.",
    features: [
      "Implemented Email verification and using OTP user authentication and login/signup functionality using JWT for secure access to the platform.",
      "Students can browse and purchase courses. Instructors can create new courses, edit existing courses, and delete courses they have created.",
      "Integrated MongoDB database to store user information, course data, and progress tracking.",
      "Employed RESTful API principles for seamless communication between the frontend and backend systems.",
      "Razorpay payment integration.",
      "PWA (Progressive Web App) support.",
    ],
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "My SQL",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "red-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
    ],
    image: dynamiclabz,
    source_code_link: "https://dynamiclabz.com/",
    live_link: "https://dynamiclabz.com/",
  },
  {
    name: "Zetcon Technologies",
    description: "A Web Application for a ISO Services",
    features: [
      "Users can add products to the watchlist by clicking on the extension icon on the product page.",
      "Users can set a price alert by entering the desired price for the product.",
    ],
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "My SQL",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "red-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
    ],
    image: zetcon,
    source_code_link: "https://www.zetcontechnologies.com/",
    live_link: "https://www.zetcontechnologies.com/",
  },
  {
    name: "Touch N Shine Makeup",
    description: "A Cosmetic E-Commerce Web Application Made Using Wordpress",
    features: [
      "Users Can Purchase Makeup Online From The Website",
      "Shop Owner Can Add / Upload / Delete Products",
    ],
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "My SQL",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "red-text-gradient",
      },
      {
        name: "CSS",
        color: "yellow-text-gradient",
      },
    ],
    image: touchnshine,
    source_code_link: "https://touchnshine.com/?v=ea8a1a99f6c9",
    live_link: "https://touchnshine.com/?v=ea8a1a99f6c9",
  },
];

// const experiences = [
//   {
//     title: "React.js Developer",
//     company_name: "Starbucks",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "March 2020 - April 2021",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "React Native Developer",
//     company_name: "Tesla",
//     icon: tesla,
//     iconBg: "#E6DEDD",
//     date: "Jan 2021 - Feb 2022",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using React.js and other related technologies.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
// ];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

export {
  services,
  technologies,
  //  experiences,
  //  testimonials,
  projects,
};
