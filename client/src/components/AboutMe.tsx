import Links from "./Links";

interface AboutMeProps {

}

function AboutMe({}: AboutMeProps) {
    return (
        <div className="about-me">
            <h2 className="content-title">About Me</h2>
            <p>Hi! I'm Sophia and I'm a second-year CS major at Northeastern University
                I'm from Houston, Texas. I'm passionate about technology and love to 
                create coding projects. I also love animals, nail art, music, and 
                a fun fact about me is that before starting CS my main hobby was drawing and painting!
            </p>
            <Links />
        </div>
    )
}

export default AboutMe;