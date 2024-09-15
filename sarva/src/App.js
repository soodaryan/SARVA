import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import SidePanel from './components/Features';
import MainArea from './components/MainArea';
function App() {
  return (
    <>
      <Dashboard />
      <Navbar />
      <SidePanel />
      <MainArea />
    </>

  );
}

export default App;
