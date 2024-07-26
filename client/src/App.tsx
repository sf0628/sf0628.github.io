import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleOnClickHome = () => {
    navigate('/');
  };

  const handleOnClickExperience = () => {
    navigate('/experience');
  };

  const handleOnClickProjects = () => {
    navigate('/projects');
  };

  const handleOnClickResume = () => {
    navigate('/resume');
  };
  return (
    <div className="page">
      <Header
      onClickHome={handleOnClickHome}
      onClickExperience={handleOnClickExperience}
      onClickProjects={handleOnClickProjects}
      onClickResume={handleOnClickResume}
      />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
