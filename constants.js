export const METADATA = {
  author: "Ojas Elawadhi",
  title: "Portfolio | Ojas Elawadhi",
  description:
    "Ojas Elawadhi is a Frontend Developer from Kuwait, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubh731",
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
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
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
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
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
    description: "Generates downlaodable QR-code of any link",
    gradient: ["#000066", "#6699FF"],
    url: "https://qrcodegeneratr.netlify.app/",
    tech: ["react", "html", "css"],
  },
  // {
  //   name: "Tesla",
  //   image: "/projects/tesla.webp",
  //   blurImage: "/projects/blur/tesla-blur.webp",
  //   description: "A Tesla React Native App 🏎️",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://github.com/shubh73/tesla",
  //   tech: ["react"],
  // },
];

export const WORK = [
  {
    id: 1,
    company: "Crypto Owl",
    title: "Frontend Developer Intern",
    location: "Remote",
    range: "July-Jan 2023 • Aug-Oct 2023",
    responsibilities: [
      "Led creation of a captivating cross-platform e-commerce solution.",
      "Enhanced UX with gamification and personalized push notifications ensuring an ever-improving shopping journey.",
      "The app boasts a DAU base of 13k and an extensive MAU count of 170k.",
    ],
    url: "https://mydukaan.io/",
    video: "/work/dukaan.mp4",
  },
  {
    id: 2,
    company: "Coding Ninjas",
    title: "Teaching Assistant (Competitive Programming)",
    location: "Remote",
    range: "Feb - June 2022",
    responsibilities: [
      "Resolved 269 doubts of Students",
      "Average Rating- 4.62/5",
      "Solved doubts on Topics like Recursion, Backtracking, Dynamic Programming, Graphs etc.",
    ],
    url: "https://www.codingninjas.com/",
    video: "/work/aviate.mp4",
  },
  {
    id: 3,
    company: "Real Dev Squad",
    title: "Open Source Developer",
    location: "Remote",
    range: "Dec 2021 - July 2022",
    responsibilities: [
      "Fixed and Enhanced UI and its functioning on Dashboard site using HTML,CSS, JavaScript",
      "Created a route to generate chaincode using Node.js.",
      "Created a firestore model for chaincode collection and returned document ID as chaincode in response",
    ],
    url: "https://spacenos.com/",
    video: "/work/spacenos.mp4",
  },
];

export const GTAG = "G-5HCTL2TJ5W";
