import { ProjectDetails, ProjectData, ExperienceData, ExperienceDetails } from '../../../server/src/types';
import { useEffect, useState } from 'react';
import ExperienceTile from './ExperienceTile';
import ProjectTile from './ProjectTile';
import Header from './Header';
import Footer from './Footer';

interface DashboardProps {

}

function Dashboard({}: DashboardProps) {
    const [projects, setProjects] = useState({});
    const [experiences, setExperiences] = useState({});
    const [isLight, setIsLight] = useState(false);
    // Load all project data onto initial page
    useEffect(() => {
        fetch('http://localhost:5001/projects', {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((projectData: ProjectData) => setProjects(projectData))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Load all the experience data onto initial page
    useEffect(() => {
        fetch('http://localhost:5001/experiences', {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((experienceData: ExperienceData) => setProjects(experienceData))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleClickHome = () => {

    }
    const handleClickExperiences = () => {

    }
    const handleClickProjects = () => {

    }
    const handleClickResume = () => {

    }

    const handleClickProjectDetails = () => {

    }

    const handleChangeMode = () => {
        
    }




    return (
        <>
        <div id="main-content">
            <Header 
            onClickHome={handleClickHome}
            onClickExperience={handleClickExperiences}
            onClickProjects={handleClickProjects}
            onClickResume={handleClickResume}
            />
            <hr />
            <div className="main-projects-grid">
                <h2>Projects</h2> 
                <button type="button" className="menu-button" onClick={handleClickProjects}>All Projects</button>
                {Object.keys(projects).map((key) => {
                    const project = projects[key as keyof typeof projects] as ProjectDetails;
                    return (
                        <ProjectTile
                        key={key}
                        projectData={project}
                        onClick={() => handleClickProjectDetails()}
                        />
                    )
                })}
            </div>
            <hr />
            <div className="main-experiences-grid">
                <h2>Experiences</h2>
                <button type="button" className="menu-button" onClick={handleClickExperiences}>All Experiences</button>
                {Object.keys(experiences).map((key) => {
                    const experience = projects[key as keyof typeof experiences] as ExperienceDetails;
                    return (
                        <ExperienceTile
                        key={key}
                        experienceData={experience}
                        />
                    )
                })}
            </div>
            <hr />
            <Footer 
            isLight= {isLight}
            changeMode={() => handleChangeMode()}
            />

        </div>
        </>
    
    )
}

export default Dashboard;