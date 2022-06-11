import {IoLogoGithub, IoLogoLinkedin} from 'react-icons/io5';

export const Experience =[
    {
        id: 1,
        date:"6 December 2021 - 6 March 2022",
        title:"Front End Web Developer Intern",
        organisation:"TuDa",
        description:"Worked on front end for the web application using ReactJS, Tailwind CSS. Also woked on video-call feature using OpenVidu and AWSChime.",
    },
    {
        id: 2,
        date:"November 2021 - April 2022",
        title:"Website Management Member",
        organisation:"TEDxXIE",
        description:"Worked on front-end of the website for the TEDxXIE event",
    },
    {
        id: 3,
        date:"October 2021 - April 2022",
        title:"Technical Admin",
        organisation:"Transmission XIE",
        description:"Responsible for the technical events for the online college fest. Organized coding competitions on HackerRank."
    }
]

export const Projects =[
    {
        id: 1,
        title:"Paying Guest Website",
        description:"This website is aimed towards providing fresher students and new employees in finding a PG since renting can be hard on the pockets of such freshers due to their financial situation. The website has features like filter by location and accommodation.",
        site:"https://pg-api-app.herokuapp.com/"
    },
    {
        id: 2,
        title:"Netflix Clone",
        description:"This website is cloned to look like Netflix's official website with features such as playable trailers of the series and shows.",
        site:"https://netflix-clone-teal-six.vercel.app/"
    },
    {
        id: 3,
        title:"Weather App",
        description:"A website to obtain the weather of a location given by the user.",
        site:"https://weather-app-shahnihal01.vercel.app/"
    },
    {
        id: 4,
        title:"Personal Finance Management System",
        description:"A python project to help the user manage his/her personal finance. It shows his/her economic standing in current economy and advices investment plans to grow economically to beat inforation.",
        site:"https://github.com/shahnihal01/PersonalFinanceManagementSystem"
    },
    {
        id: 5,
        title:"Equity Research Management System",
        description:"A Java program that helps investor make the right investments and analysts to analyze different stocks and their values. It shows the currnet prices of the stocks and also provides the reports made by the analysts to help make a promising decision.",
        site:"https://github.com/shahnihal01/EquityResearchManagementSystem"
    },
    {
        id: 6,
        title:"A simple ThreeJS project",
        description:"A 3D Model dances on selected moves. Made using ThreeJS",
        site:"https://my-3d-model.vercel.app"
    }
]

export const SocialLinks =[
    {
        id: 1,
        iconSrc:<IoLogoGithub className='text-slate-400 text-3xl cursor-pointer'/>,
        name:"Github",
        link:"https://github.com/shahnihal01",
    },
    {
        id: 2,
        iconSrc:<IoLogoLinkedin className='text-slate-400 text-3xl cursor-pointer'/>,
        name:"LinkedIn",
        link:"https://www.linkedin.com/in/nihalshah01/",
    }
]