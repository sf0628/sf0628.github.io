export interface ProjectDetails {
    name: string;
    urlPath: string;
    shortDescription: string;
    completed: boolean;
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