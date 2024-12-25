import Navigation from './components/Navigation';
import ProfileModal from './components/modals/ProfileModal';
import ExperiencesModal from './components/modals/ExperiencesModal';
import ProjectsModal from './components/modals/ProjectsModal';
import SkillsModal from './components/modals/SkillsModal';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-color-1 h-screen bg-[url('./assets/images/background.png')] bg-cover bg-no-repeat p-4 relative">
      <div className="flex items-center justify-center h-full w-full">
        <div className="inline-flex items-stretch gap-2">
          <div className="w-1 bg-[#212A3E]"></div>
          <div className="inline-flex flex-col gap-2">
            <p className="text-lg md:text-2xl lg:text-3xl">Hi, my name is</p>
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold">Mushlih Nur Islam</h1>
            <span className="text-lg md:text-2xl lg:text-3xl">and I’m a Web Developer</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <Navigation />
        <Routes>
          <Route path="/" element="" />
          <Route path="/skills" element={<SkillsModal />} />
          <Route path="/projects" element={<ProjectsModal />} />
          <Route path="/experiences" element={<ExperiencesModal />} />
          <Route path="/profile" element={<ProfileModal />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
