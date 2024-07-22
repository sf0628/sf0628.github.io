import Links from "./Links";

interface FooterProps {
    isLight: boolean;
    changeMode: () => void;
}

function Footer({}: FooterProps) {

    return (
        <div className="footer">
            <h3 className="footer-caption">Thanks for visiting my website</h3>
            <Links />
            <p>Developed by Sophia Fu, built in React and Express</p>
            <button type="button" className="dark-light-button" ></button>
        </div>
    )
}

export default Footer;