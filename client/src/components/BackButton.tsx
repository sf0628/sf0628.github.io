import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
    buttonContent: string;
    isScroll?: boolean;
}

function BackButton({ buttonContent, isScroll }: BackButtonProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1); // This navigates to the previous page in the history stack
    };

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button className="back-button" 
        onClick={isScroll? handleScroll : handleClick}>{buttonContent}</button>
    );
}

export default BackButton;
