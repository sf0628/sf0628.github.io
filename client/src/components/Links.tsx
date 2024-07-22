import linkedin from '../icons/linkedin.webp';
import github from '../icons/github-dark-mode.svg';
import email from '../icons/email.png';

interface LinksProps {

}

function Links({}: LinksProps) {
    return (
        <div className="links-content">
            <h2 className="links-caption">Contact Me:</h2>
            <ul className="links">
                <li>
                    <a href="https://linkedin.com/in/fusophia" target="_blank"><img src={linkedin}></img></a>
                </li>
                <li>
                    <a href="https://github.com/sf0628" target="_blank"><img id="github-image"src={github}></img></a>
                </li>
                <li>
                    <a href="mailto:fu.so@northeastern.edu" target="_blank"><img src={email}></img></a>
                </li>
            </ul>            
        </div>
    )
}

export default Links;