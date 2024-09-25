import { ProjectData, ExperienceData } from "./types"

//project data
const projectData: ProjectData = {
    "stock-manager": {
      "name": "Stock Manager",
      "date": "June 2024",
      "shortDescription": "A Java application for users to analyze stocks, " +
       "manage portfolios, and visualize performance of stocks.",
      "completed": true,
      "techStack": "Swing (Java)",
      "gitHub": "https://github.com/sf0628/stock-manager/tree/main/res",
      "link": "https://github.com/sf0628/stock-manager/tree/main/res"
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
      "link": "https://github.com/sf0628/minesweeper"
    },
    "productivity-under-the-sea": {
      "name": "Productivity Under The Sea",
      "date": "February 2024",
      "shortDescription": "An ocean-themed Chrome extension for productivity " +
      "time management.",
      "completed": true,
      "techStack": "JavaScript, CSS, HTML",
      "gitHub": "https://github.com/sf0628/hbp2024",
      "link": "https://github.com/sf0628/hbp2024"
    },
    
}
  
  //experience data
  const experienceData: ExperienceData = {
    "tbi-lab": {
      "company": "The Brain ImPACT Lab",
      "role": "Undergraduate Research Assistant",
      "location": "Boston, MA",
      "startDate": "September 2024",
      "description": 
        "Collaborate with researchers in applying computational modeling of the brain of patients" +
        " with traumatic brain injuries. In particular, the study the effects of exercise on the brain.",
      "details": [
        "Facilitate data collection for TBI clinical trials and write summarized reports following each session for a 12-week period.",
        "Collaborate with researchers in studying data management and applying computational modeling of the brain using R."
      ]
    },
    "programming-lab": {
      "company": "Center of Student Involvement - Programming Lab",
      "role": "Front Desk Proctor",
      "location": "Boston, MA",
      "startDate": "April 2024",
      "description": 
        "Maintain a continuous documentation of interactions with and users of the lab, " +
        "facilitated package pickup, locker access, and opening/closing the lab.",
      "details": [
        "Maintain a continuous documentation of interactions with and users of the lab, " +
        "facilitated package pickup, locker access, and opening/closing the lab.",
        "Improve operational efficiency by engineering documentation system for an average of 100+ weekly walk-ins, streamlining " +
        "these range of student inquiries."
      ]
    },
    "cosmo": {
      "company": "Northeastern Computer Science Mentoring Organization (CoSMO)",
      "role": "Outreach Chair",
      "location": "Boston, MA",
      "startDate": "Feburary 2024",
      "description": 
        "Responsible for all communications with 1000+ club members" + 
        "via Slack and club newsletters. Developed a comprehensive guide" +
        " for students to explore career paths within CS.",
      "details": [
        "Increase organizational visibility and participation by delivering communications to 1000+ students and various campus-wide" +
        " promotional activities, increasing club engagement by 750% within 6 months.",
        "Develop comprehensive guides for students to explore career paths for students within Khoury College."
      ]
    },
    "oasis": {
      "company": "Oasis at Northeastern",
      "role": "Software Developer",
      "location": "Boston, MA",
      "startDate": "January 2024",
      "endDate": "April 2024",
      "description": 
        "Developed 'Wardrobe Wizard', an educational resource sharing web application. ",
      "details": [
        "Led a 4-member team in engineering an educational resource sharing web app, managing 40+ CRUD operations in the MySQL" +
        " database, enabling seamless addition, alteration, and removal of educational resources.",
        "Utilized Docker containers to encapsulate the application, ensuring a consistent and isolated runtime environment.",
        "Incorporated AppSmith UI for dynamic navigation and interactive dashboards, enabling real-time updates to the MySQL database" +
        " and offering users live tracking of resource availability."
      ]
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
        " disasters, mapped buildings in underdeveloped countries, importance of blood donations",
      "details": [
        "Successfully fundraised nearly $400 in support of the Measles and Rubella campaign.",
        "Designed promotional flyers for events and awareness campaigns, documented club meetings " +
        "and activities.", 
        "Raised awareness for international humanitarian law, home fires, natural" +
        " disasters, mapped buildings in underdeveloped countries, importance of blood donations.",
      ]
    }
  }
  
export { projectData, experienceData };