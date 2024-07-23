import { ProjectData, ExperienceData } from "./types"

const projectData: ProjectData = {
    "stock-manager": {
      "name": "Stock Manager",
      "date": "June 2024",
      "shortDescription": "A Java application for users to analyze stocks, " +
       "manage portfolios, and visualize performance of stocks.",
      "completed": true,
      "techStack": "Swing (Java)"
    },
    "edushare-hub": {
      "name": "EduShare Hub",
      "date": "April 2024",
      "shortDescription": "A resource sharing platform meant to alleviate " +
       "financial burden and collaboration in academic communities.",
      "completed": true,
      "techStack": "Python, Javascript, Docker, AppSmith, MySQL, Git",
      "gitHub": "youtube.com",
      "link": "https://github.com/sf0628/EduExchange-Backend"
    },
    "wardrobe-wizard": {
      "name": "Wardrobe Wizard",
      "date": "January - April 2024",
      "shortDescription": "A digital wardrobe visualization and generation platform.",
      "completed": true,
      "techStack": "JavaScript, CSS, HTML, Supabase, Git",
      "gitHub": "https://github.com/sf0628/s24-group4-wardrobe-wizard"
    },
    "minesweeper-clone": {
      "name": "MineSweeper Clone",
      "date": "March 2024",
      "shortDescription": "A Java game that recreates the MineSweeper game.",
      "completed": true,
      "techStack": "Java, Northeastern Image Library",
      "gitHub": "https://github.com/sf0628/minesweeper"
    },
    "productivity-under-the-sea": {
      "name": "Productivity Under The Sea",
      "date": "February 2024",
      "shortDescription": "An ocean-themed Chrome extension for productivity " +
      "time management.",
      "completed": true,
      "techStack": "JavaScript, CSS, HTML",
      "gitHub": "https://github.com/gpalmer27/hbp2024"
    },
    
}
  
  //some example experience data
  const experienceData: ExperienceData = {
    "example job": {
      "title": "example job",
      "role": "developer",
      "location": "Boston, MA",
      "startDate": "May 2023",
      "endDate": "May 2024",
      "description": [
        "blah blah this is the description blah blah."
      ]
    }
  }
  
export { projectData, experienceData };