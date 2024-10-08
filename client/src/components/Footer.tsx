import BackButton from "./BackButton";
import Links from "./Links";

interface FooterProps {
    
}

function Footer({}: FooterProps) {

    return (
        <div className="footer-main">
            <div className="footer">
            <h3 className="footer-caption">Thanks for visiting my website!</h3>
            <Links />
            <p>Developed by Sophia Fu, built in React and Express</p>
            </div>
            <BackButton buttonContent="Back to Top" isScroll />
        </div>
    )
}

export default Footer;