import { ProjectDetails, ProjectData, ExperienceData, ExperienceDetails } from "../../../server/src/types";
import { useEffect, useState } from "react";
import ExperienceTile from "../components/ExperienceTile";
import ProjectTile from "../components/ProjectTile";
import AboutMe from "../components/AboutMe";
import { Navigate, useNavigate } from "react-router-dom";

interface DashboardProps {}

function Dashboard({}: DashboardProps) {
  const navigate = useNavigate();

  const [projects, setProjects] = useState({});
  const [experiences, setExperiences] = useState({});
  const [isLight, setIsLight] = useState(false);
  // Load all project data onto initial page
  useEffect(() => {
    fetch("http://localhost:5001/projects", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((projectData: ProjectData) => setProjects(projectData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Load all the experience data onto initial page
  useEffect(() => {
    fetch("http://localhost:5001/experiences", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((experienceData: ExperienceData) => setExperiences(experienceData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleClickExperiences = () => {
    navigate('/experience');
  };

  const handleClickProjects = () => {
    navigate('/projects')
  };
  
  const handleClickProjectDetails = () => {};

  return (
    <>
      <div id="main-content">
        <hr />
        <AboutMe />
        <hr />
        <div className="main-projects-grid">
          <h2 className="content-title">Projects</h2>
          <button
            type="button"
            className="menu-button"
            onClick={handleClickProjects}
          >
            All Projects
          </button>
        </div>
        {Object.keys(projects).map((key) => {
            const project = projects[
              key as keyof typeof projects
            ] as ProjectDetails;
            return (
              <ProjectTile
                key={key}
                projectData={project}
                onClick={() => handleClickProjectDetails()}
              />
            );
        })}
        <hr />
        <div className="main-experiences-grid">
          <h2 className="content-title">Experiences</h2>
          <button
            type="button"
            className="menu-button"
            onClick={handleClickExperiences}
          >
            All Experiences
          </button>
        </div>
        {Object.keys(experiences).map((key) => {
            const experience = projects[
              key as keyof typeof experiences
            ] as ExperienceDetails;
            return <ExperienceTile key={key} experienceData={experience} />;
        })}
        <hr />
      </div>
    </>
  );
}

export default Dashboard;
