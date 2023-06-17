// ---- data for portfolio component ----

// screenshot image imports
import ssChopShopTko from '../assets/images/ssProj03.jpg';
import ssGambMani from '../assets/images/ssProj01.jpg';
import ssTeamProGen from '../assets/images/ssTeamProfileGen.jpg';
import ssWeatherDash from '../assets/images/ssWeatherApp.jpg';
import ssQuiz from '../assets/images/ssQuiz.jpg';
import ssPlanner from '../assets/images/ssPlanner.jpg'; // might switch/add a demo video proj for this (readmeGen/socialNetwork) - but deployed would have to change to video link

// array of objects to be mapped over in portfolio.  Can add more projs just follow format
const projects = [
    {
        id: 1, title: 'Chop Shop TKO',
        screenshot: ssChopShopTko, alt: 'screenshot of Chop Shop TKO App',
        repoLink: 'https://github.com/gamesharks/chop-shop-tko',
        deployedLink: 'https://chop-shop-tko.herokuapp.com/',
        desc: '(Team Collaboration) - A project that showcases upcoming MMA fights, odds, and stats for fake wagers with friends.  Employs both front and backend technologies.'
    },
    {
        id: 2, title: 'Weather Dashboard',
        screenshot: ssWeatherDash, alt: 'screenshot of Weather Dashboard App',
        repoLink: 'https://github.com/Stickkman/weatherDashboard06',
        deployedLink: 'https://stickkman.github.io/weatherDashboard06/',
        desc: 'Search for any city and this application returns both the current weather conditions as well as the 5 day forecast.  Useful for travel planning!'
    },
    {
        id: 3, title: 'Gambling Manifesto',
        screenshot: ssGambMani, alt: 'screenshot of Gambling Manifesto App',
        repoLink: 'https://github.com/Stickkman/gamblingManifesto-Proj01',
        deployedLink: 'https://stickkman.github.io/gamblingManifesto-Proj01/',
        desc: '(Team Collaboration) - This app provides access to football odds, weather, team stats, and tips for beginners. Balance work and play, enjoy the best of both worlds!'
    },
    {
        id: 4, title: 'Team Profile Gen',
        screenshot: ssTeamProGen, alt: 'screenshot of Team Profile Generator App',
        repoLink: 'https://github.com/Stickkman/teamProfileGenerator10',
        deployedLink: 'https://drive.google.com/file/d/1Ln3YO1_nviYoa8mp5oKaUWbExuKC3d6Z/view', // video demo link in place of deployed, because it wasn't
        desc: 'A time saving app to quickly generate an html file containing relevant employee info such as phone, email, managers, etc.  Includes a video demostration!'
    },
    {
        id: 5, title: 'Timed Coding Quiz',
        screenshot: ssQuiz, alt: 'screenshot of Timed Coding Quiz App',
        repoLink: 'https://github.com/Stickkman/timedAssessmentQuiz04',
        deployedLink: 'https://stickkman.github.io/timedAssessmentQuiz04/',
        desc: 'This basic coding quiz app improves knowledge with timed multiple-choice questions. Track progress, practice for interviews, and measure retention.'
    },
    {
        id: 6, title: 'Daily Planner',
        screenshot: ssPlanner, alt: 'screenshot of Daily Planner App',
        repoLink: 'https://github.com/Stickkman/dailyPlanner05',
        deployedLink: 'https://stickkman.github.io/dailyPlanner05/',
        desc: 'Time management app helps you efficiently plan your day. Enter tasks for each hour, color-coded based on past/present/future. No worries of data loss with peristant storage.'
    },
]

export default projects;