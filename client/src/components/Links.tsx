interface LinksProps {

}

function Links({}: LinksProps) {
    return (
        <div className="links-content">
            <h2>Contact Me</h2>
            <a href="https://linkedin.com/in/fusophia" target="_blank">
                <img src="https://placehold.co/15x15"></img>
                LinkedIn
            </a>
            <a href="https://github.com/sf0628" target="_blank">
                <img src="https://placehold.co/15x15"></img>
                GitHub
            </a>
            <a href="mailto:fu.so@northeastern.edu" target="_blank">
                <img src="https://placehold.co/15x15"></img>
                Email
            </a>
        </div>
    )
}

export default Links;