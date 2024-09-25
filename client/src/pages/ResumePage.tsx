import resume from '../icons/sept-24-resume.png';
import resumePDF from '../icons/sept-24-resume.pdf';

interface ResumePageProp {
    
}

function ResumePage({}: ResumePageProp) {
    const onClickDownload = () => {
        const pdfUrl = resumePDF;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Sophia-Fu-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={`resume-page ${'slide-in'}`}>
            <img id="resume" src={resume} alt="Resume"></img>
            <button type="button" onClick={onClickDownload}>Download</button>
        </div>

    )
}

export default ResumePage;

