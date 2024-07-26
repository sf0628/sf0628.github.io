import { useEffect, useState } from "react";
import { experienceData } from "../types/data";
import { ExperienceData, ExperienceDetails } from "../types/types";
import ExperienceTile from "../components/ExperienceTile";

interface ExperiencePageProps {

}

function ExperiencePage({}: ExperiencePageProps) {
    const [experiences, setExperiences] = useState<ExperienceData>({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setExperiences(experienceData);
        setIsLoaded(true);
    }, []);

    return (
        <div className={`experience-page ${isLoaded ? 'slide-in' : ''}`}>
            <h2 className="content-title">Experience</h2>
            <div className={isLoaded ? 'slide-in-parts' : ''}>
            {Object.keys(experiences).map((key) => {
            const experience = experiences[
              key as keyof typeof experiences
            ] as ExperienceDetails;
            return <ExperienceTile key={key} experienceData={experience} />;
            })}
            </div>
        </div>
    )
}

export default ExperiencePage;

