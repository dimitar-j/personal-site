import Github from "../assets/githubWhite.png";
import Website from "../assets/websiteWhite.png";
import YouTube from "../assets/youtubeWhite.png";
import DevPost from "../assets/devpostWhite.png";

const content = [
  {
    name: "RingRoad",
    description:
      "Developed an <b>endless arcade mobile game</b>, RingRoad, for iOS and Android using <b>C#</b> and the <b>Unity Game Engine</b>. Designed 3D levels and game assets using <b>Blender</b>. Implemented daily rewards, Unity In-App Purchases, and Unity Ads. Currently available only on the Google Play Store.",
    links: [
      {
        url: "https://youtu.be/lH9U9Jh0O8g",
        icon: YouTube,
      },
    ],
  },
  {
    name: "MyChef",
    description:
      "Designed and developed a web-app connecting students with local home cooks in order to provide a <b>healthier alternative to current take-out and food delivery options</b>. Designed site with <b>Figma</b>, and implemented using <b>React</b> and a <b>Firebase</b> backend.",
    links: [
      {
        url: "https://github.com/dimitar-j/Calgary_Hacks_2022",
        icon: Github,
      },
      {
        url: "https://devpost.com/software/mychef-yo1d4j",
        icon: DevPost,
      },
    ],
  },
  {
    name: "DuoChef",
    description:
      "Designed and developed a <b>gamified way to learn cooking</b> with curated recipes, daily streaks, and a social feed and leaderboard. Utilizes computer vision and machine learning to award points based on successful completion of recipe. Built using <b>React</b> and <b>Firebase</b>.",
    links: [
      {
        url: "https://github.com/dimitar-j/Hack-Your-Learning-2022",
        icon: Github,
      },
      {
        url: "https://devpost.com/software/duochef",
        icon: DevPost,
      },
    ],
  },
  {
    name: "Personal Site",
    description:
      "Designed personal site showcasing my background and experience using <b>Figma</b>. Implemented using <b>React</b> and <b>MaterialUI</b>, and built a serverless <b>AWS Lambda API</b> to allow users to contact me by sendeing me an email directly from the site.",
    links: [
      {
        url: "https://dimitarjanevski.me/",
        icon: Website,
      },
      {
        url: "https://github.com/dimitar-j/personal-site",
        icon: Github,
      },
    ],
  },
  {
    name: "AI Tic-Tac-Toe",
    description:
      "Built an AI written in <b>Python</b> which utilizes the Minimax algorithm to play TicTacToe intelligently against the user.",
    links: [
      {
        url: "https://github.com/dimitar-j/ai-tictactoe",
        icon: Github,
      },
    ],
  },
  {
    name: "Equa",
    description:
      "Designed and developed Equa, a chrome extension and web app which <b>incentivizes users to donate</b> to causes they are passionate about and <b>make charitable donations accessible and easy for everyone</b>. Personally designed extension and web app using <b>Figma</b>, built the chrome extension using <b>Plasmo</b>, and assisted in building <b>React</b> web app.",
    links: [
      {
        url: "https://github.com/brian-ngyn/Hack-The-Change-2022",
        icon: Github,
      },
      {
        url: "https://devpost.com/software/equa",
        icon: DevPost,
      },
    ],
  },
  {
    name: "UpSkill",
    description:
      "Designed and developed a <b>React</b> web app powered by a serverless <b>AWS Lambda</b> backend for university students to <b>teach, share, and learn new skills</b> and hobbies with the help of their peers. Includes a recommended instructors algorithm and live in-app messaging utilizing natural language processing to block vulgar messages.",
    links: [
      {
        url: "https://github.com/dimitar-j/Calgary-Hacks2023",
        icon: Github,
      },
      {
        url: "https://devpost.com/software/upskill-ue310a",
        icon: DevPost,
      },
    ],
  },
  {
    name: "Sketch Royale",
    description:
      "Designed and developed a distributed web-based <b>multiplayer</b> drawing game using <b>React</b>, <b>TypeScript</b>, <b>Tailwind</b> and a <b>Node.js</b> backend. Utilzied <b>WebSockets</b> to implement a live in-game chat and drawing board. Implemented <b>fault tolerance</b> using passive replication of the backend servers with client-side failover.",
    links: [
      {
        url: "https://github.com/dimitar-j/SketchRoyale",
        icon: Github,
      },
    ],
  },
  {
    name: "Meni",
    description:
      "<b>Simplifies menu creation</b> for restaurants by offering an intuitive platform to <b>design and edit digital menus</b>. Restaurants can generate a QR code to place on tables, allowing diners to quickly access their menu with photos and dietary tags, hence <b>enhancing the dining experience</b>. Built using <b>React</b> and <b>TypeScript</b>, and utilizes a <b>microservice</b> backend hosted on <b>GCP</b>.",
    links: [
      {
        url: "https://dashboard.meniapp.ca/",
        icon: Website,
      },
      // {
      //   url: "https://meniapp.ca/",
      //   icon: Website,
      // },
    ],
  },
];

export default content;
