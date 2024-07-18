export interface ProjectDetails {
    name: string;
    urlPath: string;
    shortDescription: string;
    completed: boolean;
}

export type ProjectData = Record<string, ProjectDetails>;