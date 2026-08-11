export const METADATA = {
  author: "Ojas Elawadhi",
  title: "Ojas Elawadhi | Software Developer",
  description:
    "Ojas Elawadhi is a software developer from India building fast, accessible web and mobile products with React, Next.js, React Native, and TypeScript.",
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
  image: "https://ojas-elawadhi.vercel.app/preview.png",
  imageAlt: "Ojas Elawadhi's software developer portfolio",
  language: "English",
  locale: "en_IN",
  socialProfiles: [
    "https://www.linkedin.com/in/ojas-elawadhi/",
    "https://github.com/ojas-elawadhi",
    "https://x.com/Ojas_elawadhi",
  ],
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
  "A pragmatic Software Developer",
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
    "python",
    // "nodejs",
    "webpack",
    "vite",
    "firebase",
    "railway",
    // "moralis",
    // "stripe",
    // "figma",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    // "antdesign",
    "chakra-ui",
    "tanstack-query",
    "react-native",
    "fastapi",
  ],
  databases: ["mysql", "postgresql"],
  // other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "Number Guess",
    image: "/projects/NumberGuess.webp",
    blurImage: "/projects/blur/NumberGuess-blur.webp",
    description:
      "Higher-lower number game with solo, AI, online and daily modes",
    gradient: ["#3730A3", "#7C3AED"],
    url: "https://play.google.com/store/apps/details?id=com.zenostudios.codewars",
    tech: ["react-native", "typescript", "nodejs", "postgresql"],
  },
  {
    name: "Mockify",
    image: "/projects/MockifyScreen.webp",
    blurImage: "/projects/blur/MockifyScreen-blur.webp",
    description: "AI Mock Interview with personalized feedback ",
    gradient: ["#006600", "#fff"],
    url: "https://mockify-beta.vercel.app/",
    tech: ["Nextjs", "tailwindcss", "Gemini"],
  },
  {
    name: "NetflixGPT",
    image: "/projects/Netflix.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Netflix clone using React, Tailwind CSS, Firebase & GPT API 🍿",
    gradient: ["#F14658", "#DC2537"],
    url: "https://netflis-gpt.netlify.app/",
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
  // {
  //   name: "QR Code Generator",
  //   image: "/projects/QrGenerator.webp",
  //   blurImage: "/projects/blur/airbnb-blur.webp",
  //   description: "Generates downloadable QR-code of any link 📷",
  //   gradient: ["#000066", "#6699FF"],
  //   url: "https://qrcodegeneratr.netlify.app/",
  //   tech: ["react", "html", "css"],
  // },
];

const WORK_EXPERIENCES = [
  {
    id: 1,
    company: "Owlbyte Solutions",
    location: "Remote",
    years: [
      {
        year: "Internship",
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
        year: "Full-Time",
        range: "Jul 2023 - Present",
        title: "Software Developer",
        responsibilities: [
          "Built web, mobile, and browser-extension products with Next.js, React, React Native, TypeScript, Chakra UI, Redux Toolkit, and TanStack Query.",
          "Built dashboards with analytics, search/filtering, pagination, watchlists, audience management, and campaign workflows.",
          "Added AI-powered search, personalization, content analysis, outreach automation, and real-time analytics.",
          "Integrated third-party APIs, wallet flows, multi-chain rewards, and real-time campaign and reporting pipelines.",
          "Built an auto-DM campaign system with edit, pause, cancel, re-run, and 7/30-day exclusions, serving thousands of accounts while reducing duplicate sends by ~30%.",
          "Centralized auth/gating in reusable typed API helpers across 8+ endpoints, reducing duplicate code and regressions with unit tests.",
        ],
      },
    ],

    url: "",
    video: "/work/dukaan.mp4",
  },
  {
    id: 2,
    hidden: true,
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
    hidden: true,
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
    url: "https://realdevsquad.com/",
    video: "/work/spacenos.mp4",
  },
];

export const WORK = WORK_EXPERIENCES.filter(({ hidden }) => !hidden);

export const GTAG = "G-5HCTL2TJ5W";
