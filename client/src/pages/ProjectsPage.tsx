import { useNavigate } from "react-router-dom";
import { ProjectDetails, ProjectData } from "../types/types";
import { projectData } from "../types/data";
import ProjectTile from "../components/ProjectTile";
import { useState, useEffect } from "react";

interface ProjectsPageProps {
    
}

// how to make this code less repetitive and reuse the code in Dashboard
function ProjectsPage({}: ProjectsPageProps) {
    const navigate = useNavigate();
    const [projects, setProjects] = useState<ProjectData>({});
    const [isLoaded, setIsLoaded] = useState(false);



    useEffect(() => {
        setProjects(projectData);
        setIsLoaded(true);
    }, []);

    const handleClickProjectDetails = (projectId: string) => {
        navigate(`/projects/${projectId}`);
    };


    return (
        <div className={`projects-page ${isLoaded? 'slide-in' : ''}`}>
            <h2 className="content-title">Projects</h2>
            <div className={isLoaded ? 'slide-in-parts' : ''}>
            {Object.keys(projects).map((key) => {
            const project = projects[
              key as keyof typeof projects
            ] as ProjectDetails;
            return (
              <ProjectTile
                key={key}
                projectData={project}
                onClick={() => handleClickProjectDetails(key)}
              />
            );
            })}
            </div>
        </div>
    )
}

export default ProjectsPage;

