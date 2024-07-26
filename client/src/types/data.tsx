import { ProjectData, ExperienceData } from "./types"

const projectData: ProjectData = {
    "stock-manager": {
      "name": "Stock Manager",
      "date": "June 2024",
      "shortDescription": "A Java application for users to analyze stocks, " +
       "manage portfolios, and visualize performance of stocks.",
      "completed": true,
      "techStack": "Swing (Java)",
      "gitHub": "https://github.com/sf0628",
      "link": "https://youtube.com"
    },
    "edushare-hub": {
      "name": "EduShare Hub",
      "date": "April 2024",
      "shortDescription": "A resource sharing platform meant to alleviate " +
       "financial burden and collaboration in academic communities.",
      "completed": true,
      "techStack": "Python, Javascript, Docker, AppSmith, MySQL, Git",
      "gitHub": "https://github.com/sf0628/EduExchange-Backend",
      "link": "https://youtu.be/im4cexqm_8E"
    },
    "wardrobe-wizard": {
      "name": "Wardrobe Wizard",
      "date": "January - April 2024",
      "shortDescription": "A digital wardrobe visualization and generation platform.",
      "completed": true,
      "techStack": "JavaScript, CSS, HTML, Supabase, Git",
      "gitHub": "https://github.com/sf0628/s24-group4-wardrobe-wizard",
      "link": "https://www.linkedin.com/posts/tranganh-nguyen_today-was-our-demo-day-for-the-oasis-project-ugcPost-7182856990673510400-ahVI?utm_source=share&utm_medium=member_desktop",
    },
    "minesweeper-clone": {
      "name": "MineSweeper Clone",
      "date": "March 2024",
      "shortDescription": "A Java game that recreates the MineSweeper game.",
      "completed": true,
      "techStack": "Java, Northeastern Image Library",
      "gitHub": "https://github.com/sf0628/minesweeper",
      "link": "https://youtube.com"
    },
    "productivity-under-the-sea": {
      "name": "Productivity Under The Sea",
      "date": "February 2024",
      "shortDescription": "An ocean-themed Chrome extension for productivity " +
      "time management.",
      "completed": true,
      "techStack": "JavaScript, CSS, HTML",
      "gitHub": "https://github.com/gpalmer27/hbp2024",
      "link": "https://youtube.com"
    },
    
}
  
  //some example experience data
  const experienceData: ExperienceData = {
    "programming-lab": {
      "company": "Center of Student Involvement - Programming Lab",
      "role": "Front Desk Proctor",
      "location": "Boston, MA",
      "startDate": "April 2024",
      "description": 
        "Maintain a continuous documentation of interactions with and " +
        "users of the lab, facilitated package pickup, locker access, " + 
        "and opening/closing the lab."
    },
    "cosmo": {
      "company": "Northeastern Computer Science Mentoring Organization (CoSMO)",
      "role": "Outreach Chair",
      "location": "Boston, MA",
      "startDate": "Feburary 2024",
      "description": 
        "Responsible for all communications with 1000+ club members" + 
        "via Slack and club newsletters. Developed a comprehensive guide" +
        " for students to explore career paths within CS"
    },
    "oasis": {
      "company": "Oasis at Northeastern",
      "role": "Software Developer",
      "location": "Boston, MA",
      "startDate": "January 2024",
      "endDate": "April 2024",
      "description": 
        "Developed 'Wardrobe Wizard' (see projects for more information). "
    },
    "rcc": {
      "company": "Dawson Red Cross Club",
      "role": "Co-Founder, Historian",
      "location": "Pearland, Texas",
      "startDate": "September 2020",
      "endDate": "May 2023",
      "description": 
        "Successfully fundraised nearly $400 in support of the Measles and Rubella campaign. " +
        "Designed promotional flyers for events and awareness campaigns, documented club meetings " +
        "and activities. Raised awareness for international humanitarian law, home fires, natural" +
        " disasters, mapped buildings in underdeveloped countries, importance of blood donations"
    }
  }
  
export { projectData, experienceData };