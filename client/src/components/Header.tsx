interface HeaderProps {
    onClickHome: () => void;
    onClickExperience: () => void;
    onClickProjects: () => void;
    onClickResume: () => void;
}

function Header({onClickHome, onClickExperience, onClickProjects, onClickResume}: HeaderProps) {
    return (
        <header className="header-content">
            <button type="button" className="home-button" onClick={onClickHome}>Sophia Fu</button>
            <nav className="nav-menu">
                <ul>
                    <li><button type="button" className="menu-button text" onClick={onClickExperience}>experience</button></li>
                    <p className="menu-slash">/ </p>
                    <li><button type="button" className="menu-button" onClick={onClickProjects}>projects</button></li>
                    <p className="menu-slash">/ </p>
                    <li><button type="button" className="menu-button" onClick={onClickResume}>resume</button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;