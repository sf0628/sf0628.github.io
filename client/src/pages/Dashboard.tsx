import { ProjectDetails, ProjectData, ExperienceData, ExperienceDetails } from "../types/types";
import { useEffect, useState } from "react";
import ExperienceTile from "../components/ExperienceTile";
import ProjectTile from "../components/ProjectTile";
import AboutMe from "../components/AboutMe";
import { useNavigate } from "react-router-dom";
import { projectData, experienceData } from "../types/data";

interface DashboardProps {}

function Dashboard({}: DashboardProps) {
  const navigate = useNavigate();

  const [projects, setProjects] = useState<ProjectData>({});
  const [experiences, setExperiences] = useState<ExperienceData>({});
  const [isLoaded, setIsLoaded] = useState(false);

//   // Load all project data onto initial page
//   useEffect(() => {
//     fetch("http://localhost:5001/projects", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((projectData: ProjectData) => setProjects(projectData))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // Load all the experience data onto initial page
//   useEffect(() => {
//     fetch("http://localhost:5001/experiences", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((experienceData: ExperienceData) => setExperiences(experienceData))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);


  useEffect(() => {
    setProjects(projectData);
    console.log('Projects set:', projectData);
  }, []);

  useEffect(() => {
    setExperiences(experienceData);
    console.log('Experiences set:', experienceData);
  }, []);

  useEffect(() => {
    if (Object.keys(projects).length > 0 && Object.keys(experiences).length > 0) {
      setIsLoaded(true);
    }
  }, [projects, experiences]);

  const handleClickExperiences = () => {
    navigate(`/experience`);
  };

  const handleClickProjects = () => {
    navigate(`/projects`);
  };

  const handleClickProjectDetails = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
      <div id="main-content" className={isLoaded ? 'slide-in' : ''}>
        <hr />
        <AboutMe isLoaded={isLoaded}/>
        <hr />
        <div className={isLoaded ? 'slide-in-parts' : ''}>
        <div className={`main-projects-grid ${isLoaded ? 'slide-in-parts' : ''}`}>
          <h2 className="content-title">Projects</h2>
          <button
            type="button"
            className="menu-button"
            onClick={handleClickProjects}
          >
            All Projects
          </button>
        </div>
        {Object.keys(projects).slice(0, 3).map((key) => {
            const project = projects[
              key as keyof typeof projects
            ] as ProjectDetails;
            return (
              <ProjectTile
                projectData={project}
                onClick={() => handleClickProjectDetails(key)}
              />
            );
        })}
        </div>
        <hr />
        <div className={isLoaded ? 'slide-in-parts' : ''}>
        <div className={`main-experiences-grid ${isLoaded ? 'slide-in-parts' : ''}`}>
          <h2 className="content-title">Experiences</h2>
          <button
            type="button"
            className="menu-button"
            onClick={handleClickExperiences}
          >
            All Experiences
          </button>
        </div>
        {Object.keys(experiences).slice(0, 3).map((key) => {
            const experience = experiences[
              key as keyof typeof experiences
            ] as ExperienceDetails;
            return <ExperienceTile key={key} experienceData={experience} />;
        })}
        </div>
        <hr />
      </div>
    </>
  );
}

export default Dashboard;
