import resume from '../icons/july-24-resume.png';
interface ResumePageProp {

}

function ResumePage({}: ResumePageProp) {
    return (
        <div className="resume-page">
            <img id="resume" src={resume}></img>
            <button>Download</button>
        </div>
    )
}

export default ResumePage;

