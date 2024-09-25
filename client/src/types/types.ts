export interface ProjectDetails {
    name: string;
    date: string;
    shortDescription: string;
    completed: boolean;
    techStack: string;
    gitHub: string;
    link: string;
    image?: string;
    video?: string;
}

export type ProjectData = Record<string, ProjectDetails>;

export interface ExperienceDetails {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string;
    details: string[];
}

export type ExperienceData = Record<string, ExperienceDetails>;