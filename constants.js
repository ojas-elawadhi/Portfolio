export const METADATA = {
  author: "Ojas Elawadhi",
  title: "Portfolio | Ojas Elawadhi",
  description:
    "Ojas Elawadhi is a Frontend Developer from India, interested in crafting beautiful and functional applications.",
  siteUrl: "https://ojas-elawadhi.vercel.app/",
  twitterHandle: "@Ojas_elawadhi",
  keywords: [
    "Ojas Elawadhi",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dhjioxmiq/image/upload/v1701201348/preview_umu5ry.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:ojaselawadhi2000@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ojas-elawadhi/",
  },
  {
    name: "github",
    url: "https://github.com/ojas-elawadhi",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/ojas__elawadhi/",
  },
  {
    name: "twitter",
    url: "https://x.com/Ojas_elawadhi",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    // "sass",
    // "cpp",
    "java",
    // "python",
    // "nodejs",
    "webpack",
    "vite",
    "firebase",
    // "moralis",
    // "stripe",
    // "figma",
    // "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    // "antdesign",
    "chakra-ui",
  ],
  // databases: ["mysql", "mongodb"],
  // other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "NetflixGPT",
    image: "/projects/Netflix.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Netflix clone using React, Tailwind CSS, Firebase & GPT API 🍿",
    gradient: ["#F14658", "#DC2537"],
    url: "https://netflix-app-gpt.netlify.app/",
    tech: ["react", "tailwindcss", "firebase"],
  },
  {
    name: "PromptHub",
    image: "/projects/PromptHub.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Tool to discover, create and share AI prompts ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://prompt-hub-next.vercel.app/",
    tech: ["typescript", "nextjs", "tailwindcss"],
  },
  {
    name: "QR Code Generator",
    image: "/projects/QrGenerator.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Generates downloadable QR-code of any link 📷",
    gradient: ["#000066", "#6699FF"],
    url: "https://qrcodegeneratr.netlify.app/",
    tech: ["react", "html", "css"],
  },
  ,
];

export const WORK = [
  {
    id: 1,
    company: "Crypto Owl",
    location: "Remote",
    years: [
      {
        year: "2022",
        range: "July 2022 - Dec 2023",
        title: "Frontend Developer Intern",
        responsibilities: [
          "Created many responsive and reusable components.",
          "Implemented a feature-rich React Table component, enabling searching, sorting, and tooltips for enhanced functionality.",
          "Used Recharts library to make charts like line chart, bar chart, pie chart and area chart",
          "Integrated API’s in the Front-end and created custom hooks for fetching data using swr hook",
          "Tech Stack: React, TailwindCSS, Typescript",
        ],
      },
      {
        year: "2023",
        range: "Jul 2023 - Present",
        title: "Frontend Developer",
        responsibilities: [
          "Designed responsive, visually pleasing UI for optimal user experience and engagement",
          "Enhanced web app visuals with Recharts library for dynamic data representation.",
          "Optimized data flow using Redux-Toolkit for efficient state management",
          "Integrated APIs seamlessly for enhanced functionality and real-time data interaction",
          "Tech Stack: Next, Chakra UI, React, React-Native, TailwindCSS, Redux, Typescript",
        ],
      },
    ],

    url: "",
    video: "/work/dukaan.mp4",
  },
  {
    id: 2,
    company: "Coding Ninjas",
    location: "Remote",

    years: [
      {
        year: null,
        range: "Feb - June 2022",
        title: "Teaching Assistant (Competitive Programming)",

        responsibilities: [
          "Resolved 269 doubts of Students",
          "Average Rating- 4.62/5",
          "Solved doubts on Topics like Recursion, Backtracking, Dynamic Programming, Graphs etc.",
        ],
      },
    ],
    url: "https://www.codingninjas.com/",
    video: "/work/aviate.mp4",
  },
  {
    id: 3,
    company: "Real Dev Squad",
    location: "Remote",
    years: [
      {
        year: null,
        range: "Dec 2021 - July 2022",
        title: "Open Source Developer",

        responsibilities: [
          "Fixed and Enhanced UI and its functioning on Dashboard site using HTML,CSS, JavaScript",
          "Created a route to generate chaincode using Node.js.",
          "Created a firestore model for chaincode collection and returned document ID as chaincode in response",
        ],
      },
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
