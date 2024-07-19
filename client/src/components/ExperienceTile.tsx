import { ExperienceDetails } from "../../../server/src/types";

interface ExperienceTileProps {
    experienceData: ExperienceDetails;
}

function ExperienceTile({experienceData,}: ExperienceTileProps) {
    const experience = experienceData as ExperienceDetails;
    return (
        <div className="experience-tile">
            <p>{experience.startDate} - {experience.endDate ? experience.endDate : 'Present'}</p>
            <h2 className="experience-title">{experience.title}</h2>
            <p>{experience.role}</p>
            <ul className="experience-description">
                {experience.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExperienceTile;