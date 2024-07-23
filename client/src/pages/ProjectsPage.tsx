import { useLocation } from "react-router-dom";
import { ProjectDetails } from "../types/types";
import ProjectTile from "../components/ProjectTile";

interface ProjectsPageProps {
    
}

function ProjectsPage({}: ProjectsPageProps) {
    const location = useLocation();
    const { projects, onClickProjectDetails } = location.state || {};

    return (
        <div className="projects-page">
            <h2 className="content-title">Projects</h2>
            {Object.keys(projects).map((key) => {
            const project = projects[
              key as keyof typeof projects
            ] as ProjectDetails;
            return (
              <ProjectTile
                key={key}
                projectData={project}
                onClick={() => onClickProjectDetails(key)}
              />
            );
        })}
        </div>
    )
}

export default ProjectsPage;

