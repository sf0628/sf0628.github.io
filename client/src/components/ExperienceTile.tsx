import { ExperienceDetails } from "../types/types";

interface ExperienceTileProps {
    experienceData: ExperienceDetails;
}

function ExperienceTile({experienceData}: ExperienceTileProps) {
    const experience = experienceData as ExperienceDetails;
    return (
        <div className="experience-tile">
            <p className="content-date">{experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}</p>
            <h2 className="content-subtitle">{experience.company}</h2>
            <p className="content-role">{experience.role}</p>
            <hr />
            <p className="content-description"> {experience.description} </p>
        </div>
    )
}

export default ExperienceTile;