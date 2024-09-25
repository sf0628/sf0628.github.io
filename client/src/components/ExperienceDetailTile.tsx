import { ExperienceDetails } from "../types/types";

interface ExperienceDetailTileProps {
    experienceData: ExperienceDetails;
}

function ExperienceDetailTile({experienceData}: ExperienceDetailTileProps) {
    const experience = experienceData as ExperienceDetails;
    return (
        <div className="experience-tile">
            <p className="content-date">{experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}</p>
            <h2 className="content-subtitle">{experience.company}</h2>
            <p className="content-role">{experience.role}</p>
            <hr />
            {Object.keys(experienceData.details).map((key) => {
                const detail = experienceData.details[key as keyof typeof experienceData.details] as string
                return (
                    <p className="content-description">{detail}</p>
                );
            })}
        </div>
    )
}

export default ExperienceDetailTile;