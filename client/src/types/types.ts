export interface ProjectDetails {
    name: string;
    date: string;
    shortDescription: string;
    completed: boolean;
    techStack: string;
    gitHub?: string;
    link?: string;
}

export type ProjectData = Record<string, ProjectDetails>;

export interface ExperienceDetails {
    title: string;
    role: string;
    location: string;
    startDate: string;
    endDate?: string;
    description: string[];

}

export type ExperienceData = Record<string, ExperienceDetails>;