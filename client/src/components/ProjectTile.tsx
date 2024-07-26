import { ProjectDetails } from '../types/types';

interface ProjectTileProps {
    projectData: ProjectDetails;
    onClick:  () => void;
}

function ProjectTile({ projectData, onClick }: ProjectTileProps) {
    const project = projectData as ProjectDetails;
    return (
        <div className='project-tile' onClick={onClick} >
            <h2 className='content-subtitle'>{project.name}</h2>
            <p className='content-description'>{project.shortDescription}</p>
        </div>
    );
}

export default ProjectTile;