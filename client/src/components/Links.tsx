interface LinksProps {
}

function Links({}: LinksProps) {
    return (
        <div className="footer-content">
            <a href="www.linkedin.com/in/fusophia">
                <img src="https://placehold.co/15x15"></img>
                LinkedIn
            </a>
            <a href="https://github.com/sf0628">
                <img src="https://placehold.co/15x15"></img>
                GitHub
            </a>
            <a href="mailto:fu.so@northeastern.edu">
                <img src="https://placehold.co/15x15"></img>
                Email
            </a>
        </div>
    )
}

export default Links;