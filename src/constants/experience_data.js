import Ignite from "../assets/Ignite.png";
import Relectric from "../assets/relectricWhite.png";
import TFG from "../assets/TFG.png";
import FF from "../assets/FF.png";
import TS from "../assets/TS.png";
import Semgrep from "../assets/Semgrep.png";
import Tesla from "../assets/Tesla.png";
import TikTok from "../assets/TikTok.png";

const content = [
  {
    name: "Schulich Ignite",
    role: "VP Content Development",
    date: "September 2020 - May 2022",
    description:
      "Executive member of a U of C club focused on <b>igniting a passion for programming</b> in high school students. In addition to <b>mentoring 2-4 students</b> through 8-week sessions, I held an executive position as the VP of Content Development. In this role, I <b>oversaw a 15-person team</b> including 5 commissioners and 4 sub-teams and coordinated the development of <b>Python</b> lecture content and exercises for <b>400+ high school students</b> as well as <b>tools and tech</b> used by <b>100+ club members</b>.",
    logo: Ignite,
  },
  {
    name: "Relectric",
    role: "Software Engineering Team Member",
    date: "October 2020 - January 2022",
    description:
      "Part of the University of Calgary Relectric club, where we aim to make <b>electric vehicles</b> more <b>accessible</b> to the general population by <b>converting old vehicles into electric vehicles</b>. I was specifically part of the software team where I worked on emulating <b>CANBUS</b> frames, parsing data using <b>Python</b> and transmitting it via <b>ZeroMQ</b>, testing <b>optimizations</b> using a <b>Raspberry Pi</b>, and implementing <b>Sphinx</b> documentation.",
    logo: Relectric,
  },
  {
    name: "Tech For Good Inc.",
    role: "Software Engineer Intern",
    date: "July 2021 - August 2021",
    description:
      "Volunteered with the <b>non-profit</b> Tech For Good Inc. as a software engineering intern. Worked on <b>Mission UpLink</b>, a project that provides <b>cache-based internet access</b> to parts of <b>rural Africa</b>, with a focus on increasing access to <b>educational content</b>. Worked on a <b>Python</b> script for collecting device diagnostics and transmitting them to <b>AWS IoT Core</b> using <b>MQTT</b>. Also worked on containerization of Node.js server using <b>Docker</b>.",
    logo: TFG,
  },
  {
    name: "Tech Start",
    role: "Software Developer",
    date: "October 2022 - May 2023",
    description:
      "Part of team AiRM and worked on building an <b>AI robotic arm</b> using <b>reinforcement learnig</b>. Developed a <b>Python</b> module utilizing the Kortex API to control a Kinova Gen 3 robotic arm in the moving and sorting of objects using input from a reinforcement learning algorithm. Designed and deployed a <b>Flask</b> backend on <b>Google Cloud Run</b> to host a reinforcement learning model and return actions based on the current environment. Presented key technical specifications of the project to a panel of 50+ students and 5 industry judges.",
    logo: TS,
  },
  {
    name: "FansFirst Tickets",
    role: "Lead Software Engineer",
    date: "January 2022 - June 2023",
    description:
      "Led the software development at a local <b>startup</b>, FansFirst Tickets, where I <b>managed a team of 3 developers</b> in the development of new features for <b>25k+ users</b>. Heavily involved in all stages and parts of development, including implementing a user friendly <b>React</b> frontend, building our serverless backend using <b>AWS Lambda</b> functions written in <b>Python</b>, and utilizing <b>AWS Cloudformation</b> and <b>GitHub Actions</b> for <b>CI/CD</b>.",
    logo: FF,
  },
  {
    name: "Semgrep",
    role: "Software Engineering Intern",
    date: "June 2023 - August 2023",
    description:
      "Software Engineering Intern at Semgrep in San Francisco, building security tools used by Snowflake, GitLab, Slack, Dropbox, and more. Built an <b>in-app notifications</b> system to allow all services across the app to share notifications with users. Increased new project scans for existing users by <b>streamlining the new project addition process</b> and unified the UI across the site by <b>standardizing the styling of key product pages</b>.",
    logo: Semgrep,
  },
  {
    name: "Tesla",
    role: "Software Engineering Intern",
    date: "September 2023 - December 2023",
    description:
      "Built a tool to <b>display critical Gigafactory layout flaws</b> to enable early-stage resolution, and <b>visualize the flow of material</b> across Gigafactories in order to detect congestion. <b>Implemented codegen</b> to automate frontend type generation and ensure <b>end-to-end type safety</b>. Spearheaded a <b>site-wide UI refactoring</b> by consolidating 5 tools into a single page, eliminating loading when navigating between tools.",
    logo: Tesla,
  },
  {
    name: "TikTok",
    role: "Software Engineering Intern",
    date: "January 2024 - July 2024",
    description:
      "Interning on the Trust and Safety team and working on backend systems using <b>Go</b>, <b>SQL</b>, <b>RPC</b>, and <b>event driven design</b> to protect TikTok users. Implemented Family Pairing in new TikTok Notes app, ensuring <b>minor safety</b> for <b>70k</b> users on app launch. Building a new platform ensuring safety of high profile accounts. <b>Expanded TikTok report functionality</b> by implementing 2 new Report Inbox statuses affecting <b>80k/day</b> related reports and adding support for reporting live typing GIF recommendations.",
    logo: TikTok,
  },
];

export default content;
