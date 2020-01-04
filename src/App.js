import React, {useState} from 'react';
import './App.css';

import Navbar from './components/Navbar';
import PersonalInformation from './views/PersonalInformation';
import PersonalInfoCTC from './views/PersonalInfoCTA';
import EducationSection from './views/Education';
import WorkHistory from './views/WorkHistory';
import TechnicalSkillSection from './views/TechnicalSkills';
import Projects from './views/ProjectsSection';
import Footer from './components/Footer';

import cv from './helpers/CV';
import { Divider } from 'semantic-ui-react';

const style = {
  app: {
    width: '80%',
    margin: 'auto'
  },
  educationSection: {
    marginTop: 100,
    backgroundColor: cv.document_details.theme.black,
    height: '100vh',
    display: 'flex'
  },
  workSection: {
    marginTop: 100,
  },
  skillsSection: {
    margin: '100px auto',
    display: 'flex',
    width: '80%',
  },
  skillsSectionContainer: {
    boxShadow: '0 25px 39px -26px rgba(0, 0, 0, 0.6)',
    width: '100%',
    padding: '15px 0',
    zIndex: 1,
    position: 'relative'
  },
  projectsSction: {
    width: '80%',
    margin: 'auto'
  },
  contactSection: {
    boxShadow: '0 0 38px -14px rgba(0,0,0,0.6)'
  }
}

function App() {
  const [menu, toggleMenu] = useState(true)
  return (
    <div>
      <Navbar handleClick={() => toggleMenu(!menu)} />
      <div className='profile-header' >
        <div style={style.app} >
          <PersonalInformation />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,224L80,229.3C160,235,320,245,480,245.3C640,245,800,235,960,213.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      <div className='profile-cta'>
        <PersonalInfoCTC />
      </div>
      <div style={style.educationSection}>
        <EducationSection />
      </div>
      <div style={style.workSection}>
        <WorkHistory />
      </div>
      <Divider />
      <div style={style.skillsSectionContainer}>
        <div style={style.skillsSection}>
          <TechnicalSkillSection />
        </div>
      </div>
      <div className="projects-container">
        <div style={style.projectsSction}>
          <Projects />
        </div>
      </div>
      <div style={style.contactSection}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
