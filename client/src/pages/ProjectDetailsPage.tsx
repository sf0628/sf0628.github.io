import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProjectDetails, ProjectData } from "../types/types";
import { projectData } from "../types/data"; 
import BackButton from "../components/BackButton";
import NotFoundPage from "./NotFoundPage";

interface ProjectDetailsPageProps {}

function ProjectDetailsPage({}: ProjectDetailsPageProps) {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<ProjectDetails | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (projectId) {
      const projectDetail = projectData[projectId as keyof ProjectData] || null;
      setProject(projectDetail);
      setIsLoaded(true);
    }
  }, [projectId]);

  if (!project) {
    return <NotFoundPage />
  }

  return (
    <div className={`project-details-page ${isLoaded ? 'slide-in' : ''}`}>
      <BackButton buttonContent="Back to Projects" />
      <h2 className="content-title">{project.name}</h2>
      {
        project.completed && (
            <>
            <p className="content-date">{project.date}</p>
            <nav className="nav-menu">
                <ul>
                    <li><a href={project.gitHub} target="_blank"><p className="content-role"><u>github</u></p></a></li>
                    <p className="content-role"> / </p>
                    <li><a href={project.link} target="_blank"><p className="content-role"><u>link</u></p></a></li>
                </ul>
            </nav>
            <p className="content-role">Tech Stack: {project.techStack}</p>
            {project.image && <img src={project.image} />}
            {project.video && (
              <div className="video-container">
                <iframe 
                  width="560" 
                  height="315" 
                  src={project.video} 
                  title={project.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            )}
            <p className="content-description">{project.shortDescription}</p>
            <p className="content-description">More Information to Come!</p>
            </>
        )
      }
      {
        !project.completed && (
            <p className="content-description">Details coming soon!</p>
        )
      }
    </div>
  );
}

export default ProjectDetailsPage;
