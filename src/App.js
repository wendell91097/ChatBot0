import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Robocop from './components/Robocop';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
      </Routes>
      <Robocop />
    </Router>
  );
}

export default App;
