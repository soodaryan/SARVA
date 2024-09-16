import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import SidePanel from './components/Features';
import MainArea from './components/MainArea';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
function App() {
  return (
    <>
      <Dashboard />
      <Navbar />
      <SidePanel />
      <MainArea />
      <LandingPage/>
      <LoginPage/>
    </>

  );
}

export default App;
