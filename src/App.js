import React from 'react';
import HeaderInfo from './cvinfo/HeaderInfo.js';
import ExperienceInfo from './cvinfo/ExperienceInfo.js';
import EduSkillsInfo from './cvinfo/EduSkillsInfo.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidepanel">
        <EduSkillsInfo />
      </div>
      <div className="mainpanel">
        <HeaderInfo />
        <ExperienceInfo />
      </div>
    </div>
  );
}

export default App;
