import Github from '../assets/githubWhite.png'
import Website from '../assets/websiteWhite.png'
import YouTube from '../assets/youtubeWhite.png'
import DevPost from '../assets/devpostWhite.png'

const content = [
    {
        name: "RingRoad",
        description: "Developed an <b>endless arcade mobile game</b>, RingRoad, for <i>iOS</i> and <i>Android</i> using <b>C#</b> and the <b>Unity Game Engine</b>. Designed 3D levels and game assets using <b>Blender</b>. Implemented daily rewards, Unity In-App Purchases, and Unity Ads. Currently available only on the Google Play Store.",
        links: [
            {
                url: "https://play.google.com/store/apps/details?id=com.DJGames.RingTheRoad",
                icon: Website
            },
            {
                url: "https://youtu.be/lH9U9Jh0O8g",
                icon: YouTube
            }
        ]
    },
    {
        name: "MyChef",
        description: "Designed and developed a web-app connecting students with local home cooks in order to provide a <b>healthier alternative to current take-out and food delivery options</b>. Designed site with <b>Figma</b>, and implemented using <b>React</b> and a <b>Firebase</b> backend. Built in a group of 5 during a 24 hour hackathon with 500+ participants and received the <b>Most Innovative Idea Award</b>.",
        links: [
            {
                url: "https://github.com/dimitar-j/Calgary_Hacks_2022",
                icon: Github
            },
            {
                url: "https://devpost.com/software/mychef-yo1d4j",
                icon: DevPost
            }
        ]
    },
    {
        name: "DuoChef",
        description: "Designed and developed a <b>gamified way to learn cooking</b> with curated recipes, daily streaks, and a social feed and leaderboard. Utilizes computer vision and machine learning to award points based on successful completion of recipe. Built with <b>React/Firebase</b> in 24 hours with a group of 4 as part of Hack Your Learning 2022. Received <b>1st place</b> amongst 60+ participants.",
        links: [
            {
                url: "https://github.com/dimitar-j/Hack-Your-Learning-2022",
                icon: Github
            },
            {
                url: "https://devpost.com/software/duochef",
                icon: DevPost
            }
        ]
    },
    {
        name: "Food Bank System",
        description: "In a group of 4 developed a <b>Java</b> app using <b>SQL</b> and <b>SwingUI</b> to allow a food bank to create optimized food hampers based on current food available and needs of families in the order. Created a <b>UML diagram</b> during design stage and implemented <b>unit tests</b> using <b>Junit</b>.",
        links: [
            {
                url: "https://github.com/dimitar-j/ENSF409-Project",
                icon: Github
            },
        ]
    },
    {
        name: "Weather Analyzer",
        description: "Weather analyzer written in <b>Python</b>. Utilizes <b>NumPy</b> to analyze Calgary weather data over 20 years from a CSV file. Visualizes data to provide user a visual summary of data anlysis using <b>Pyplot</b>.",
        links: [
            {
                url: "https://github.com/dimitar-j/Weather-Analyzer",
                icon: Github
            },
        ]
    },
    {
        name: "Personal Site",
        description: "Designed personal site showcasing my background and experience using <b>Figma</b>. Implemented using <b>React</b> and <b>MaterialUI</b>, and built a serverless <b>AWS Lambda API</b> to allow users to contact me by sendeing me an email directly from the site.",
        links: [
            {
                url: "https://www.google.com",
                icon: Website
            },
            {
                url: "https://github.com/dimitar-j/personal-site",
                icon: Github
            },
        ]
    },
    {
        name: "AI Tic-Tac-Toe",
        description: "Built an AI written in <b>Python</b> which utilizes the Minimax algorithm to play TicTacToe intelligently against the user.",
        links: [
            {
                url: "https://github.com/dimitar-j/ai-tictactoe",
                icon: Github
            },
        ]
    },
]

export default content;
