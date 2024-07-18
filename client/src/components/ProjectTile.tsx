import { ProjectDetails } from '../../../server/src/types';
import React from 'react';

interface ProjectTileProps {
    // projectData: ProjectDetails;
    onClick:  () => void;
}

function ProjectTile({ onClick }) {
    return (
        <div className="project-tile" onClick={onClick}>
            
        </div>
    );
}

export default ProjectTile;