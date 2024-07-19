interface HeaderProps {
    onClickHome: () => void;
    onClickExperience: () => void;
    onClickProjects: () => void;
    onClickResume: () => void;
}

function Header({onClickHome, onClickExperience, onClickProjects, onClickResume}: HeaderProps) {
    return (
        <div className="header-content">
            <button type="button" className="home-button" onClick={onClickHome}>Sophia Fu</button>
            <hr/>
            <button type="button" className="menu-button" onClick={onClickExperience}>experience</button>
            <p className="menu-slash">/ </p>
            <button type="button" className="menu-button" onClick={onClickProjects}>projects</button>
            <p className="menu-slash">/ </p>
            <button type="button" className="menu-button" onClick={onClickResume}>resume</button>
        </div>
    )
}

export default Header;