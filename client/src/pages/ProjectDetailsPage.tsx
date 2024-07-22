import { useParams } from "react-router-dom";

interface ProjectDetailsProps {

}

function ProjectDetailsPage({}: ProjectDetailsProps) {
    const params = useParams<{projectId: string}>();
    return (
        <div className="project-details-page">
            <h2>Project Details { params.projectId }</h2>
        </div>
    );
}

export default ProjectDetailsPage;

