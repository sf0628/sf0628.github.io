import { Link } from "react-router-dom";

interface ProjectsPageProps {

}

function ProjectsPage({}: ProjectsPageProps) {
    const profiles = [1, 2, 3, 4, 5];
    return (
        <div className="projects-page">
            <h2>Projects</h2>
            {profiles.map((profile) => (
                <Link key={profile} to={`/projects/${profile}`}>
                    Profile {profile}
                </Link>
            ))}
        </div>
    )
}

export default ProjectsPage;

