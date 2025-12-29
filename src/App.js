import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage';

import Resume from './components/pages/ResumePage';
import Projects from './components/pages/ProjectsPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MainContent from './components/common/MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;