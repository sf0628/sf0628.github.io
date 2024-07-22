import { ProjectDetails } from '../../../server/src/types';

interface ProjectTileProps {
    projectData: ProjectDetails;
    onClick:  () => void;
}

function ProjectTile({ projectData, onClick }: ProjectTileProps) {
    const project = projectData as ProjectDetails;
    return (
        <div className='project-tile' onClick={onClick}>
            <h2 className='project-name'>{project.name}</h2>
            <p className='project-description'>{project.shortDescription}</p>
        </div>
    );
}

export default ProjectTile;